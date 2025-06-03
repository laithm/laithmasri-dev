import { loadMdxPost } from "@/lib/loadMdxPost";

import type { Metadata, ResolvingMetadata } from "next";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params; // destructured to avoid sync API warning, now to do it for the rest (insert crying emoji here)
  const { content, frontmatter } = await loadMdxPost("roblox", slug);

  return (
    <div className="prose prose-invert max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
      <p className="text-gray-400 text-sm mb-8">{frontmatter.date}</p>
      {content}
    </div>
  );
}

export async function generateStaticParams() {
  const { listMdxSlugs } = await import("@/lib/listMdxPosts");
  const slugs = await listMdxSlugs("roblox");
  return slugs.map((slug) => ({ slug }));
}
