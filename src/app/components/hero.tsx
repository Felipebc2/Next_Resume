"use client";

import heroStyles from "../styles/Hero.module.css";
import CarouselExample from "./carousel-example";
import Link from "next/link";
import { FaArrowDown } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

export default function HeroFelipe() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetY = 120; // offset de 50px para cima
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offsetY;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={heroStyles.page} id="hero">
      <main className={heroStyles.main}>
        <div className={heroStyles.container}>
          {/* Seção da esquerda com texto */}
          <div className={heroStyles.leftSection}>
            <h1 className={heroStyles.title}>Felipe Castro</h1>
            <p className={heroStyles.subtitle}>
              Materializando Ideias em Realidade
            </p>
            <p className={heroStyles.description}>
              Front-end Dev <br />
              Especializado em React, Next.js, TypeScript e tecnologias modernas de desenvolvimento web.
            </p>
            <div className={heroStyles.buttonContainer}>
              <button onClick={scrollToProjects} className={heroStyles.button}>
                Meus Projetos <FaArrowDown />
              </button>
              <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className={heroStyles.button}>
                Download CV <FiDownload />
              </Link>
            </div>
          </div>
          
          {/* Seção da direita com carousel UI */}
          <div className={heroStyles.rightSection}>
            <CarouselExample />
          </div>
        </div>

        {/* Seta animada */}
        <div className={heroStyles.bounceArrow} onClick={scrollToProjects}>
          <FaChevronDown />
        </div>

      </main>
    </section>
  );
}