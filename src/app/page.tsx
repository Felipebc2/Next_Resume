import Hero from "./components/hero";
import styles from "./page.module.css";
import MagicBento from "@/blocks/Components/MagicBento/MagicBento";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <MagicBento />
      </main>
    </div>
  );
}
