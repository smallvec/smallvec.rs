import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Blog | SmallVec",
  description: "Notes and updates from the SmallVec project.",
  alternates: { canonical: "/blog" },
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="blog-main section-wrap">
      <div className="blog-intro">
        <p className="eyebrow">Notes from the project</p>
        <h1 className="blog-title">The SmallVec blog</h1>
        <p className="blog-description">Short updates, ideas, and notes from the people maintaining SmallVec.</p>
      </div>

      <div className="blog-list" aria-label="Blog posts">
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <div className="blog-card-copy">
              <time dateTime={post.date}>{dateFormatter.format(new Date(`${post.date}T00:00:00Z`))}</time>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.description}</p>
            </div>
            <Link className="blog-card-link" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
              Read post <span aria-hidden="true">↗</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
