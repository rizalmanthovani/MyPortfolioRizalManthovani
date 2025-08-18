import styles from '@/styles/Home.module.css';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <section id="home" className={styles.container}>
        <h1 className={styles.title}>
        <span className={styles.titleWelPort}>Welcome</span> <span className={styles.titleSmall}>To</span> <span className={styles.titleWelPort}>Portfolio</span>
         <br />
              Rizal Manthovani
        </h1>
        <p className={styles.description}>
          Explore my projects and journey in the digital universe.
        </p>
      </section>
      <About />
      <Projects />
      <Contact />
    </>
  );
}
