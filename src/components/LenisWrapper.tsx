"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializa o Lenis
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08, // Suavidade do scroll (quanto menor, mais suave o movimento)
      duration: 1.5, // Duração da animação do scroll (ajuste para suavidade)
      easing: (t) => 1 - Math.pow(1 - t, 3), // Função de easing personalizada para suavidade
      gestureOrientation: "vertical", // Permite gestos na direção vertical
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpa o Lenis ao desmontar
    };
  }, []);

  return <div id="lenis-wrapper">{children}</div>;
}
