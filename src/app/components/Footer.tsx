import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Felipe Castro</h3>
            <p>Desenvolvedor Front-End apaixonado por criar experiências digitais únicas</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navegação</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#experience">Experiência</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="https://github.com/Felipebc2" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/felipebc2/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:contato@felipebc2.dev">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Projetos</h4>
              <ul>
                <li>
                  <a href="https://resume-felipebc2.vercel.app" target="_blank" rel="noreferrer">
                    Next Resume
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Felipebc2" target="_blank" rel="noreferrer">
                    ShareBite
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Felipebc2" target="_blank" rel="noreferrer">
                    AirQuality Pipeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Felipe Castro. Todos os direitos reservados.</p>
          </div>
          
          <div className={styles.tech}>
          </div>
        </div>
      </div>
    </footer>
  );
}
