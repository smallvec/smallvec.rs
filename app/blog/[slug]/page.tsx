import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts } from "../../../lib/blog";
import { Markdown } from "../../../lib/markdown";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeZone: "UTC",
});

export function generateStaticParams() {
  return getBlogPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return post
    ? {
        title: `${post.title} | SmallVec Blog`,
        description: post.description,
        alternates: { canonical: `/blog/${post.slug}` },
      }
    : { title: "Post not found | SmallVec Blog" };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="blog-main blog-post-main section-wrap">
      <article className="blog-post">
        <header className="blog-post-header">
          <Link className="blog-back-link" href="/blog">← All posts</Link>
          <time dateTime={post.date}>{dateFormatter.format(new Date(`${post.date}T00:00:00Z`))}</time>
          <h1 className="blog-post-title">{post.title}</h1>
          <p>{post.description}</p>
        </header>
        <div className="markdown-body">
          <Markdown source={post.content} />
        </div>
      </article>
    </main>
  );
}
