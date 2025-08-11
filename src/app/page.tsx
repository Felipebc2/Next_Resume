import styles from "./styles/page.module.css";
import Header from "./components/Header";
import HeroFelipe from "./components/HeroFelipe";

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "2rem 0" }}>
        <HeroFelipe />
      </main>
    </>
  );
}