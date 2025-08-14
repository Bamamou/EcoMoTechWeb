import nodemailer from 'nodemailer';
import multiparty from 'multiparty';

export async function handler(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  try {
    // Parse multipart form data
    const form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(event.body, (err, fields, files) => {
        if (err) reject(err);
        else resolve({ fields, files });
      });
    });

    // Extract form fields
    const firstName = fields.firstName?.[0] || '';
    const lastName = fields.lastName?.[0] || '';
    const email = fields.email?.[0] || '';
    const phone = fields.phone?.[0] || '';
    const linkedin = fields.linkedin?.[0] || '';
    const academicLevel = fields.academicLevel?.[0] || '';
    const experience = fields.experience?.[0] || '';
    const coverLetter = fields.coverLetter?.[0] || '';
    const jobId = fields.jobId?.[0] || '';
    const jobTitle = fields.jobTitle?.[0] || '';

    // Configure Nodemailer for SendGrid
    const transporter = nodemailer.createTransporter({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });

    // Build email content
    const mailOptions = {
      from: process.env.HR_EMAIL || 'ecomotech@outlook.com',
      to: process.env.HR_EMAIL || 'ecomotech@outlook.com',
      subject: `New Application: ${jobTitle} - ${firstName} ${lastName}`,
      html: `
        <h1>New Job Application: ${jobTitle}</h1>
        <h2>Applicant Information</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
        <p><strong>Academic Level:</strong> ${academicLevel}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Job ID:</strong> ${jobId}</p>
        
        <h2>Cover Letter</h2>
        <p>${coverLetter || 'No cover letter provided'}</p>
      `,
      attachments: files.resume ? [{
        filename: files.resume[0].originalFilename || 'resume.pdf',
        content: files.resume[0].path,
        contentType: files.resume[0].headers['content-type'] || 'application/pdf'
      }] : []
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        success: true, 
        message: 'Application submitted successfully!' 
      }),
    };

  } catch (error) {
    console.error('Application submission error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Failed to submit application',
        message: error.message 
      }),
    };
  }
}
