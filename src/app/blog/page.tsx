import LenisWrapper from "@/components/LenisWrapper";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Link } from "next-view-transitions";

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
    <LenisWrapper>
      <div className="flex flex-col min-h-screen">
        {/* Header */}
       
        {/* Main Content */}
        <main className="flex-1 mt-16"> {/* Adiciona margem superior para ajustar o espaço do header */}
          <div className="container mx-auto max-w-3xl px-4">
           
            {/* Título do Blog */}
            <h1 className="text-2xl font-bold mb-8">Blog</h1> {/* Ajuste da margem abaixo do título */}

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
    </LenisWrapper>
  );
}
