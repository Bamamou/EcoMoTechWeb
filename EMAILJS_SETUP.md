# EmailJS Setup Guide

This project uses EmailJS for handling both contact forms and job applications. Here's how to set it up:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note your **Service ID** (e.g., `ecomotech`)

## 3. Create Email Templates

### Contact Form Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template ID: `ECOMOTECH` (or your choice)
4. Subject: `New Contact from {{from_name}}`
5. Template content:
```html
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from EcoMoTech website
```

### Job Application Template
1. Create another template
2. Template ID: `job_application_template` (or your choice)
3. Subject: `Job Application: {{job_title}} - {{from_name}}`
4. Template content:
```html
New job application received:

Position: {{job_title}} (ID: {{job_id}})

Applicant Details:
- Name: {{first_name}} {{last_name}}
- Email: {{email}}
- Phone: {{phone}}
- LinkedIn: {{linkedin}}
- Academic Level: {{academic_level}}
- Experience: {{experience}}

Cover Letter:
{{cover_letter}}

Resume: {{resume_filename}}
{{resume_content}}

---
Sent from EcoMoTech careers page
```

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it (e.g., `L2DkGjfmnyn-pOmed`)

## 5. Update Environment Variables

Update your `.env` file with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id  
VITE_EMAILJS_JOB_TEMPLATE_ID=your_job_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. For Production Deployment

### GitHub Pages
- No additional setup needed
- Environment variables are built into the static files

### Netlify
Add these environment variables in Netlify dashboard:
```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_JOB_TEMPLATE_ID=your_job_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 7. Testing

1. Start your development server: `npm run dev`
2. Navigate to contact page and test the contact form
3. Navigate to a job posting and test the application form
4. Check your email inbox for the test messages

## Troubleshooting

- **Template not found**: Check template IDs match your environment variables
- **Service not found**: Verify service ID is correct
- **Permission denied**: Check your EmailJS account limits and verify email service setup
- **Large files**: Resume files are converted to base64, which may hit EmailJS size limits (1MB typically)

## Current Configuration

- **Service ID**: `ecomotech`
- **Contact Template**: `ECOMOTECH`
- **Job Template**: `job_application_template`
- **Public Key**: `L2DkGjfmnyn-pOmed`

*Note: Update these values with your actual EmailJS credentials.*
