// testEmail.js

const nodemailer = require('nodemailer');

async function sendTestEmail() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.tmlifestylecoaching.com', // SMTP host
      port: 465,                            // SMTP port
      secure: true,                         // true for 465, false for other ports
      auth: {
        user: 'info@tmlifestylecoaching.com', // SMTP username
        pass: 'your_new_secure_password',      // SMTP password
      },
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('SMTP configuration is correct.');

    // Send a test email
    const mailOptions = {
      from: 'info@tmlifestylecoaching.com',
      to: 'info@tmlifestylecoaching.com', // Change to your email for testing
      subject: 'Test Email from Nodemailer',
      text: 'This is a test email to verify SMTP configuration.',
    };

    await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

sendTestEmail();
