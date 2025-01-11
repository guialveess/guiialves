"use client";

import { bricolageGrotesque } from "@/app/font";
import { useLenis } from "@/hooks/useLenis";
import { MDXProvider } from "@mdx-js/react";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
  useLenis(): void;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ViewTransitions>{children}</ViewTransitions>
        </ThemeProvider>
      </body>
    </html>
  );
}
