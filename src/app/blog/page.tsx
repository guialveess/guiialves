import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "next-view-transitions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { BackpackIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/custom/DotPattern";
import { cn } from "@/lib/utils";

// Diretório dos posts
const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

// Função para buscar os arquivos MDX
function getPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      title: data.title,
      date: data.date,
      description: data.description || "",
    };
  });
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      
      {/* Header */}
      <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
        <div className="container h-14 flex items-center">
        <div className="flex flex-col min-h-screen scroll-smooth">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
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
      <main className="min-h-[calc(100vh-57px-97px)] flex">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mt-6 mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <Link href="/projects">Projetos</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Título do Blog */}
          <h1 className="text-2xl font-bold mb-6">Blog</h1>

          {/* Lista de Posts */}
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex justify-between items-center"
                >
                  <span className="text-sm font-medium group-hover:underline">
                    {post.title}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
