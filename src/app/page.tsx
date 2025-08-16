import Hero from "./components/hero";
import Projects from "./components/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </main>
    </div>
  );
}
