import Link from "next/link";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="blog-shell">
      <header className="site-header blog-header">
        <Link className="wordmark" href="/" aria-label="SmallVec home">
          <span className="wordmark-icon" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>smallvec</span>
        </Link>
        <nav className="blog-nav" aria-label="Blog navigation">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>
      {children}
      <footer className="blog-footer section-wrap">
        <span>SmallVec · Notes from the project</span>
        <Link href="/">Back to SmallVec <span aria-hidden="true">↗</span></Link>
      </footer>
    </div>
  );
}
