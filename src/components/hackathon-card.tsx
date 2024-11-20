import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  certificateFile?: string; // Caminho relativo ao arquivo na pasta pública
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  links,
  certificateFile
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage
            src={image ? `/${image}.png` : "/nasa-spaceapps.png"}
            alt={title}
            className="object-contain"
          />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        {location && (
          <Badge
            variant="default"
            className="text-sm inline-block max-w-fit px-2 py-1"
          >
            {location}
          </Badge>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}

        {certificateFile && (
          <Dialog>
            <Button variant="outline" className="mt-2 text-sm w-auto">
              Ver Certificado
            </Button>
            <DialogTrigger asChild></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Certificado</DialogTitle>
              </DialogHeader>
              <div className="h-[500px] w-full">
                <iframe
                  src={`${certificateFile}#toolbar=0`}
                  className="w-full h-full border-0"
                  title="Certificado"
                  loading="lazy"
                  style={{ display: "block" }} // Garante que o iframe seja exibido corretamente
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
