import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'content/engineering'));
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ''),
    }));
}

export default async function EngineeringPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content/engineering', `${params.slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return (
      <div className="prose prose-invert max-w-3xl mx-auto p-6">
        <MDXRemote source={fileContent} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
