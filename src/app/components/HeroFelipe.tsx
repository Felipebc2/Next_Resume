import heroStyles from "../styles/HeroFelipe.module.css";

export default function HeroFelipe() {
  return (
    <section className={heroStyles.page}>
      <header className={heroStyles.header}>
        <nav className={heroStyles.nav}>
          <div className={heroStyles.logo}>
            felipebc2.dev
          </div>
          <div className={heroStyles.navLinks}>
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Experience", id: "experience" },
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                className={`${heroStyles.navButton} ${item.id === 'home' ? heroStyles.active : ''}`}
              >
                {item.label}
                <span className={heroStyles.navUnderline} />
              </button>
            ))}
          </div>
        </nav>
      </header>
              <main className={heroStyles.main}>
          <div className={heroStyles.container}>
            <div className={heroStyles.animateFadeUp}>
              {/* Main Title */}
              <h1 className={heroStyles.mainTitle}>
                <span className={heroStyles.helloText}>Olá, eu sou </span>
                <span className={heroStyles.felipeText}>
                  Felipe Castro
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className={heroStyles.subtitle}>
                Desenvolvedor FullStack, Materializando ideias em realidade
              </p>
              
              {/* Contact Pills */}
              <div className={heroStyles.contactPills}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={heroStyles.contactBadge}>
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={heroStyles.contactBadge}>
                  LinkedIn
                </a>
                <a href="mailto:contact@example.com" className={heroStyles.contactBadge}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </main>
    </section>
  );
}