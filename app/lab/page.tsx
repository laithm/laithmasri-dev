import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";

type Frontmatter = {
  title: string;
  date: string;
};

export default async function LabIndex() {
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
    <div className="prose prose-invert max-w-3xl mx-auto p-10">
      <h1 className="text-4xl font-bold mb-6">Lab Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/lab/${post.slug}`}>
              <strong>{post.title}</strong> <br />
              <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
