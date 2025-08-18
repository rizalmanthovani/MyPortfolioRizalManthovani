import React from 'react';

interface ContactFormEmailProps {
  name: string;
  senderEmail: string;
  message: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  senderEmail,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h2 style={{ color: '#4f46e5' }}>Pesan Baru dari Portofolio Anda</h2>
    <p>
      Anda telah menerima pesan baru dari formulir kontak di website portofolio Anda.
    </p>
    <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />
    <p>
      <strong>Dari:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> <a href={`mailto:${senderEmail}`}>{senderEmail}</a>
    </p>
    <p>
      <strong>Pesan:</strong>
    </p>
    <p style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>{message}</p>
  </div>
);

export default ContactFormEmail;

