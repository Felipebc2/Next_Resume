import heroStyles from "../styles/Hero.module.css";
import CarouselExample from "./carousel-example";
import Link from "next/link";
import { FaArrowDown } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";
import { SiReact, SiAngular, SiHtml5, SiPython, SiLua, SiJavascript, SiTypescript, SiScikitlearn, SiMysql, SiMongodb, SiMarkdown, SiGit, SiAnaconda, SiUbuntu, SiDocker, SiReplit, SiApachecassandra, SiVercel, SiBlender, SiAutodeskmaya, SiFigma, SiCanva, SiUnrealengine, SiUnity, SiArduino, SiRaspberrypi, SiRedis, SiFlask, SiFirebase, SiBootstrap, SiApachekafka, SiObsidian, SiRabbitmq, SiTotvs, SiLinux, SiNodedotjs, SiTailwindcss, SiNextdotjs} from 'react-icons/si';
import { VscTerminalCmd } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandCpp, TbBrandVscode, TbBrandPowershell, TbBrandAzure} from 'react-icons/tb';

// Dados de exemplo para os logos (usando react-icons como nodes)
const sampleLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev/" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org/" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },
  { node: <SiAngular />, title: "Angular", href: "https://angular.io/" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://html.com/" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/" },
  { node: <SiLua />, title: "Lua", href: "https://www.lua.org/" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com/" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { node: <SiScikitlearn />, title: "Scikit-learn", href: "https://scikit-learn.org/" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <SiMarkdown />, title: "Markdown", href: "https://www.markdownguide.org/" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  { node: <SiAnaconda />, title: "Anaconda", href: "https://www.anaconda.com/" },
  { node: <SiUbuntu />, title: "Ubuntu", href: "https://ubuntu.com/" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
  { node: <SiReplit />, title: "Replit", href: "https://replit.com/" },
  { node: <SiApachecassandra />, title: "Apache Cassandra", href: "https://cassandra.apache.org/" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com/" },
  { node: <SiBlender />, title: "Blender", href: "https://www.blender.org/" },
  { node: <SiAutodeskmaya />, title: "Autodesk Maya", href: "https://www.autodesk.com/products/maya/overview" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com/" },
  { node: <SiCanva />, title: "Canva", href: "https://www.canva.com/" },
  { node: <SiUnrealengine />, title: "Unreal Engine", href: "https://www.unrealengine.com/" },
  { node: <SiUnity />, title: "Unity", href: "https://unity.com/" },
  { node: <SiArduino />, title: "Arduino", href: "https://www.arduino.cc/" },
  { node: <SiRaspberrypi />, title: "Raspberry Pi", href: "https://www.raspberrypi.org/" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io/" },
  { node: <SiFlask />, title: "Flask", href: "https://flask.palletsprojects.com/" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com/" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/" },
  { node: <SiApachekafka />, title: "Apache Kafka", href: "https://kafka.apache.org/" },
  { node: <SiObsidian />, title: "Obsidian", href: "https://obsidian.md/" },
  { node: <SiRabbitmq />, title: "RabbitMQ", href: "https://www.rabbitmq.com/" },
  { node: <SiTotvs />, title: "Totvs", href: "https://www.totvs.com/" },
  { node: <SiLinux />, title: "Linux", href: "https://www.linux.org/" },
  { node: <VscTerminalCmd />, title: "Terminal", href: "https://www.gnu.org/software/bash/" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com/" },
  { node: <TbBrandCSharp />, title: "C#", href: "https://learn.microsoft.com/pt-br/dotnet/csharp/" },
  { node: <TbBrandCpp />, title: "C++", href: "https://isocpp.org/" },
  { node: <TbBrandVscode />, title: "VSCode", href: "https://code.visualstudio.com/" },
  { node: <TbBrandPowershell />, title: "PowerShell", href: "https://learn.microsoft.com/pt-br/powershell/" },
  { node: <TbBrandAzure />, title: "Azure", href: "https://azure.microsoft.com/" },
];

export default function HeroFelipe() {
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