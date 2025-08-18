import heroStyles from "../styles/Hero.module.css";
import CarouselExample from "./carousel-example";
import Header from "./header";
import Link from "next/link";
import { FaArrowDown } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiVercel } from "react-icons/si";

// Dados de exemplo para os logos (usando react-icons como nodes)
const sampleLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev/" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org/" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },
];

export default function HeroFelipe() {
  return (
    <section className={heroStyles.page} id="hero">
      <main className={heroStyles.main}>
        <Header />
        <div className={heroStyles.container}>
          {/* Seção da esquerda com texto */}
          <div className={heroStyles.leftSection}>
            <h1 className={heroStyles.title}>Felipe B. Castro</h1>
            <p className={heroStyles.subtitle}>
              Materializando Ideias em Realidade
            </p>
            <p className={heroStyles.description}>
              Full-Stack Dev <br />
              Especializado em React, Next.js, TypeScript e tecnologias modernas de desenvolvimento web.
            </p>
            <div className={heroStyles.buttonContainer}>
              <Link href="#projects" className={heroStyles.button}>
                Meus Projetos <FaArrowDown />
              </Link>
              <Link href="/curriculo.pdf" className={heroStyles.button} download>
                Download CV <FiDownload />
              </Link>
            </div>
          </div>
          
          {/* Seção da direita com carousel UI */}
          <div className={heroStyles.rightSection}>
            <CarouselExample />
          </div>
        </div>

        {/* LogoLoop na área inferior da seção hero */}
        <div className={heroStyles.logoLoopContainer}>
          <LogoLoop logos={sampleLogos} width="100vw" />
        </div>
      </main>
    </section>
  );
}