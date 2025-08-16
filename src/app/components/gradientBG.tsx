"use client";

import { useEffect, useRef } from "react";

export default function GradientBG() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / max));
      const newHue = 320 - (320 - 200) * ratio; // Aréa do Circulo = Initial + (range) * raio
      document.documentElement.style.setProperty("--accent-h", String(newHue));
      document.documentElement.style.setProperty("--accent", `hsl(${newHue} 80% 60%)`);
    };

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      document.documentElement.style.setProperty("--mx", String(x));
      document.documentElement.style.setProperty("--my", String(y));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <div ref={bgRef} className="bg" aria-hidden />;
}