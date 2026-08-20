import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        {/* Left: Avatar */}
        <div className={styles.avatarWrap}>
          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />
          <div className={styles.avatarCard}>
            <div className={styles.avatarPlaceholder}>👨‍💻</div>
          </div>
          <div className={styles.avatarBadge}>Full‑Stack Developer</div>
        </div>

        {/* Right: Text */}
        <div className={styles.textBlock}>
          <div className={styles.sectionTag}>About Me</div>

          <h2 className={styles.heading}>
            Membangun Produk Digital yang{' '}
            <span className={styles.headingAccent}>Berdampak</span>
          </h2>

          <p className={styles.description}>
            Saya adalah <strong>Full‑Stack Developer</strong> dengan pengalaman 3+ tahun
            membangun aplikasi web modern menggunakan <strong>React, Next.js, dan TypeScript</strong>.
            Saya tidak hanya menulis kode — saya memecahkan masalah bisnis melalui teknologi
            yang bersih, performan, dan mudah dipelihara.
          </p>

          <p className={styles.description}>
            Saya percaya bahwa <strong>desain yang baik dan kode yang baik</strong> harus berjalan
            berdampingan. Setiap proyek yang saya kerjakan selalu mempertimbangkan pengalaman
            pengguna, performa, dan skalabilitas jangka panjang.
          </p>

          {/* Info cards */}
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoCardIcon}>📍</div>
              <div className={styles.infoCardLabel}>Lokasi</div>
              <div className={styles.infoCardValue}>Indonesia</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoCardIcon}>💼</div>
              <div className={styles.infoCardLabel}>Status</div>
              <div className={styles.infoCardValue}>Open to Work</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoCardIcon}>🎓</div>
              <div className={styles.infoCardLabel}>Pendidikan</div>
              <div className={styles.infoCardValue}>SMK Teknik Permesinan</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoCardIcon}>🌐</div>
              <div className={styles.infoCardLabel}>Bahasa</div>
              <div className={styles.infoCardValue}>ID / EN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
