import Link from 'next/link';
import { contacts } from '@/data/contacts';
import styles from './Contact.module.css';

const socialIcons: Record<string, string> = {
  email: '✉️',
  linkedin: '💼',
  github: '🐙',
  resume: '📄',
};

const socialLabels: Record<string, string> = {
  email: 'rizal@example.com',
  linkedin: 'linkedin.com/in/rizalmanthovani',
  github: 'github.com/rizalmanthovani',
  resume: 'Download Resume',
};

export default function Contact() {
  const email = contacts.find((c) => c.type === 'email');

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionTag}>Kontak</div>
          <h2 className={styles.heading}>
            Mari{' '}
            <span className={styles.headingAccent}>Berkolaborasi</span>
          </h2>
          <p className={styles.subtext}>
            Saya selalu terbuka untuk proyek menarik, peluang kerja, atau sekadar ngobrol tentang teknologi.
          </p>
        </div>

        {/* Big CTA Card */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaEmoji}>🚀</div>
          <p className={styles.ctaText}>
            Punya <strong>ide proyek</strong> atau sedang mencari <strong>developer berpengalaman</strong>?
            Saya siap membantu Anda mewujudkan visi menjadi produk digital yang luar biasa.
          </p>
          {email && (
            <Link
              href={email.href}
              className={styles.ctaBtn}
            >
              ✉️ Kirim Email
            </Link>
          )}
        </div>

        {/* Social links */}
        <div className={styles.socialGrid}>
          {contacts.map((contact) => (
            <Link
              key={contact.type}
              href={contact.href}
              target={contact.type !== 'email' ? '_blank' : undefined}
              rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
            >
              <span className={styles.socialIcon}>
                {socialIcons[contact.type]}
              </span>
              <span>{socialLabels[contact.type] ?? contact.label}</span>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className={styles.footerNote}>
          Dibuat dengan <span>❤️</span> oleh Rizal Manthovani · {new Date().getFullYear()} · Built with Next.js &amp; TypeScript
        </p>

      </div>
    </section>
  );
}
