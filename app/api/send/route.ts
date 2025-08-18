import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import React from 'react';
import ContactFormEmail from '@/emails/ContactFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'manthovanir24@gmail.com'; // Ganti dengan alamat email yang Anda daftarkan di Resend

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@your-verified-domain.com>', // GANTI DENGAN DOMAIN ANDA
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
