import styles from './Skills.module.css';

const skillCategories = [
  {
    icon: '⚛️',
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'CSS Modules', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    icon: '🔧',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'tRPC', 'Prisma', 'Drizzle ORM'],
  },
  {
    icon: '🗄️',
    title: 'Database & Cloud',
    skills: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'Vercel', 'Railway'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Workflow',
    skills: ['Git & GitHub', 'Docker', 'Jest', 'Cypress', 'Figma', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.sectionTag}>Tech Stack</div>
          <h2 className={styles.heading}>
            Keahlian &amp;{' '}
            <span className={styles.headingAccent}>Teknologi</span>
          </h2>
          <p className={styles.subtext}>
            Tools dan teknologi yang saya gunakan untuk membangun produk berkualitas tinggi
          </p>
        </div>

        {/* Skill categories */}
        <div className={styles.categories}>
          {skillCategories.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{cat.icon}</div>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
              </div>
              <div className={styles.pills}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    <span className={styles.pillDot} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
