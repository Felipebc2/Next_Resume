import Header from "./components/Header";
import HeroFelipe from "./components/HeroFelipe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MouseGradientBG from "./components/MouseGradientBG";

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "2rem 0" }}>
        <HeroFelipe />
      </main>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}