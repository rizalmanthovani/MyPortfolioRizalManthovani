import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Missing GOOGLE_SCRIPT_URL environment variable');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    // Kirim data ke Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Script Error:', errorText);
      return NextResponse.json({ error: 'Failed to submit form.' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
