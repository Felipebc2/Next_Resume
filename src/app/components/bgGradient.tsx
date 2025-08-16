import bgStyles from "../styles/BgGradient.module.css";

export default function bgGradient() {
  return (
    <section className={bgStyles.page} id="hero">
      <main className={bgStyles.main}>
        <h1>Hello World</h1>
      </main>
    </section>
  );
}