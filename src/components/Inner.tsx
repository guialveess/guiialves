"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slide, opacity, perspective } from "@/components/anim";

const anim = (variants: { initial: { y: string; } | { scale: number; y: number; } | { opacity: number; }; enter: { y: string; } | { scale: number; y: number; } | { opacity: number; transition: { duration: number; }; }; exit: { y: number; transition: { duration: number; ease: number[]; }; } | { scale: number; y: number; opacity: number; transition: { duration: number; ease: number[]; }; } | { opacity: number; }; }) => ({
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants,
});

export default function Inner({ children }: { children: React.ReactNode }) {
  return (
    <div className="inner relative overflow-hidden">
      {/* Background Slide Animation */}
      <motion.div
        className="slide inset-0 z-10"
        {...anim(slide)}
      />
      {/* Page Content Animation */}
      <motion.div className="page relative z-20" {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          {/* Navigation */}
          
          {/* Page Content */}
          <main>{children}</main>
        </motion.div>
      </motion.div>
    </div>
  );
}
