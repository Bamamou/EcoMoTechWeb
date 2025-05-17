// server.js
import express from 'express';
import multer from 'multer';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Allow your Vite dev server (and later your built app) to call this API
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',  // tighten this in production
}));

// Parse form with `resume` file
app.post('/api/apply', upload.single('resume'), async (req, res) => {
  try {
    const {
      firstName, lastName, email, phone,
      linkedin, academicLevel, experience, coverLetter,
      jobId, jobTitle
    } = req.body;

    // configure Nodemailer
    const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,        // use STARTTLS
    auth: {
        user: 'apikey',     // this literal string, per SendGrid docs
        pass: process.env.SENDGRID_API_KEY
    }
    });

    // build email
    const mailOptions = {
      from: process.env.HR_EMAIL, // use your verified address here
      to:   process.env.HR_EMAIL,               
      subject: `New application for ${jobTitle} (${firstName} ${lastName})`,
      html: `
        <h1>Application: ${jobTitle}</h1>
        <p><b>Name:</b> ${firstName} ${lastName}<br/>
           <b>Email:</b> ${email}<br/>
           <b>Phone:</b> ${phone || '—'}<br/>
           <b>LinkedIn:</b> ${linkedin || '—'}<br/>
           <b>Academic Level:</b> ${academicLevel}<br/>
           <b>Experience:</b> ${experience}</p>
        <h2>Cover Letter</h2>
        <p>${coverLetter || '<em>None provided</em>'}</p>
      `,
      attachments: [{
        filename: req.file.originalname,
        content:  req.file.buffer,
        contentType: req.file.mimetype,
      }],
    };

    // send
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send application.' });
  }
});

// In production serve your built Vite files as static:
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));           // Vite’s default build output
  app.get('*', (req, res) => {
    res.sendFile(`${process.cwd()}/dist/index.html`);
  });
}

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Server listening on http://localhost:${port}`));
