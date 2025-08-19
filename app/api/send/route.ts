import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';
import ContactFormEmail from '@/emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
// Gunakan environment variables untuk fleksibilitas dan keamanan
const toEmail = process.env.RESEND_TO_EMAIL;
const fromEmail = process.env.RESEND_FROM_EMAIL;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!toEmail || !fromEmail) {
      console.error('Missing RESEND_TO_EMAIL or RESEND_FROM_EMAIL environment variables');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Pesan dari ${name} via Portofolio`,
      replyTo: email,
      react: ContactFormEmail({ name, senderEmail: email, message }) as React.ReactElement,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
