import contactStyles from "../styles/Contact.module.css";
import { 
    Mail, 
    Linkedin, 
    Github, 
    MessageCircle,
  } from "lucide-react";

export default function Contact() {
    return (
      <div className={contactStyles.container}>
        <h1 className={contactStyles.title}>Contato</h1>
        <p className={contactStyles.description}>Disponível para novos projetos e oportunidades. Vamos conversar sobre sua próxima ideia!</p>
        <div className={contactStyles.contactContainer}>
            <div className={contactStyles.contactItem}>
              <Mail className={contactStyles.contactIcon} />
              <span className={contactStyles.contactText}>Email</span>
            </div>
            <div className={contactStyles.contactItem}>
              <Linkedin className={contactStyles.contactIcon} />
              <span className={contactStyles.contactText}>Linkedin</span>
            </div>
            <div className={contactStyles.contactItem}>
              <Github className={contactStyles.contactIcon} />
              <span className={contactStyles.contactText}>Github</span>
            </div>
            <div className={contactStyles.contactItem}>
              <MessageCircle className={contactStyles.contactIcon} />
              <span className={contactStyles.contactText}>Whatsapp</span>
            </div>
        </div>
      </div>
    );
  }
  