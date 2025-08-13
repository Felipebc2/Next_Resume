import heroStyles from "../styles/Hero.module.css";
import Header from "./header";

export default function HeroFelipe() {
  return (
    <section className={heroStyles.page} id="hero">
      <main className={heroStyles.main}>
        <Header />
        <h1>Hello World</h1>
      </main>
    </section>
  );
}