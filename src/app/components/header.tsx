"use client";
import headerStyles from "../styles/Header.module.css";
import { useState, useEffect } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;

            // Movement Detector
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Hide Navbar
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Show Navbar
                setIsVisible(true);
            }

            // Top Detector
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

    // Smooth scroll function for navigation links
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className={`${headerStyles.header} ${scrolled ? headerStyles.scrolled : ""} ${isVisible ? headerStyles.visible : headerStyles.hidden}`}>
            <div className={headerStyles.container}>
                <a className={headerStyles.dev} href="#top" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('top');
                }}>
                    felipebc2.dev
                </a>
                <nav className={headerStyles.nav}>
                    <button 
                        className={headerStyles.navLink}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </button>
                    <button 
                        className={headerStyles.navLink}
                        onClick={() => scrollToSection('projects')}
                    >
                        Projetos
                    </button>
                    <button 
                        className={headerStyles.navLink}
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </button>
                    <button 
                        className={headerStyles.navLink}
                        onClick={() => scrollToSection('about')}
                    >
                        Sobre
                    </button>
                    <button 
                        className={headerStyles.navLink}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contato
                    </button>
                </nav>
            </div>
        </header>
    );
}