"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeadingWithIconProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string; // Texto do título
  icon: React.ReactNode; // Ícone ou logo para renderizar
  hasBackground?: boolean; // Define se o fundo será aplicado ou não
}

export function HeadingWithIcon({
  text,
  icon,
  hasBackground = true,
  className,
  ...props
}: HeadingWithIconProps) {
  return (
    <div className={cn("relative inline-block group", className)}>
      <h3
        className="text-2xl font-bold text-gray-900 dark:text-gray-100 relative z-10"
        {...props}
      >
        {text}
      </h3>
      <motion.div
        className="absolute -top-3 -right-16 z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"
        aria-hidden="true"
        whileHover={{ rotate: 12 }}
        initial={{ rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div
          className={cn(
            "max-h-fit transform rounded-full p-2 px-6 transition-all duration-500 ease-out hover:-rotate-2 hover:scale-110",
            { "bg-white dark:bg-gray-800/60": hasBackground } // Condicional para aplicar o fundo
          )}
        >
          <div className="w-9 h-9 flex items-center justify-center rounded-full">
            {icon}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
