import footerStyles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      {/* Coluna 1 - Brand/Description */}
      <div className={footerStyles["footer-col"]}>
        <div className={footerStyles["footer-col-title"]}>Felipe Castro</div>
        <div className={footerStyles["footer-col-subtitle"]}>Full-Stack Dev</div>
        <div className={footerStyles["footer-col-description"]}>
        Este portfólio é mais do que uma vitrine de projetos, é um convite para colaboração. 
        Estou sempre disponível para desafios e oportunidades.
        </div>
      </div>

      {/* Coluna 2 - Office/Contact */}
      <div className={footerStyles["footer-col"]}>
        <h4>Contato</h4>
        <div className={footerStyles["contact-info"]}>
          <p>Brasil</p>
          <a href="mailto:felipeb.castro02@gmail.com">felipeb.castro02@gmail.com</a>
          <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
        </div>
      </div>

      {/* Coluna 3 - Links */}
      <div className={footerStyles["footer-col"]}>
        <h4>Navegação</h4>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">Skills</a></li>
          <li><a href="#About">Sobre</a></li>
          <li><a href="#About">Projetos</a></li>
          <li><a href="#About">Contato</a></li>
        </ul>
      </div>

      {/* Coluna 4 - Newsletter & Social */}
      <div className={`${footerStyles["footer-col"]} ${footerStyles["contato-direto"]}`}>
        <h4>Contato Direto</h4>
        <a 
          href="mailto:felipeb.castro02@gmail.com" 
          className={footerStyles["email-button"]}
        >
          📧 Enviar Email
        </a>
        
        <div className={footerStyles["social-icons"]}>
          <div className={footerStyles["social-icon"]}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼</a>
          </div>
          <div className={footerStyles["social-icon"]}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">🐙</a>
          </div>
          <div className={footerStyles["social-icon"]}>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">💬</a>
          </div>
          <div className={footerStyles["social-icon"]}>
            <a href="mailto:felipeb.castro02@gmail.com">📧</a>
          </div>
        </div>
        <div className={footerStyles.copyright}>
            Felipe Castro © 2024 - Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  );
}
