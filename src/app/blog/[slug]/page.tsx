import { getPostFromSlug } from "@/app/blog/utils";
import { Metadata } from "@/app/blog/utils";
import DotPattern from "@/components/custom/DotPattern";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { metadata, content } = await getPostFromSlug(params.slug);

  return (
    <div className="relative flex flex-col min-h-screen scroll-smooth">
      {/* Background DotPattern */}
      <DotPattern
        className={cn(
          "absolute inset-0 opacity-20 z-[-1] pointer-events-none", // Tornar o fundo sutil e não interativo
          "[mask-image:radial-gradient(300px_circle_at_center,white,)] bg-gray-200 dark:bg-black"
        )}
      />

      {/* Header */}
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center justify-between px-4">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            Home
          </Link>
          <ModeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-3xl px-4 mt-16 prose">
        <h1 className="text-2xl font-bold">{metadata.title}</h1>
        <p className="text-sm text-gray-500 mb-4">{metadata.publishedAt}</p>
        <article>{content}</article>
      </main>
    </div>
  );
}
