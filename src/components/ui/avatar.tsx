import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { motion } from "framer-motion"; // Importando o Framer Motion
import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    hoverEffect?: boolean; // Efeito hover opcional
    size?: number; // Personaliza o tamanho
  }
>(({ className, hoverEffect = true, size = 48, ...props }, ref) => {
  // Função para bloquear o clique direito
  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="relative"
      style={{ width: size, height: size }} // Aplica o tamanho diretamente
      onContextMenu={preventRightClick} // Bloqueia o menu de contexto (clique direito)
    >
      {/* Camada invisível que bloqueia o arraste */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 10, cursor: "" }} // Impede o arraste da imagem
      />

      {hoverEffect ? (
        <>
          {/* Componente animado */}
          <motion.div
            className={cn("rounded-full overflow-hidden", className)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ width: size, height: size }}
          >
            <AvatarPrimitive.Image
              ref={ref}
              className="w-full h-full object-cover transition-all duration-300 ease-in-out"
              {...props}
              style={{ filter: "grayscale(100%)" }} // Filtro preto e branco por padrão
            />
          </motion.div>
        </>
      ) : (
        // Comportamento padrão sem hover
        <AvatarPrimitive.Image
          ref={ref}
          className={cn("aspect-square h-full w-full", className)}
          {...props}
        />
      )}
    </div>
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
