import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// ✅ Define the frontmatter shape
export interface Frontmatter {
  title: string;
  date: string;
}

// ✅ Load MDX file with error handling
export async function loadMdxPost(folder: string, slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content', folder, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (err) {
    notFound();
  }
}
