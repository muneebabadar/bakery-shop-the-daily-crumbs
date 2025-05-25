import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email content
    const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO,
    subject: '📬 New Message from Contact Form',
    replyTo: email,
    html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #fffafc; border: 1px solid #f0cce5; border-radius: 10px;">
        <h2 style="color: #c682b9;">💌 You've Got a New Message!</h2>
        <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p style="font-size: 16px;"><strong>Message:</strong></p>
        <div style="background-color: #fef9fb; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #c682b9;">
            <p style="font-size: 15px; margin: 0; white-space: pre-line;">${message}</p>
        </div>
        <br/>
        <footer style="margin-top: 20px; font-size: 13px; color: #888;">
            Sent via the Daily Crumbs Bakery website 🍪
        </footer>
        </div>
    `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
