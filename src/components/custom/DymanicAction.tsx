"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiNextdotjs, SiPrisma, SiPostgresql, SiTsnode, SiNestjs } from "react-icons/si";

import {
  DynamicContainer,
  DynamicIsland,
  DynamicIslandProvider,
  DynamicTitle,
  useDynamicIslandSize,
} from "@/components/custom/DynamicIsland";

const DynamicAction = () => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const [currentSize, setCurrentSize] = useState<"large" | "compact">("large");
  const [isVisible, setIsVisible] = useState(true); // Controla a visibilidade
  const { setSize } = useDynamicIslandSize();

  const logos = [
    { component: <SiNextdotjs className="h-6 w-6 text-white" />, name: "Next.js" },
    { component: <SiPrisma className="h-6 w-6 text-blue-500" />, name: "Prisma" },
    { component: <SiPostgresql className="h-6 w-6 text-blue-400" />, name: "PostgreSQL" },
    { component: <SiTsnode className="h-6 w-6 text-green-600" />, name: "NodeJs" },
    { component: <SiNestjs className="h-6 w-6 text-red-700" />, name: "NestJs" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Alterna entre os logos
      setCurrentLogo((prev) => (prev + 1) % logos.length);

      // Alterna entre os tamanhos compact e large
      const newSize = currentSize === "large" ? "compact" : "large";
      setCurrentSize(newSize); // Atualiza o estado local
      setSize(newSize); // Atualiza o DynamicIsland
    }, 2000); // Tempo de troca entre logos e tamanho

    return () => clearInterval(interval);
  }, [currentSize, logos.length, setSize]);

  // Render compact state directly
  const renderCompactState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <div className="relative flex items-center">
        <motion.div
          key={currentLogo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          className="h-6 w-6 ease-in-out"
        >
          {logos[currentLogo].component}
        </motion.div>
        <DynamicTitle className="ml-2 my-auto text-xl font-black tracking-tighter text-white">
          Full Stack
        </DynamicTitle>
      </div>
    </DynamicContainer>
  );

  return (
    <div
      className="h-full"
      onMouseEnter={() => setIsVisible(true)} // Mostra o DynamicIsland
      onMouseLeave={() => setTimeout(() => setIsVisible(false), 500)} // Delay antes de esconder
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="dynamic-island"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <DynamicIsland id="dynamic-blob">{renderCompactState()}</DynamicIsland>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function DynamicIslandDemo() {
  return (
    <DynamicIslandProvider initialSize={"large"}>
      <div>
        <DynamicAction />
      </div>
    </DynamicIslandProvider>
  );
}
