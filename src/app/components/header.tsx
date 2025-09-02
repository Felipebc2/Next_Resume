"use client";
import { useEffect, useState } from "react";
import headerStyles from "../styles/Header.module.css";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;

            // Movement Detector - Hide/Show navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                // Hide Navbar when scrolling down
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Show Navbar when scrolling up
                setIsVisible(true);
            }

            // Always show navbar at the top
            if (currentScrollY < 8) {
                setIsVisible(true);
                // Ativar Home quando estiver no topo
                setActiveSection('home');
            }

            setScrolled(currentScrollY > 8);
            setLastScrollY(currentScrollY);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScrollY]);

    // Intersection Observer para detectar seções ativas
    useEffect(() => {
        const sections = ['home', 'projects', 'skills', 'about', 'contact'];
        const observers: IntersectionObserver[] = [];

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                // Prioridade especial para Home quando estiver no topo
                                if (sectionId === 'home' && window.scrollY < 100) {
                                    setActiveSection('home');
                                } else if (sectionId !== 'home') {
                                    setActiveSection(sectionId);
                                }
                            }
                        });
                    },
                    {
                        threshold: 0.3, // 30% da seção deve estar visível
                        rootMargin: '-20% 0px -20% 0px' // Margem para melhor detecção
                    }
                );
                
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, []);

    // Smooth scroll function for navigation links
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            if (sectionId === 'projects') {
                const offsetY = 120;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offsetY;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    // Função específica para voltar ao topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActiveSection('home');
    };

    return (
        <header className={`${headerStyles.header} ${scrolled ? headerStyles.scrolled : ""} ${isVisible ? headerStyles.visible : headerStyles.hidden}`}>
            <div className={headerStyles.container}>
                <div className={headerStyles.logoContainer}>
                    <a className={headerStyles.logo} href="https://github.com/Felipebc2" target="_blank" rel="noopener noreferrer">Felipebc2.dev</a>
                </div>
                <nav className={headerStyles.nav}>
                    <button 
                        className={`${headerStyles.navLink} ${activeSection === 'home' ? headerStyles.active : ''}`}
                        onClick={scrollToTop}
                    >
                        Home
                    </button>
                    <button 
                        className={`${headerStyles.navLink} ${activeSection === 'projects' ? headerStyles.active : ''}`}
                        onClick={() => scrollToSection('projects')}
                    >
                        Projetos
                    </button>
                    <button 
                        className={`${headerStyles.navLink} ${activeSection === 'skills' ? headerStyles.active : ''}`}
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </button>
                    <button 
                        className={`${headerStyles.navLink} ${activeSection === 'about' ? headerStyles.active : ''}`}
                        onClick={() => scrollToSection('about')}
                    >
                        Sobre
                    </button>
                    <button 
                        className={`${headerStyles.navLink} ${activeSection === 'contact' ? headerStyles.active : ''}`}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contato
                    </button>
                </nav>

                <div className={headerStyles.social}>
                    <a href="https://github.com/Felipebc2" target="_blank" rel="noopener noreferrer" className={headerStyles.socialLink}>
                        <svg className={headerStyles.socialIcon}>
                            <FaGithub size={25} />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/felipebc2/" target="_blank" rel="noopener noreferrer" className={headerStyles.socialLink}>
                        <svg className={headerStyles.socialIcon}>
                            <FaLinkedin size={25} />
                        </svg>
                    </a>
                    <a href="mailto:felipeb.castro02@gmail.com" className={headerStyles.socialLink}>
                        <svg className={headerStyles.socialIcon}>
                            <AiOutlineMail size={25} />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    );
}