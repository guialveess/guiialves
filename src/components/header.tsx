import React from "react";
import { Link } from "next-view-transitions";
import { BackpackIcon } from "@radix-ui/react-icons"; // Substitua pelo seu ícone
import { ModeToggle } from "@/components/mode-toggle"; // Certifique-se de criar ou importar o componente ModeToggle
import { Button } from "@/components/ui/button"; // Importe o botão do seu design system ou crie um componente customizado
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";

const Header = () => {
  return (
    <header className="z-[50] relative top-7 w-full max-w-[90%] sm:max-w-4xl lg:max-w-5xl border bg-background/95 backdrop-blur-sm dark:bg-black/[0.8] border-border/40 mx-auto flex h-[50px] items-center justify-between rounded-2xl px-4 sm:px-6 lg:px-8 shadow-sm saturate-100 transition-colors">
      <div className="container h-14 flex items-center">
        <Link
          href="/"
          className="flex justify-start items-center hover:opacity-85"
        ></Link>
        <nav className="ml-0">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <Link href="/">Home</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>
                <Link href="/projects">Projetos</Link>
              </BreadcrumbPage>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href="/blog">Blog</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <nav className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-8 h-8 bg-background"
            asChild
          ></Button>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
