"use client"; // Necessário para usar hooks como useEffect

import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    // Inicialize o Lenis
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1, // Suavidade do scroll (entre 0 e 1)
      duration: 1.2, // Duração da animação do scroll (em segundos)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing customizado
    });

    // Loop de atualização com requestAnimationFrame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup ao desmontar
    return () => lenis.destroy();
  }, []);
};
