"use client";

import styleSkills from "../styles/skills.module.css";
import glassStyle from "../styles/glass.module.css";
import { useState } from "react";

import {
    Code,
    User,
    Eye,
    EyeOff,
    Handshake,
    Flag,
    Bug,
    LampDesk,
    Brain,
    Shield,
    DatabaseZap,
    FolderLock,
    Bot,
    Plus,
    Braces,
    CodeXml
} from "lucide-react";

const mainSkills = [
    {
        category: "Desenvolvimento",
        icon: <CodeXml className="w-6 h-6" />,
        technologies: ["React", "Next.js", "Angular", "Flask", "Nest.js", "Typescript", "N8N", "MongoDB", "Docker", "Azure"]     
    },
    {
        category: "Qualidades",
        icon: <User className="w-6 h-6" />,
        technologies: ["Comunicativo", "Lider", "Flexivel", "Organizado", "Mentalidade de Crescimento", "Criatividade"]
    },
]

// Dados das hard skills baseados na imagem
const hardSkills = [
    {
        category: "Linguagens de Programação",
        icon: <Code className="w-6 h-6" />,
        technologies: ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Lua"]
    },
    {
        category: "Frontend & Backend",
        icon: <Braces className="w-6 h-6" />,
        technologies: ["React", "Next.js", "Angular", "HTML/CSS", "Tailwind CSS","Nest.js", "Flask", "Node.js"]
    },
    {
        category: "Database",
        icon: <DatabaseZap className="w-6 h-6" />,
        technologies: ["MongoDB", "MySql", "Redis", "PostgreSQL", "Cassandra", "Supabase"]
    },
    {
        category: "DevOps, Segurança & Infra",
        icon: <FolderLock className="w-6 h-6" />,
        technologies: ["Docker", "Microsoft Azure", "Vercel", "Linux", "Firebase", "Wireshark", "LGPD", "GDB"]
    },
    {
        category: "Data Science, IA & Automação",
        icon: <Bot className="w-6 h-6" />,
        technologies: ["Power Automate", "N8N", "Kafka", "SkLearn", "Machine Learning", "Estatística", "LLMs"]
    },
    {
        category: "Extras",
        icon: <Plus className="w-6 h-6" />,
        technologies: ["Git/GitHub", "Excel", "Unity/Unreal", "Maya3D/Blender", "Arduino/Rapberry", "Canva/Figma"]
    }
];

// Dados das soft skills
const softSkills = [
    {
        category: "Resolução de Problemas",
        icon: <Bug className="w-6 h-6" />,
        technologies: ["Base Lógica Sólida", "Detalhista", "Flexibilidade", "Gerenciamento"]
    },
    {
        category: "Criatividade",
        icon: <LampDesk className="w-6 h-6" />,
        technologies: ["Desenvolvimento de Ideias", "Criatividade em Soluções Técnicas", "Inovação"]
    },
    {
        category: "Aprendizado",
        icon: <Brain className="w-6 h-6" />,
        technologies: ["Mentalidade de Crescimento", "Busca Ativa", "Aprendizado Rápido", "Abertura a Feedbacks"]
    },
    {
        category: "Resiliência",
        icon: <Shield className="w-6 h-6" />,
        technologies: ["Adaptável", "Dedicado em Desafios", "Bom com Mudanças", "Gestão de Tempo"]
    },
    {
        category: "Comunicação",
        icon: <Handshake className="w-6 h-6" />,
        technologies: ["Trabalho em Equipe", "Networking", "Experiente em Pitchs", "Paciente", "Comunicação Clara e Efetiva"]
    },
    {
        category: "Liderança",
        icon: <Flag className="w-6 h-6" />,
        technologies: ["Tomada de Decisão", "Colaboração em Times Multidisciplinares", "Gerenciamento de Conflitos", "Gestão de Equipes"]
    }
];

