import heroStyles from "../styles/HeroFelipe.module.css";
import Shapes from "./Shapes";

export default function HeroFelipe() {
  return (
    <section className={heroStyles.page}>
      <Shapes />
      <main className={heroStyles.main}>
        <ol>
          <h1>Portfolio Website 0.1</h1>
        </ol>
      </main>
    </section>
  );
}
