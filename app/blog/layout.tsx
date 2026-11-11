import Link from "next/link";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="blog-shell">
      <header className="site-header blog-header">
        <Link className="wordmark" href="/" aria-label="SmallVec home">
          <span className="wordmark-icon" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>smallvec</span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          <div className="header-nav-links">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
        <a className="nav-sponsor" href="https://github.com/sponsors/smallvec" target="_blank" rel="noreferrer">
          <span className="nav-sponsor-full">Sponsor SmallVec</span>
          <span className="nav-sponsor-short">Sponsor</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
            <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </a>
      </header>
      {children}
      <footer className="blog-footer section-wrap">
        <span>SmallVec · Notes from the project</span>
        <Link href="/">Back to SmallVec <span aria-hidden="true">↗</span></Link>
      </footer>
    </div>
  );
}
