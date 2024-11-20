"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => {
      const meteorLeft = Math.random() * window.innerWidth;
      const adjustedLeft = Math.min(
        window.innerWidth - 50, // Limite máximo com margem de segurança
        Math.max(0, meteorLeft) // Limite mínimo
      );

      return {
        top: -5, // Inicialmente fora da tela
        left: adjustedLeft + "px", // Posicionamento horizontal aleatório
        animationDelay: Math.random() * 1 + 0.2 + "s", // Atraso aleatório na animação
        animationDuration: Math.floor(Math.random() * 8 + 2) + "s" // Duração aleatória da animação
      };
    });

    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
