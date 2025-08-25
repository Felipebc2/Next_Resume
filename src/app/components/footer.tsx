import footerStyles from "../styles/footer.module.css";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MessageCircle, 
  MapPin, 
  Phone,
  Home,
  User,
  Briefcase,
  Contact
} from "lucide-react";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      {/* Coluna 1 - Brand/Description */}
      <div className={footerStyles["footer-col-hero"]}>
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
          <a href="https://www.google.com/maps/place/Bras%C3%ADlia,+DF/@-15.793889,-47.882777,12z/data=!3m1!4b1!4m6!3m5!1s0x935a3ae7e3816311:0x2f2f06586615dff0!8m2!3d-15.793889!4d-47.882777!16s%2Fg%2F11c4028qbp?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D"><MapPin size={16} /> Brasil | Brasília, DF</a>
          <a href="mailto:felipeb.castro02@gmail.com"><Mail size={16} /> felipeb.castro02@gmail.com</a>
          <a href="tel:+55 61 999691134"><Phone size={16} /> +55 (61) 99969-1134</a>
        </div>
      </div>

      {/* Coluna 3 - Links */}
      <div className={footerStyles["footer-col"]}>
        <h4>Navegação</h4>
        <ul className={footerStyles["footer-nav-list"]}>
          <li><a href="#Home"><Home size={16} /> Home</a></li>
          <li><a href="#About"><User size={16} /> Skills</a></li>
          <li><a href="#About"><User size={16} /> Sobre</a></li>
          <li><a href="#About"><Briefcase size={16} /> Projetos</a></li>
          <li><a href="#About"><Contact size={16} /> Contato</a></li>
        </ul>
      </div>

      {/* Coluna 4 - Newsletter & Social */}
      <div className={`${footerStyles["footer-col-contact"]} ${footerStyles["contato-direto"]}`}>
        
        <div className={footerStyles["social-icons"]}>
          <div className={footerStyles["social-icon"]}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </div>
          <div className={footerStyles["social-icon"]}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </div>
          <div className={footerStyles["social-icon"]}>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} />
            </a>
          </div>
          <div className={footerStyles["social-icon"]}>
            <a href="mailto:felipeb.castro02@gmail.com">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className={footerStyles.copyright}>
            Felipe Castro © 2024 - Todos os Direitos Reservados
        </div>
      </div>
    </footer>
  );
}
