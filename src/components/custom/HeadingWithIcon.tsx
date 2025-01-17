"use client"
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Certifique-se de que o utilitário cn está disponível

interface HeadingWithIconProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string; // Texto do título
  icon: React.ReactNode; // Ícone ou logo para renderizar
}

export function HeadingWithIcon({ text, icon, className, ...props }: HeadingWithIconProps) {
  return (
    <div className={cn("relative inline-block group", className)}>
      <h3
        className="text-2xl font-bold text-gray-900 dark:text-gray-100 relative z-10"
        {...props}
      >
        {text}
      </h3>
      <motion.div
        className="absolute -top-7 -right-11 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-700"
        aria-hidden="true"
        // Adicionando animação com Framer Motion
        whileHover={{ rotate: 12 }} // Rotaciona quando o mouse passa
        initial={{ rotate: 0 }} // Começa sem rotação
        transition={{ duration: 0.5, ease: "easeInOut" }} // Controla a suavidade da rotação
      >
        <div
          className="relative p-1 rounded-full border-2 border-transparent group-hover:border-rainbow animate-gradient-border"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full">
            {icon}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
