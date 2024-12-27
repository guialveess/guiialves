"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackpackIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbList, BreadcrumbPage, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Stips",
      description:
        "Personalização e gestão de links, oferecendo recursos que vão desde estatísticas avançadas até templates premium 😁",
      image: "/stips.png",
      link: "https://stipss.vercel.app/pt/",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "Prisma",
        "PostgreSQL",
      ],
    },
    {
      name: "PokeTime",
      description:
        "Website simples para exibir eventos do jogo PokemonGO usando a API do LeekDuck 🐥",
      image: "/poketime.jpg",
      link: "https://eventspoke.vercel.app/",
      technologies: [
        "Next.js",
        "TypeScript",
        "API do LeekDuck",
        "NodeJS",
        "Axios",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      {/* Header */}
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="/">
                <BackpackIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <TracingBeam>
        <main className="min-h-[calc(100vh-57px-97px)] flex-1 mx-auto">
          {/* Breadcrumb */}
          <div className="container relative pb-10">
            <Breadcrumb className="mt-6 mr-7">
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
          </div>

          {/* Projects Section */}
          <div className="container relative pb-10">
            <section
              id="projects"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-60"
            >
              {projects.map((project, index) => (
                <CardContainer className="inter-var" key={index}>
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-lg dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-lg p-4 border">
                    {/* Project Name */}
                    <CardItem
                      translateZ="30"
                      className="text-lg font-semibold text-neutral-600 dark:text-white"
                    >
                      <Badge variant="default">
                        <h1 className="text-sm">{project.name}</h1>
                      </Badge>
                    </CardItem>
                    {/* Project Description */}
                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-neutral-500 text-xs max-w-xs mt-2 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>
                    {/* Project Image */}
                    <CardItem translateZ="70" className="w-full mt-4">
                      <Image
                        src={project.image}
                        height={800}
                        width={800}
                        className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-md"
                        alt={`Thumbnail for ${project.name}`}
                      />
                    </CardItem>
                    {/* Actions */}
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
                                <li
                                  key={idx}
                                  className="bg-gray-200 dark:bg-neutral-800 py-2 px-4 rounded-md"
                                >
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

          {/* Footer */}
          <footer className="py-2 md:py-0 mb-14 border-t border-border/40">
            <div className="container flex items-center justify-center gap-4 md:h-24 md:flex-row">
              <p className="text-balance mb-14 text-center text-sm leading-loose text-muted-foreground">
                {/* Placeholder for Footer Content */}
              </p>
            </div>
          </footer>
        </main>
      </TracingBeam>
    </div>
  );
}
