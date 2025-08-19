"use client"; // Tambahkan ini karena kita akan menggunakan hook useState
import { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

const Navbar = () => {
  const navItems = [
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Resume', href: '/resume.pdf' },
  ];
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          MyPortfolio
        </Link>
        
        {/* Hamburger Menu Button - Hanya terlihat di mobile */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* Tiga garis untuk ikon hamburger */}
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Daftar Navigasi */}
        <ul className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className={styles.navLink}
                target={item.name === 'Resume' ? '_blank' : '_self'}
                rel={item.name === 'Resume' ? 'noopener noreferrer' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
