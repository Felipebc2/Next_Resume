"use client";
import { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={styles.contact} id="contact">
      <h2>Contato</h2>
      <p className={styles.subtitle}>
        Vamos conversar sobre projetos, oportunidades ou apenas bater um papo sobre tecnologia!
      </p>
      
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>Vamos Conectar</h3>
          <p>
            Estou sempre aberto a novas oportunidades e colaborações interessantes. 
            Se você tem um projeto em mente ou quer discutir possibilidades, 
            não hesite em entrar em contato!
          </p>
          
          <div className={styles.contactMethods}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:contato@felipebc2.dev">contato@felipebc2.dev</a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/felipebc2/" target="_blank" rel="noreferrer">
                  Felipe Castro
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <span className={styles.icon}>🐙</span>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/Felipebc2" target="_blank" rel="noreferrer">
                  Felipebc2
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Seu nome completo"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Conte-me sobre seu projeto ou ideia..."
            />
          </div>
          
          <button type="submit" className={styles.submitButton}>
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