export default function Skills() {
    const [showAllSkills, setShowAllSkills] = useState(false);
    const [isHiding] = useState(false);

    const toggleSkills = () => {
        setShowAllSkills(!showAllSkills);
    };

    const createMainSkillRows = () => {
        const rows = [];
        
        for (let i = 0; i < mainSkills.length; i += 2) {
            const row = [];
            
            for (let j = 0; j < 2 && i + j < mainSkills.length; j++) {
                const skill = mainSkills[i + j];
                row.push(
                    <div key={`main-${i + j}`} className={`${glassStyle["upper-layer"]} ${styleSkills.skillCard} ${styleSkills.mainSkillCard}`}>
                        <div className={styleSkills.cardHeader}>
                            <div className={styleSkills.iconContainer}>
                                {skill.icon}
                            </div>
                            <h3 className={styleSkills.cardTitle}>
                                {skill.category}
                            </h3>
                        </div>
                        <div className={styleSkills.techContainer}>
                            {skill.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className={styleSkills.techBadge}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            }
            
            rows.push(
                <div key={`main-row-${i}`} className={styleSkills.skillRow}>
                    {row}
                </div>
            );
        }
        
        return rows;
    };

    const createSkillRows = () => {
        const rows = [];
        
        for (let i = 0; i < Math.max(softSkills.length, hardSkills.length); i += 2) {
            const row = [];
            
            for (let j = 0; j < 2 && i + j < softSkills.length; j++) {
                const skill = softSkills[i + j];
                row.push(
                    <div 
                        key={`soft-${i + j}`} 
                        className={`${glassStyle["upper-layer"]} ${styleSkills.skillCard} ${styleSkills.softSkillCard} ${styleSkills.skillCardAnimated}`}
                        style={{ animationDelay: `${(i + j) * 0.1}s` }}
                    >
                        <div className={styleSkills.cardHeader}>
                            <div className={styleSkills.iconContainer}>
                                {skill.icon}
                            </div>
                            <h3 className={styleSkills.cardTitle}>
                                {skill.category}
                            </h3>
                        </div>
                        <div className={styleSkills.techContainer}>
                            {skill.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className={styleSkills.techBadge}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            }
            
            for (let j = 0; j < 2 && i + j < hardSkills.length; j++) {
                const skill = hardSkills[i + j];
                row.push(
                    <div 
                        key={`hard-${i + j}`} 
                        className={`${glassStyle["upper-layer"]} ${styleSkills.skillCard} ${styleSkills.hardSkillCard} ${styleSkills.skillCardAnimated}`}
                        style={{ animationDelay: `${(i + j + 0.5) * 0.1}s` }}
                    >
                        <div className={styleSkills.cardHeader}>
                            <div className={styleSkills.iconContainer}>
                                {skill.icon}
                            </div>
                            <h3 className={styleSkills.cardTitle}>
                                {skill.category}
                            </h3>
                        </div>
                        <div className={styleSkills.techContainer}>
                            {skill.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className={styleSkills.techBadge}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            }
            
            rows.push(
                <div key={`row-${i}`} className={styleSkills.skillRow}>
                    {row}
                </div>
            );
        }
        
        return rows;
    };

    return (
        <>
            <section 
                id="skills" 
                className={styleSkills.containers}
                style={{
                    overflow: 'hidden'
                }}
            >
                {/* Main Skills */}
                <div className={styleSkills.mainSkillsContainer}>
                    {createMainSkillRows()}
                </div>

                {/* Botão para expandir/recolher */}
                <div className={styleSkills.expandButtonContainer}>
                    <button 
                        onClick={toggleSkills}
                        className={styleSkills.expandButton}
                    >
                        <span className={styleSkills.expandText}>Clique para mais Skills</span>
                        <div className={styleSkills.eyeIconContainer}>
                            {showAllSkills ? (
                                <Eye className={`${styleSkills.eyeIcon} ${styleSkills.eyeOpen}`} />
                            ) : (
                                <EyeOff className={`${styleSkills.eyeIcon} ${styleSkills.eyeClosed}`} />
                            )}
                        </div>
                    </button>
                </div>

                {/* Hard e Soft Skills (condicionalmente visíveis) */}
                <div 
                    className={`transition-all duration-1500 ease-in-out overflow-hidden ${
                        showAllSkills ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        maxHeight: showAllSkills ? '2500px' : '0px',
                        opacity: showAllSkills ? 1 : 0,
                        transitionProperty: 'max-height, opacity',
                        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        transitionDuration: '0.5s',
                        pointerEvents: showAllSkills ? 'auto' : 'none'
                    }}
                >
                    <div className={`${styleSkills.titles} ${styleSkills.titlesAnimated} ${isHiding ? styleSkills.titlesHiding : ''}`}>
                        <h1 className={styleSkills.mainTitleLeft}>
                            Soft Skills
                        </h1>
                        <h1 className={styleSkills.mainTitleRight}>
                            Hard Skills
                        </h1>           
                    </div>
                    <div className={`${styleSkills.skillsContainer} ${isHiding ? styleSkills.skillsHiding : ''}`}>
                        {createSkillRows()}
                    </div>
                </div>
            </section>

            {/* Gradient Line - sempre visível, fora da seção com overflow hidden */}
            <div className={styleSkills.gradientLine}></div>
        </>
    );
}
