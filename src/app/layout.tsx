"use client";

import { bricolageGrotesque } from "@/app/font";
import Header from "@/components/header";
import { useLenis } from "@/hooks/useLenis";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Ativa o Lenis para scroll suave
  useLenis();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Adicionando o Header como parte do layout */}
          <Header />
          <ViewTransitions>{children}</ViewTransitions>
        </ThemeProvider>
      </body>
    </html>
  );
}
