"use client";
import { useEffect } from "react";
import styles from "../styles/MouseGradientBG.module.css";

export default function MouseGradientBG() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty("--mx", String(x));
      document.documentElement.style.setProperty("--my", String(y));
    };
    
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return <div className={styles.bg} aria-hidden />;
}
