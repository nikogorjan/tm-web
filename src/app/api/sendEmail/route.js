// src/app/api/sendemail/route.js

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      selectedService,
      selectedOption,
      selectedTrainer,
      selectedGoal,
      selectedCountry,
      message,
      counter,
    } = await request.json();

    // Basic validation
    if (!name || !email || !selectedService) {
      console.log('Missing required fields:', { name, email, selectedService });
      return NextResponse.json(
        { success: false, message: 'Prosimo izpolnite vsa polja.' },
        { status: 400 }
      );
    }

    // Create a transporter with correct SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // 'mail.tmlifestylecoaching.com'
      port: parseInt(process.env.EMAIL_PORT) || 465, // 465 for SSL
      secure: process.env.EMAIL_SECURE === 'true', // true for 465
      auth: {
        user: process.env.EMAIL_USER, // 'info@tmlifestylecoaching.com'
        pass: process.env.EMAIL_PASS, // Your updated secure password
      },
    });

    // Verify connection configuration
    await transporter.verify();
    console.log('SMTP connection successful.');

    // Compose the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Change if sending to a different recipient
      subject: `Nova prijava od ${name}`,
      text: `
        Imate novo prijavo na trening:

        Ime: ${name}
        E-naslov: ${email}
        Telefon: ${phone}
        Storitev: ${selectedService}
        Izbira: ${selectedOption}
        Število ur: ${counter}
        Trener: ${selectedTrainer}
        Cilj: ${selectedGoal}
        Sporočilo: ${message}
      `,
      // For HTML emails, you can use the 'html' field instead of 'text'
      // html: `<p>Your HTML content here</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');

    return NextResponse.json(
      { success: true, message: 'Sporočilo poslano uspešno!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Prišlo je do težave, prosimo poskusite znova ali napišite sporočilo na: info@tmlifestylecoaching.com' },
      { status: 500 }
    );
  }
}
