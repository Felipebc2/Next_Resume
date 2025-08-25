import styleSkills from "../styles/skills.module.css";
import glassStyle from "../styles/glass.module.css";
import {
    Globe,
    Database,
    Smartphone,
    Code,
    Users,
    Lightbulb,
    Target,
    TrendingUp
} from "lucide-react";

// Dados das hard skills baseados na imagem
const hardSkills = [
    {
        category: "Frontend",
        icon: <Globe className="w-6 h-6" />,
        technologies: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "SASS"]
    },
    {
        category: "Backend",
        icon: <Database className="w-6 h-6" />,
        technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
        category: "Mobile",
        icon: <Smartphone className="w-6 h-6" />,
        technologies: ["React Native", "Flutter", "Expo", "iOS", "Android"]
    },
    {
        category: "DevOps",
        icon: <Code className="w-6 h-6" />,
        technologies: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions", "Nginx"]
    }
];

// Dados das soft skills

const softSkills = [
    {
        category: "Comunicação",
        icon: <Users className="w-6 h-6" />,
        technologies: ["Trabalho em Equipe", "Comunicação Clara", "Apresentações", "Documentação"]
    },
    {
        category: "Resolução de Problemas",
        icon: <Lightbulb className="w-6 h-6" />,
        technologies: ["Análise Crítica", "Pensamento Lógico", "Criatividade", "Adaptabilidade"]
    },
    {
        category: "Gestão de Projetos",
        icon: <Target className="w-6 h-6" />,
        technologies: ["Planejamento", "Organização", "Priorização", "Metodologias Ágeis"]
    },
    {
        category: "Aprendizado Contínuo",
        icon: <TrendingUp className="w-6 h-6" />,
        technologies: ["Curiosidade", "Resiliência", "Feedback", "Melhoria Contínua"]
    }
];


export default function Skills() {
    // Combinar soft skills e hard skills para criar a grade de 4 colunas

    return (
        <section id="skills" className={styleSkills.containers}>
                        <div className={styleSkills.containerLeft}>
                <h1 className={styleSkills.mainTitle}>Soft Skills</h1>
                <div className={styleSkills.skillsGridLeft}>
                    {softSkills.map((skill) => (
                        <div key={skill.category} className={`${glassStyle["upper-layer"]} ${styleSkills.skillCard}`}>
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
                    ))}
                </div>
            </div>
            <div className={styleSkills.containerRight}>
                <h1 className={styleSkills.mainTitle}>Hard Skills</h1>
                <div className={styleSkills.skillsGridRight}>
                    {hardSkills.map((skill) => (
                        <div key={skill.category} className={`${glassStyle["upper-layer"]} ${styleSkills.skillCard}`}>
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
                    ))}
                </div>
            </div>
        </section>
    );
}
