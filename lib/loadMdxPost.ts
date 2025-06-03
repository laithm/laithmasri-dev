import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { MDXComponents } from "@/components/mdx-components"; // imports MDX component map

// Defines the frontmatter shape
export interface Frontmatter {
  title: string;
  date: string;
}

// Loads MDX file with registered MDX components
// file: lib/LoadMdxPost.ts
export async function loadMdxPost(folder: string, slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content", folder, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, "utf8");

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: fileContent,
      options: {
        parseFrontmatter: true,
      },
      components: MDXComponents, // enable embedded React components in .mdx
    });

    return { content, frontmatter };
  } catch (err) {
    notFound();
  }
}
