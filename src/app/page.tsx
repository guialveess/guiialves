"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { ModeToggle } from "@/components/mode-toggle";
import { BackpackIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Cover } from "@/components/ui/cover";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HackathonCard } from "@/components/hackathon-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Nextjs from "@/components/NextjsIcon";
import { Hexagon } from "lucide-react";
import {
  ApiIcon,
  FigmaIcon,
  NextIcon,
  Typescript01Icon,
  WinkingIcon
} from "hugeicons-react";
import {
  BentoCard,
  BentoGrid,
  OtherSkillsSection
} from "@/components/ui/bento-grid";
import Logo from "@/components/Logo";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <a
        href="https://youtube.com.br"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  gmail: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" {...props}>
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path
        fill="#c5221f"
        d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
      />
    </svg>
  ),

  linkedin: (props: IconProps) => (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        fill="#0A66C2"
        d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
      />
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#linearGradient1780)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  )
};

const features = [
  {
    Icon: Nextjs,
    name: "NextJS",
    description:
      "Experiência em criar aplicações web rápidas e dinâmicas utilizando NextJS, garantindo performance e SEO otimizados.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3"
  },
  {
    Icon: Typescript01Icon,
    name: "TypeScript",
    description:
      "Domínio de TypeScript para melhorar a segurança e escalabilidade dos meus projetos, garantindo um código mais confiável e fácil de manter.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-1"
  },
  {
    Icon: Hexagon,
    name: "NodeJS",
    description:
      "Ampla experiência no desenvolvimento de backends com NodeJS, criando sistemas escaláveis e de alto desempenho.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-2"
  },
  {
    Icon: ApiIcon,
    name: "Rest API",
    description:
      "Experiência na criação de APIs RESTful eficientes para integração de sistemas, com foco em desempenho e segurança.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
  },
  {
    Icon: WinkingIcon,
    name: "UX/UI",
    description:
      "Habilidade em projetar interfaces amigáveis e funcionais, focando na experiência do usuário e na usabilidade.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-2 lg:row-start-2 lg:row-end-3"
  },
  {
    Icon: FigmaIcon,
    name: "Figma",
    description:
      "Experiência no uso do Figma para criar designs colaborativos, protótipos interativos e interfaces de alta qualidade.",
    href: "/",
    cta: "Saiba mais",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-"
  }
];

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [error, setError] = useState<string>("");

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
          <Link
            href="/"
            className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
          ></Link>
          <nav className="ml-auto flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 bg-background"
              asChild
            >
              <Link href="https://www.linkedin.com/in/guiialves/">
                <BackpackIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </header>

      <main className="min-h-[calc(100vh-57px-97px)] flex-1">
        <div className="container relative  pb-10">
          <div className="fixed bottom-0 left-0 right-0 mb-6 py-6 z-10">
            <Dock direction="bottom">
              <DockIcon>
                <a
                  href="https://github.com/guialveess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.gitHub className="size-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://www.linkedin.com/in/guiialves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.linkedin className="size-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="mailto:97guilherme.alves@gmail.com?subject=Olá%20Guilherme&body=Gostaria%20de%20entrar%20em%20contato!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.gmail className="size-6" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://wa.me/5581981770644"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.whatsapp className="size-6" />
                </a>
              </DockIcon>
            </Dock>
          </div>
          <section className="mx-auto max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
            <div className="flex items-center gap-4">
              <Cover className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
                guiialves
              </Cover>
              <Avatar className="relative flex items-center justify-center h-14 w-14 rounded-full overflow-hidden">
                <AvatarImage
                  src="/avatar.jpg"
                  alt="Avatar"
                  hoverEffect={true} // Ativando o efeito de hover
                  size={64} // Ajusta o tamanho do avatar
                />
                <AvatarFallback>GA</AvatarFallback>
              </Avatar>
            </div>
            <Badge variant={"default"} className="mt-2">
              Dev Full Stack
              <Badge className="dark:bg-emerald-900 ml-2 text-white bg-emerald-800  border-none">
                Recife - PE 📍
              </Badge>
            </Badge>
          </section>

          <div className=" mx-auto max-w-[980px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-4 lg:pb-6 relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:shadow-xl">
            <p className="z-10 flex whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black dark:text-white">
              Me chamo Guilherme, desenvolvedor full stack com experiência tanto
              em backend quanto frontend. Meu objetivo é criar soluções
              inovadoras que impactem positivamente a vida das pessoas, ao mesmo
              tempo em que trabalho no protótipo e desenvolvimento dos meus
              próprios SaaS 👋
            </p>
            <GridPattern
              width={10} // Diminuído para 10 para um grid mais compacto
              height={10} // Diminuído para 10 para um grid mais compacto
              x={-1}
              y={-1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
              )}
            />
          </div>

          <section className="mx-auto max-w-[980px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6 relative">
            <BentoGrid className="lg:grid-rows-3">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
            <OtherSkillsSection />
          </section>

          <div className="mx-auto max-w-[980px] flex flex-col items-center justify-center gap-2 py-8 md:py-4 md:pb-8 lg:py-6 lg:pb-6">
            <Badge
              variant={"default"}
              className="mb-6 text-xl font-bold leading-tight tracking-tighter md:text-3xl lg:text-4xl lg:leading-[1.1] text-center"
            >
              Hackathons
            </Badge>
          </div>
          <section id="hackathons" className="">
            <div className="space-y-12 w-full py-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Adoro transformar ideias em realidade 😊
                  </h2>
                </div>
              </div>

              {/* Hackathon cards */}
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                <div className="mb-4">
                  <HackathonCard
                    title="Nasa Space Apps Hackathon"
                    description={
                      <>
                        <blockquote className="border-l-4 pl-4 italic text-md font-semibold text-muted-foreground">
                          &quot;Foi uma experiência incrível participar de um
                          hackathon tão renomado globalmente, com mais de 60
                          equipes competindo.&quot;
                        </blockquote>
                        <p className="mt-2">
                          Ficar em{" "}
                          <span className="font-black"> 7º lugar </span>
                          foi uma conquista memorável!
                        </p>
                      </>
                    }
                    location="Recife - PE"
                    dates="04/10 - 06/10"
                    image="nasa-spaceapps"
                    certificateFile="/certificates/nasa.pdf" // Caminho para o arquivo na pasta pública
                  />
                </div>

                {/* <div className="mb-4">
                  <HackathonCard
                    title="Hackathon Example 2"
                    description="Description of Hackathon 2"
                    location="Location 2"
                    dates="Date range 2"
                    image="nasa-spaceapps-"
                  />
                </div> */}
                {/* Adicione mais itens de hackathons conforme necessário */}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-2 md:py-0 mb-14 border-t border-border/40">
        <div className="container flex items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance  mb-14  text-center text-sm leading-loose text-muted-foreground">
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
    </div>
  );
}
