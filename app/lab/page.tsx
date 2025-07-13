import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";

type Frontmatter = {
  title: string;
  date: string;
};

export default async function LabPage() {
  const folder = "lab";
  const files = await fs.readdir(path.join(process.cwd(), "content", folder));

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(process.cwd(), "content", folder, file);
        const raw = await fs.readFile(filePath, "utf8");
        const { frontmatter } = await compileMDX<Frontmatter>({
          source: raw,
          options: { parseFrontmatter: true },
        });

        return {
          slug: file.replace(/\.mdx$/, ""),
          ...frontmatter,
        };
      })
  );

  return (
  <div className="relative min-h-screen bg-black text-white px-6 py-20">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 opacity-70" />

    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-extrabold mb-10 text-white drop-shadow-lg">Lab Posts</h1>

      <ul className="space-y-8">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border border-neutral-800 hover:border-neutral-600 transition-all rounded-xl p-6 bg-neutral-900/70 backdrop-blur-md shadow-md"
          >
            <Link href={`/lab/${post.slug}`}>
              <div className="group cursor-pointer">
                <h2 className="text-2xl font-semibold group-hover:underline decoration-dashed underline-offset-4">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-400 mt-1">{post.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}

