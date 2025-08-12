import heroStyles from "../styles/HeroFelipe.module.css";
import Shapes from "../components/Shapes";

export default function HeroFelipe() {
  return (
    <section className={heroStyles.page} id="home">
      <main className={heroStyles.main}>
        <div className={heroStyles.container}>
          <div className={heroStyles.animateFadeUp}>
            {/* Main Title */}
            <h1 className={heroStyles.mainTitle}>
              <span className={heroStyles.helloText}>Olá, me chamo </span>
              <span className={heroStyles.felipeText}>
                Felipe Castro
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className={heroStyles.subtitle}>
              Desenvolvedor Full Stack, Materializando ideias em realidade
            </p>
            
            {/* Contact Pills */}
            <div className={heroStyles.contactPills}>
              <a href="https://github.com/Felipebc2" target="_blank" rel="noopener noreferrer" className={heroStyles.contactBadge}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/felipebc2/" target="_blank" rel="noopener noreferrer" className={heroStyles.contactBadge}>
                LinkedIn
              </a>
              <a href="#contact" className={heroStyles.contactBadge}>
                Contato
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}