import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/logo.svg" // Caminho para o SVG na pasta public
        alt="Logo"
        width={100} // Largura da imagem
        height={100} // Altura da imagem
      />
    </div>
  );
};

export default Logo;
