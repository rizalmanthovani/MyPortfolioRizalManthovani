"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/Projects.module.css';
import Image from 'next/image';
import { projectData } from '@/data/project'; // <-- Impor data dari lokasi baru
import type { Project } from '@/types/Project'; // <-- Impor tipe data


const Projects = () => {
  // State untuk melacak project mana yang dipilih untuk ditampilkan di modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // State baru untuk melacak URL gambar yang diperbesar
  const [enlargedImageSrc, setEnlargedImageSrc] = useState<string | null>(null);

  const openModal = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const openEnlargedImage = (src: string) => setEnlargedImageSrc(src);
  const closeEnlargedImage = () => setEnlargedImageSrc(null);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.grid}>
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.card} ${styles[project.size]}`}
              onClick={() => openModal(project)}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              transition={{ duration: 0.2 }}
              layoutId={`card-container-${project.id}`} // Untuk animasi
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImage}
                priority={index === 0} />
              <div className={styles.cardOverlay}>
                <h3>{project.name}</h3>
                <p>{project.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className={styles.modalOverlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal}>
            <motion.div className={styles.modalContent} layoutId={`card-container-${selectedProject.id}`} onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className={styles.closeButton}>&times;</button>
              <h2>{selectedProject.name}</h2>
              <div className={styles.modalBody}>
                <div className={styles.tags}><strong>Languages:</strong>{selectedProject.languages.map((lang: string) => <span key={lang} className={styles.tag}>{lang}</span>)}</div>
                <div className={styles.tags}><strong>Technologies:</strong>{selectedProject.technologies.map((tech: string) => <span key={tech} className={styles.tag}>{tech}</span>)}</div>
                
                {/* Area untuk link GitHub dan Live Demo */}
                <div className={styles.modalLinks}>
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                      {/* Anda bisa menambahkan ikon GitHub di sini */}
                      View Code
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                      {/* Anda bisa menambahkan ikon tautan di sini */}
                      Live Demo
                    </a>
                  )}
                </div>

                {selectedProject.fullDescription.map((block, index) => {
                  if (block.type === 'paragraph') {
                    return <p key={index} className={styles.projectDescription}>{block.content}</p>;
                  }
                  if (block.type === 'heading') {
                    if (block.level === 3) {
                      return <h3 key={index} className={styles.modalHeading}>{block.content}</h3>;
                    }
                    // Default ke h4 jika level lain ditambahkan di masa depan
                    return <h4 key={index} className={styles.modalHeading}>{block.content}</h4>;
                  }
                  if (block.type === 'image') {
                    return (
                      // Wrapper ini sekarang bisa diklik untuk memperbesar gambar
                      <div
                        key={index}
                        className={styles.modalImageClickableWrapper}
                        onClick={() => openEnlargedImage(block.src)}
                      >
                        <Image
                          src={block.src}
                          alt={block.alt}
                          width={700}
                          height={400}
                          className={styles.modalImage}
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal untuk Gambar yang Diperbesar */}
      <AnimatePresence>
        {enlargedImageSrc && (
          <motion.div
            className={styles.enlargedImageOverlay}
            onClick={closeEnlargedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Menggunakan `layout="fill"` dan `objectFit="contain"` agar gambar tidak terpotong */}
            <Image
              src={enlargedImageSrc}
              alt="Enlarged view"
              fill
              className={styles.enlargedImage}
            />
            <button onClick={closeEnlargedImage} className={styles.closeEnlargedButton}>
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;