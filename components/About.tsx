"use client"; // Diperlukan untuk hooks seperti useRef

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from '@/styles/About.module.css';

const About = () => {
  // Ref untuk elemen kontainer yang akan menjadi batas drag
  const constraintsRef = useRef(null);

  // Motion values untuk melacak posisi mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transformasi motion values menjadi rotasi
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <div ref={constraintsRef} className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.contentWrapper}>
          <motion.div
            className={styles.imageColumn}
            drag
            dragConstraints={constraintsRef}
            whileDrag={{ cursor: 'grabbing' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
          >
            <div className={styles.card}>
              <div className={styles.lanyardSlot}></div>
              <Image
                src="/profile-placeholder.jpg" // Pastikan Anda memiliki gambar ini di folder /public
                alt="My Profile Picture"
                width={100}
                height={100}
                className={styles.profileImage}
                priority
              />
              <h3 className={styles.cardName}>Rizal Manthovani</h3>
              <p className={styles.cardTitle}>AI Web Developer</p>
            </div>
          </motion.div>
          <div className={styles.textColumn}>
            <p className={styles.aboutText}>
              Welcome! I&apos;m Rizal Manthovani,
            <br />
                an AI Web Developer dedicated to creating innovative digital solutions. I believe that technology, especially artificial intelligence, holds immense potential to transform how businesses interact with the world and solve complex challenges.
            </p>
            <p className={styles.aboutText}>
              As a developer, my primary focus is to help businesses and individuals by leveraging AI to build websites and applications that are not only functional, but also smart and personal. I specialize in designing solutions that can automate processes, analyze data for decision-making, and developing machine learning-powered features. This portfolio is a representation of my skills in integrating AI models, building recommendation systems, and developing machine learning-powered features.
            </p>
            <p className={styles.aboutText}>
              Let&apos;s turn your brilliant ideas into reality with a touch of artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
