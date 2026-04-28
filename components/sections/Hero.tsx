import Image from 'next/image';
import Link from 'next/link';
import { contacts } from '@/data/contacts';
import styles from './Hero.module.css';

export default function Hero() {
  const resume = contacts.find((c) => c.type === 'resume');
  const github = contacts.find((c) => c.type === 'github');

  return (
    <section id="hero" className={styles.hero}>
      {/* Grid overlay */}
      <div className={styles.heroGrid} aria-hidden="true" />

      {/* Background image */}
      <div className={styles.bg} aria-hidden="true">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for hire
        </div>

        {/* Title */}
        <h1 className={styles.title}>
          Hi, I&apos;m{' '}
          <span className={styles.highlight}>Rizal Manthovani</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Full‑Stack Developer yang membangun produk digital berkualitas tinggi —
          dari UI yang memukau hingga arsitektur backend yang solid &amp; scalable.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctas}>
          <Link href="#projects" className={styles.btnPrimary}>
            🚀 Lihat Proyek
          </Link>
          {resume && (
            <Link
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              📄 Download Resume
            </Link>
          )}
          {github && (
            <Link
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              ⭐ GitHub
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>Tahun Pengalaman</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>10+</div>
            <div className={styles.statLabel}>Proyek Selesai</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>99%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        scroll
      </div>
    </section>
  );
}
