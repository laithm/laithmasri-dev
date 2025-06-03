import { loadMdxPost } from "@/lib/loadMdxPost";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { content, frontmatter } = await loadMdxPost("research", slug);

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
  const slugs = await listMdxSlugs("research");
  return slugs.map((slug) => ({ slug }));
}
