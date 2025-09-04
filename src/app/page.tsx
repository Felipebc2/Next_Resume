import Hero from "./components/hero";
import styles from "./page.module.css";
import MagicBento from "@/blocks/Components/MagicBento/MagicBento";
import Footer from "./components/footer";
import Header from "./components/header";
import Skills from "./components/skills";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <section id="projects"> <MagicBento /> </section>
        <section id="skills"> <Skills /> </section>
        <section id="about"> <About /> </section>
        <section id="experience"> <Experience /> </section>
        <section id="contact"> <Contact /> </section>
        <Footer />
      </main>
    </div>
  );
}
