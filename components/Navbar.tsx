'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const navItems = [
  { name: 'Proyek', href: '/#projects' },
  { name: 'Tentang', href: '/#about' },
  { name: 'Keahlian', href: '/#skills' },
  { name: 'Kontak', href: '/#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setIsMenuOpen(false)}>
          RM&lt;/&gt;
        </Link>

        {/* Desktop + Mobile nav list */}
        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={styles.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.navLink} ${styles.navLinkCta}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume ↗
            </Link>
          </li>
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

      </nav>
    </header>
  );
};

export default Navbar;
