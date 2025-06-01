import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'content/lab'));
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export default async function LabPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/lab', `${params.slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');

    const { content, frontmatter } = await compileMDX({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    return (
      <div className="prose prose-invert max-w-3xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
        <p className="text-gray-400 text-sm mb-8">{frontmatter.date}</p>
        {content}
      </div>
    );
  } catch (error) {
    notFound();
  }
}
