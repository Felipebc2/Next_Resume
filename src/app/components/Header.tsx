"use client";
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detectar se está scrollando para baixo ou para cima
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll para baixo - esconder header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scroll para cima - mostrar header
        setIsVisible(true);
      }
      
      // Detectar se está no topo
      if (currentScrollY < 8) {
        setIsVisible(true);
      }
      
      setScrolled(currentScrollY > 8);
      setLastScrollY(currentScrollY);
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top">
          Felipe Castro
        </a>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#projects">Projetos</a>
          <a href="#experience">Experiência</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contato</a>
          <a href="https://www.linkedin.com/in/felipebc2/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Felipebc2/Next_Resume" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
      <div className={styles.separator} />
    </header>
  );
}
