import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "guiialves",
  description:
    "Plataforma simples e intuitiva para exibição de eventos de Pokémon GO, fornecendo uma maneira rápida e eficiente de encontrar os eventos mais recentes e atualizações em tempo real.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "guiialves",
    description:
      "Plataforma simples e intuitiva para exibição de eventos de Pokémon GO, fornecendo uma maneira rápida e eficiente de encontrar os eventos mais recentes e atualizações em tempo real.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "guiialves",
    description:
      "Plataforma simples e intuitiva para exibição de eventos de Pokémon GO, fornecendo uma maneira rápida e eficiente de encontrar os eventos mais recentes e atualizações em tempo real."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
