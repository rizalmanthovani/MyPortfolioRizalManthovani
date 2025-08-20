import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message || typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
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

    // Selalu coba baca respons. Google Script bisa mengembalikan teks atau JSON.
    const responseText = await response.text();

    if (!response.ok) {
      // Jika respons tidak OK, log body teksnya
      console.error('Google Script Network Error:', responseText);
      return NextResponse.json({ error: 'Failed to submit form.' }, { status: response.status });
    }

    try {
      // Coba parse sebagai JSON. Jika berhasil, periksa hasilnya.
      const responseData = JSON.parse(responseText);
      if (responseData.result !== 'success') {
        console.error('Google Script reported an error:', responseData);
        return NextResponse.json({ error: 'An error occurred within the email script.' }, { status: 500 });
      }
    } catch (e) {
      // Jika gagal parse JSON, berarti ada error lain yang tidak terduga dari Google Script
      console.error('Could not parse Google Script response as JSON. Response text:', responseText, 'Error:', e);
      return NextResponse.json({ error: 'Received an invalid response from the email service.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
