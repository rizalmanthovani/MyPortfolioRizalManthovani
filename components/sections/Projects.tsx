import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './Projects.module.css';

const projectEmojis: Record<string, string> = {
  '1': '🏪',
  '2': '💬',
  '3': '🌐',
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionTag}>Portfolio</div>
          <h2 className={styles.heading}>
            Proyek{' '}
            <span className={styles.headingAccent}>Terbaik Saya</span>
          </h2>
          <p className={styles.subtext}>
            Setiap proyek dirancang untuk memecahkan masalah nyata dan memberikan dampak terukur
          </p>
        </div>

        {/* Project grid */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.card}>

              {project.featured && (
                <div className={styles.featuredBadge}>⭐ Featured</div>
              )}

              {/* Thumbnail */}
              <div className={styles.thumbnail}>
                <div className={styles.thumbnailOverlay}>
                  {projectEmojis[project.id] ?? '🚀'}
                </div>
              </div>

              {/* Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.shortDescription}</p>

                {/* Impact */}
                {project.impact && (
                  <div className={styles.impact}>
                    <span className={styles.impactIcon}>📈</span>
                    <span>{project.impact}</span>
                  </div>
                )}

                {/* Tech stack */}
                <div className={styles.techStack}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className={styles.techPill}>{tech}</span>
                  ))}
                </div>

                {/* Links */}
                <div className={styles.cardFooter}>
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.link} ${styles.linkPrimary}`}
                    >
                      🚀 Live Demo
                    </Link>
                  )}
                  {project.repoUrl && (
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.link} ${styles.linkGhost}`}
                    >
                      📦 Source
                    </Link>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
