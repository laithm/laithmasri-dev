// lib/listMdxPosts.ts
import fs from "fs/promises";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export type Frontmatter = {
  title: string;
  date: string;
};

export async function listMdxPosts(section: string) {
  const folderPath = path.join(process.cwd(), "content", section);
  const files = await fs.readdir(folderPath);

  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(folderPath, file), "utf8");
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

  return posts;
}
export async function listMdxSlugs(section: string): Promise<string[]> {
  const folderPath = path.join(process.cwd(), "content", section);
  const files = await fs.readdir(folderPath);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
