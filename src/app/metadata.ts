// src/app/metadata.ts
import type { Metadata } from "next";

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
    "Me chamo Guilherme, desenvolvedor full stack com experiência em backend e frontend. Meu objetivo é criar soluções inovadoras que impactem positivamente a vida das pessoas, enquanto trabalho no protótipo e desenvolvimento dos meus próprios SaaS 👋",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "guiialves",
    description:
      "Me chamo Guilherme, desenvolvedor full stack com experiência em backend e frontend. Meu objetivo é criar soluções inovadoras que impactem positivamente a vida das pessoas, enquanto trabalho no protótipo e desenvolvimento dos meus próprios SaaS 👋",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "guiialves",
    description:
      "Me chamo Guilherme, desenvolvedor full stack com experiência em backend e frontend. Meu objetivo é criar soluções inovadoras que impactem positivamente a vida das pessoas, enquanto trabalho no protótipo e desenvolvimento dos meus próprios SaaS 👋",
  },
};
