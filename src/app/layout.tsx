"use client";

import { GeistSans } from "geist/font/sans";
import { bricolageGrotesque } from "@/app/font";
import { GeistMono } from "geist/font/mono";
import { ViewTransitions } from "next-view-transitions";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={bricolageGrotesque.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
