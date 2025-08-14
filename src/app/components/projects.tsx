"use client";
import { useRef, useEffect } from "react";
import styles from "../styles/Projects.module.css";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "ShareBite - Validação ANVISA",
    description: "Plataforma anti-desperdício com IA. Flask + MongoDB + Streamlit. Docker & RAG futuro.",
    tech: ["Python", "Flask", "MongoDB", "Docker", "Streamlit"],
    link: "https://github.com/Felipebc2",
    github: "https://github.com/Felipebc2"
  },
  {
    title: "AirQuality Pipeline",
    description: "Ingestão Kafka, cache Redis, MinIO, alertas RabbitMQ, viz em Streamlit.",
    tech: ["Kafka", "Redis", "MinIO", "RabbitMQ", "Streamlit"],
    link: "https://github.com/Felipebc2",
    github: "https://github.com/Felipebc2"
  },
  {
    title: "Next Resume",
    description: "Portfólio/Resume em Next.js com efeitos de UI e acessibilidade.",
    tech: ["Next.js", "CSS", "Vercel"],
    link: "https://resume-felipebc2.vercel.app",
    github: "https://github.com/Felipebc2/Next_Resume"
  },
  {
    title: "Campus Crime Heatmap",
    description: "Heatmap de criminalidade com crowd-searching e validação probabilística.",
    tech: ["React Native", "Map", "Analytics"],
    link: "https://www.linkedin.com/in/felipebc2/",
    github: "https://github.com/Felipebc2"
  }
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projetos</h2>
      <p className={styles.subtitle}>
        Cards com hover-gradiente, tilt sutil e tech badges.
      </p>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tech, link, github, index }: Project & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    let raf = 0;
    
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--tx", `${(x - 0.5) * 6}deg`);
        el.style.setProperty("--ty", `${-(y - 0.5) * 6}deg`);
        el.style.setProperty("--mxCard", String(x));
        el.style.setProperty("--myCard", String(y));
      });
    };

    const onLeave = () => {
      el.style.setProperty("--tx", "0deg");
      el.style.setProperty("--ty", "0deg");
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div 
      className={styles.card} 
      ref={cardRef}
      style={{ "--delay": `${index * 60}ms` } as React.CSSProperties}
    >
      <div className={styles.thumbnail} />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.badges}>
          {tech.map((techItem) => (
            <span className={styles.badge} key={techItem}>
              {techItem}
            </span>
          ))}
        </div>
        <div className={styles.links}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className={styles.githubLink}>
              GitHub
            </a>
          )}
          <a href={link} target="_blank" rel="noreferrer" className={styles.projectLink}>
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
}