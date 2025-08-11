import heroStyles from "../styles/HeroFelipe.module.css";
import Shapes from "./Shapes";

export default function HeroFelipe() {
  return (
    <section className={heroStyles.page}>
      <header className={heroStyles.header}>
          <nav className={heroStyles.nav}>
              <a href="#" className={heroStyles.active}> Home</a>
              <a href="#" >Services</a>
              <a href="#" >Skills</a>
              <a href="#" >Education</a>
              <a href="#" >Experience</a>
              <a href="#" >Contact</a>
          </nav>
      </header>
      <main className={heroStyles.main}>
        <ol>
          <h1>Portfolio Website 0.1</h1>
        </ol>
      </main>
    </section>
  );
}
