"use client";

import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Inner from "@/components/Inner"; // Importando o Inner

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Inner>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={pathname}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 1 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </Inner>
        </ThemeProvider>
      </body>
    </html>
  );
}
