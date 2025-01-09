import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Certifique-se de que a Badge esteja importada corretamente
import { BadgeAnimatedBorder } from "@/components/custom/BadgeAnimatedBorder";

const BentoGrid = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

import {} from "@radix-ui/react-icons";

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        " [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div className="relative">{background}</div>
      
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Icon />
        <div
          className={cn(
            "group relative grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200",
            "ml-4 bg-red-600 text-white"
          )}
        >
          <span>
            <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className="backdrop absolute inset-px rounded-full bg-neutral-950 transition-colors duration-200" />
          <span className="z-10 text-xs font-medium">{name}</span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};


const OtherSkillsSection = () => {
  return (
    <section className="mx-auto max-w-[980px] flex flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6 relative">
      
      <Badge
        variant={"secondary"}
        className="mb-6 text-xl font-bold leading-tight justify-center tracking-tighter md:text-3xl lg:text-4xl lg:leading-[1.1]"
      >
        Outras Habilidades
      </Badge>

      {/* Container para Badges lado a lado */}
      <div className="flex flex-wrap justify-center gap-2">
        {/* Exemplos de Badges */}
        <Badge variant="default" className="text-md  font-bold">
          JavaScript
        </Badge>
        <Badge variant="default" className="text-md  font-bold">
          PostgreSQL
        </Badge>
        <Badge variant="default" className="text-md  font-bold">
          Illustrator
        </Badge>
        <Badge variant="default" className="text-md  font-bold">
          Photoshop
        </Badge>
        <Badge variant="default" className="text-md  font-bold">
          GraphQL
        </Badge>
        <Badge variant="default" className="text-md  font-bold">
          Git/Github
        </Badge>
        <Badge variant="default" className="text-md  font-bold">
         Prisma
        </Badge>
        {/* Adicione mais badges conforme necessário */}
      </div>
    </section>
  );
};

export { BentoCard, BentoGrid, OtherSkillsSection };
