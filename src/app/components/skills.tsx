"use client";

import styleSkills from "../styles/skills.module.css";
import glassStyle from "../styles/glass.module.css";
import { useState } from "react";

import {
    Globe,
    Database,
    Smartphone,
    Code,
    Users,
    Lightbulb,
    Target,
    TrendingUp,
    Eye,
    EyeOff
} from "lucide-react";

const mainSkills = [
    {
        category: "Desenvolvimento",
        icon: <Globe className="w-6 h-6" />,
        technologies: ["React", "Next.js", "Angular", "Flask", "Nest.js", "Typescript", "N8N", "MongoDB", "Docker", "Azure"]     
    },
    {
        category: "Qualidades",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Comunicativo", "Lider", "Flexivel", "Organizado", "Mentalidade de Crescimento", "Criatividade"]
    },
]

// Dados das hard skills baseados na imagem
const hardSkills = [
    {
        category: "Linguagens de Programação",
        icon: <Globe className="w-6 h-6" />,
        technologies: ["C", "C++", "C#", "Python", "Java", "JavaScript", "TypeScript", "Lua"]
    },
    {
        category: "Frontend",
        icon: <Globe className="w-6 h-6" />,
        technologies: ["React", "Next.js", "Angular", "HTML/CSS", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: <Database className="w-6 h-6" />,
        technologies: ["Nest.js", "Flask", "Node.js"]
    },
    {
        category: "Data",
        icon: <Smartphone className="w-6 h-6" />,
        technologies: ["MongoDB", "MySql", "Redis", "PostgreSQL", "Cassandra", "Supabase"]
    },
    {
        category: "Data",
        icon: <Code className="w-6 h-6" />,
        technologies: ["Kafka", "SkLearn", "Machine Learning", "Estatística", "LLMs"]
    },
    {
        category: "DevOps, Segurança & Infra",
        icon: <Code className="w-6 h-6" />,
        technologies: ["Docker", "Microsoft Azure", "Vercel", "Linux", "Firebase", "Wireshark", "LGPD"]
    },
    {
        category: "Automação",
        icon: <Code className="w-6 h-6" />,
        technologies: ["Power Automate", "N8N"]
    },
    {
        category: "Extras",
        icon: <Code className="w-6 h-6" />,
        technologies: ["Git/GitHub", "Excel", "Unity/Unreal", "Maya3D/Blender", "Arduino/Rapberry", "Canva/Figma"]
    }
];

// Dados das soft skills
const softSkills = [
    {
        category: "Comunicação",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Proatividade", "Trabalho em Equipe", "Networking", "Abertura a Feedbacks"]
    },
    {
        category: "Liderança",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Tomada de Decisão", "Colaboração em Times Multidisciplinares", "Gerenciamento de Conflitos", "Gestão de Equipes"]
    },
    {
        category: "Organização",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Gerenciamento de Prioridades", "Entregas Rápidas", "Pensamento Estratégico e Analítico", "Gestão de Tempo"]
    },
    {
        category: "Resolução de Problemas",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Base Lógica Sólida", "Atenção a Detalhes", "Flexibilidade"]
    },
    {
        category: "Criatividade",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Desenvolvimento de Ideias", "Criatividade em Soluções Técnicas", "Inovação em Hackathons"]
    },
    {
        category: "Oratória",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Pitchs bem desenvolvidos", "Apresentação Técnica", "Clareza na Comunicação", "Paciente"]
    },
    {
        category: "Aprendizado",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Mentalidade de Crescimento", "Busca Ativa", "Aprendizado Rápido"]
    },
    {
        category: "Resiliência",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Adaptável", "Dedicado em Desafios", "Bom com Mudanças"]
    }

];

export default function Skills() {
    const [showAllSkills, setShowAllSkills] = useState(false);
    const [isHiding, setIsHiding] = useState(false);

    const toggleSkills = () => {
        if (showAllSkills) {
            // Iniciar animação de saída
            setIsHiding(true);
            // Aguardar a animação terminar antes de esconder
            setTimeout(() => {
                setShowAllSkills(false);
                setIsHiding(false);
            }, 500); // Ajustado para 500ms para sincronizar com as animações CSS
        } else {
            setShowAllSkills(true);
        }
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
            
            // Adicionar 2 hard skills (se disponíveis)
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
        <section id="skills" className={styleSkills.containers}>
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
                    <span className={styleSkills.expandText}>Clique para ver mais skills</span>
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
            {showAllSkills && (
                <>
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
                </>
            )}
        </section>
    );
}
