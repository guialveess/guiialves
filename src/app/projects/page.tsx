"use client";
import {Link} from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { BackpackIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbLink
} from "@/components/ui/breadcrumb";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose
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
        "PostgreSQL"
      ]
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
        "Axios"
      ]
    }
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
                  <Link href="/">Home</Link>
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
            <section id="projects" className="lg:gap-60">
              {projects.map((project, index) => (
                <Link
                  href={project.link}
                  target="_blank"
                  key={index}
                  className="group relative flex flex-col h-[37vh] max-h-[370px] min-h-[350px] xl:h-[43vh] xl:min-h-[320px] sm:h-[35vh] sm:min-h-0 sm:max-h-[270px] xs:h-[38vh] overflow-hidden rounded-2xl border-[1px] border-b-0 bg-gradient-to-b from-gradient-gray to-gradient-black hover:via-gradient-gray duration-500 mb-8"
                >
                  {/* Imagem do Projeto */}
                  <div className="absolute inset-0 z-10 overflow-hidden rounded-2xl sm:rounded-xl">
                    <Image
                      quality={100}
                      priority
                      className="object-cover object-top duration-500 opacity-70 group-hover:opacity-90 group-hover:scale-[101%]"
                      src={project.image}
                      width={1000}
                      height={700}
                      alt={`Thumbnail for ${project.name}`}
                    />
                  </div>

                  {/* Badge no Topo */}
                  <Badge
                    variant="outline"
                    className="absolute z-30 top-2 right-2 bg-neutral-900 text-white px-2 py-1 text-xs rounded-lg"
                  >
                    {project.name}
                  </Badge>

                  {/* Conteúdo do Card */}
                  <div className="z-20 flex flex-col pl-4 sm:p-4 mt-auto text-neutral-300 pb-5">
                    {/* Fundo com Opacidade Baixa */}
                    <div className="absolute inset-0 bg-black/60 rounded-b-2xl pointer-events-none"></div>

                    {/* Conteúdo do Card */}
                    <h3 className="relative text-lg font-semibold xl:text-xl text-white drop-shadow-md">
                      {project.name}
                    </h3>
                    <p className="relative leading-normal max-w-[33ch] text-sm text-neutral-300 drop-shadow-md">
                      {project.description}
                    </p>
                  </div>
                </Link>
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
