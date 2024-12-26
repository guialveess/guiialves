"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import SpotlightCard from "@/components/ui/spotlightcard";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ModeToggle } from "@/components/mode-toggle";
import { BackpackIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbList, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function HomePage() {
  const projects = [
    {
      name: "Stips",
      description: "Personalização e gestão de links, oferecendo recursos que vão desde estatísticas avançadas até templates premium 😁",
      image: "/stips.png",
      link: "https://stipss.vercel.app/pt/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Prisma", "PostgreSQL"]
    },
    {
      name: "PokeTime",
      description: "Website simples para exibir eventos do jogo PokemonGO usando a API do LeekDuck 🐥",
      image: "/poketime.jpg",
      link: "https://eventspoke.vercel.app/",
      technologies: ["Next.js", "TypeScript", "API do LeekDuck", "NodeJS", "Axios"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen scroll-smooth ">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="/projects">
                <BackpackIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <TracingBeam className="">
        <main className="min-h-[calc(100vh-57px-97px)] flex-1 mx-auto">
        <Breadcrumb className="mt-6 ml-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Projetos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          <div className="container relative pb-10">
            

            <section id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-60">
              {projects.map((project, index) => (
                <CardContainer className="inter-var" key={index}>
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-lg p-4 border">
                    <CardItem
                      translateZ="30"
                      className="text-lg font-semibold text-neutral-600 dark:text-white"
                    >
                      <Badge variant="default">
                        <h1 className="text-sm">{project.name}</h1>
                      </Badge>
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem translateZ="70" className="w-full mt-4">
                      <Image
                        src={project.image}
                        height={800}
                        width={800}
                        className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-md"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-12">
                      <CardItem
                        translateZ={15}
                        as={Link}
                        href={project.link}
                        target="_blank"
                        className="px-3 py-1 rounded-lg text-xs font-normal dark:text-white"
                      >
                        Ir para o Projeto
                      </CardItem>
                      <Drawer>
                        <DrawerTrigger>
                          <div className="px-3 py-1 rounded-lg bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer">
                            Ver detalhes
                          </div>
                        </DrawerTrigger>
                        <DrawerContent>
                          <DrawerClose />
                          <div className="p-6 flex flex-col items-center text-center">
                            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                              Tecnologias Utilizadas
                            </h2>
                            <ul className="list-none space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                              {project.technologies.map((tech, idx) => (
                                <li key={idx} className="bg-gray-200 dark:bg-neutral-800 py-2 px-4 rounded-md">
                                  {tech}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                  </CardBody>
                </CardContainer>
              ))}
            </section>
          </div>
          <footer className="py-2 md:py-0 mb-14 border-t border-border/40">
            <div className="container flex items-center justify-center gap-4 md:h-24 md:flex-row">
              <p className="text-balance mb-14 text-center text-sm leading-loose text-muted-foreground">
                feito por{" "}
                <Link
                  href="https://api.whatsapp.com/send/?phone=5581981770644&text=Olá%2C+estou+interessado+em+desenvolver+um+site+ou+sistema.+Gostaria+de+discutir+as+opções+disponíveis+com+você.%F0%9F%91%8B&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-4"
                >
                  @guiialves
                </Link>
              </p>
            </div>
          </footer>
        </main>
      </TracingBeam>
    </div>
  );
}
