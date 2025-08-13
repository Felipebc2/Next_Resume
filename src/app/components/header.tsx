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

    return (
        <header className={`${headerStyles.header} ${scrolled ? headerStyles.scrolled : ""} ${isVisible ? headerStyles.visible : headerStyles.hidden}`}>
            <div>
                <a className={headerStyles.dev} href="#top">
                    felipebc2.dev
                </a>
                <nav className={headerStyles.nav}>
                    <a href="#home">Home</a>
                    <a href="#projects">Projetos</a>
                    <a href="#skills">Skills</a>
                    <a href="#about">Sobre</a>
                    <a href="#contact">Contato</a>
                </nav>
            </div>
        </header>
    );
}