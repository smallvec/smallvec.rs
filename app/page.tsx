const sponsorUrl = "https://github.com/sponsors/alejandro-vaz";

const smallvecPeople = [
  {
    handle: "alejandro-vaz",
    name: "Alejandro",
    role: "Maintainer",
    initials: "AV",
    href: sponsorUrl,
    action: "Sponsor on GitHub",
  },
  {
    handle: "jdm",
    name: "Josh Bowman-Matthews",
    role: "Servo project supervisor",
    initials: "JB",
    href: "https://github.com/sponsors/jdm",
    action: "Sponsor on GitHub",
  },
  {
    handle: "mbrubeck",
    name: "Matt Brubeck",
    role: "Former maintainer",
    initials: "MB",
    href: "https://github.com/mbrubeck",
    action: "View GitHub profile",
  },
  {
    handle: "fereidani",
    name: "Khashayar Fereidani",
    role: "Contributor · Security expert",
    initials: "KF",
    href: "https://github.com/sponsors/fereidani",
    action: "Sponsor on GitHub",
  },
  {
    handle: "TDecking",
    name: "Tobias Decking",
    role: "Contributor",
    initials: "TD",
    href: "https://github.com/TDecking",
    action: "View GitHub profile",
  },
  {
    handle: "bolshoytoster",
    name: "bolshoytoster",
    role: "Contributor · Issue triage",
    initials: "BT",
    href: "https://github.com/bolshoytoster",
    action: "View GitHub profile",
  },
  {
    handle: "pedrodesu",
    name: "Pedro Nobre",
    role: "Contributor",
    initials: "PN",
    href: "https://github.com/pedrodesu",
    action: "View GitHub profile",
  },
  {
    handle: "GauravPawar101",
    name: "Gaurav Pawar",
    role: "Contributor · Issue triage",
    initials: "GP",
    href: "https://github.com/GauravPawar101",
    action: "View GitHub profile",
  },
];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function GitHubMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.2 3.26.92.1-.71.4-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.62 10.62 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.09 5.49.4.35.76 1.02.76 2.06v3.07c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="SmallVec home">
          <span className="wordmark-icon" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>smallvec</span>
        </a>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#story">The story</a>
          <a href="#work">Recent work</a>
          <a href="#contributors">Contributors</a>
          <a href="https://docs.rs/smallvec/latest/smallvec/" target="_blank" rel="noreferrer">
            Docs <ArrowUpRight />
          </a>
          <a className="nav-sponsor" href={sponsorUrl} target="_blank" rel="noreferrer">
            Sponsor SmallVec <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Open source, maintained in the open</p>
            <h1>SmallVec runs through Rust. <em>Help keep it moving.</em></h1>
            <p className="hero-description">
              It powers the compiler and more than 150,000 crates. Keeping a foundation
              this widely used secure, current, and reliable takes steady work—and that
              work deserves support.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={sponsorUrl} target="_blank" rel="noreferrer">
                <GitHubMark /> Fund SmallVec on GitHub <ArrowUpRight />
              </a>
              <a className="text-link" href="#work">See the work in progress <span aria-hidden="true">↓</span></a>
            </div>
            <p className="goal-note"><span>Next milestone</span> $249 in monthly sponsorship</p>
          </div>

          <div className="hero-art" role="img" aria-label="Illustration of SmallVec keeping values inline before growing onto the heap">
            <div className="art-topline">
              <span>SMALLVEC&lt;[U8; 4]&gt;</span>
              <span className="art-live"><i /> INLINE FIRST</span>
            </div>
            <div className="memory-graphic">
              <div className="memory-label">STACK <span>01—04</span></div>
              <div className="memory-cells" aria-label="Four values stored inline">
                <span className="memory-cell filled">0A</span>
                <span className="memory-cell filled">1F</span>
                <span className="memory-cell filled">2C</span>
                <span className="memory-cell filled">3B</span>
              </div>
              <div className="inline-caption"><span className="caption-line" /> kept close, no heap allocation</div>
              <div className="growth-line"><span>capacity reached</span><i /><span>grows when needed</span></div>
              <div className="heap-box">
                <div className="memory-label">HEAP <span>ON DEMAND</span></div>
                <div className="heap-content">
                  <span className="heap-cell">4D</span>
                  <span className="heap-cell">5E</span>
                  <span className="heap-copy">extra values<br />live here</span>
                  <svg className="heap-spark" aria-hidden="true" viewBox="0 0 84 60" fill="none">
                    <path d="M2 49h20l10-35 12 27 10-19 9 17h19" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M76 34l6 5-6 5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="art-footer"><span>SMALL FOOTPRINT</span><span className="art-star">✳</span><span>ROOM TO GROW</span></div>
          </div>
        </section>

        <section className="stats-strip" aria-label="SmallVec usage statistics">
          <div className="stats-inner">
            <div className="stat-item"><strong>1.3<span>B</span></strong><span>downloads overall</span></div>
            <div className="stat-item"><strong>150<span>k</span></strong><span>dependent crates</span></div>
            <div className="stat-item"><strong>40<span>%</span></strong><span>of the Rust ecosystem</span></div>
            <div className="stat-item"><strong>330<span>M</span></strong><span>downloads in 90 days</span></div>
            <div className="compiler-note"><span className="compiler-mark">R</span><span>Used inside<br /><strong>the Rust compiler</strong></span></div>
          </div>
        </section>

        <section className="story-section section-wrap" id="story">
          <div className="section-heading">
            <p className="eyebrow">A crate this important needs a plan</p>
            <h2>Essential infrastructure<br /><em>shouldn’t depend on spare time.</em></h2>
          </div>
          <div className="story-content">
            <div className="story-timeline">
              <span className="timeline-rule" />
              <span className="timeline-dot" />
              <div><strong>~10 months</strong><span>without regular maintenance</span></div>
            </div>
            <div className="story-text">
              <p>
                Matt maintained SmallVec before I took over. When he no longer had
                enough time to continue, there was no funded maintenance plan or backup
                maintainer to keep the work going. Maintenance slowed for around ten
                months. During that gap, the backlog grew, security fixes needed
                attention, and SmallVec’s API fell behind <code>Vec</code> in completeness.
              </p>
              <p>
                I took over two months ago. I’m working through the backlog and building
                a healthier foundation for SmallVec’s next chapter. Now I’m looking for
                a way to make that work sustainable long term.
              </p>
              <a className="inline-link" href="https://github.com/servo/rust-smallvec" target="_blank" rel="noreferrer">
                Follow the repository <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap work-inner">
            <div className="work-intro">
              <p className="eyebrow">Since taking over</p>
              <h2>Momentum is back.<br /><em>Let’s make it last.</em></h2>
              <p>Two months of hands-on maintenance—and a lot of work still ahead.</p>
            </div>
            <div className="work-details">
              <div className="work-grid">
                <article className="work-card"><strong>40+</strong><h3>Contributors</h3><p>People brought into SmallVec’s ongoing development.</p></article>
                <article className="work-card"><strong>&lt;24h</strong><h3>Response time</h3><p>Keeping questions and reviews moving.</p></article>
                <article className="work-card"><strong>150+</strong><h3>Issues triaged</h3><p>A backlog more than two years old cleared.</p></article>
                <article className="work-card"><strong>~115</strong><h3>PRs reviewed</h3><p>Contributions from across the community.</p></article>
                <article className="work-card"><strong>~60</strong><h3>PRs authored &amp; merged</h3><p>Performance, CI, and the v2 architecture.</p></article>
                <article className="work-card"><strong>CI + fuzzer</strong><h3>New test infrastructure</h3><p>More coverage and stronger checks.</p></article>
              </div>
              <p className="release-note"><span className="release-icon">✓</span><span><strong>Security fixes shipped.</strong> Fixed several vulnerabilities and added a new fuzzer alongside new CI.</span></p>
              <p className="release-note"><span className="release-icon">↗</span><span><strong>Releases back on track.</strong> Managed v1.16 and the v2 release series from alpha.13, with around 75M downloads across those releases.</span></p>
            </div>
          </div>
        </section>

        <section className="contributors-section section-wrap" id="contributors">
          <div className="contributors-heading">
            <div>
              <p className="eyebrow">The people involved</p>
              <h2>Keeping SmallVec moving</h2>
            </div>
            <p>Meet the maintainer and contributors advancing SmallVec. Sponsor them where GitHub Sponsors is available, or visit their profiles.</p>
          </div>
          <div className="contributors-grid">
            {smallvecPeople.map((contributor) => (
              <article className="contributor-card" key={contributor.handle}>
                <div className="contributor-identity">
                  <span className="contributor-avatar" aria-hidden="true">{contributor.initials}</span>
                  <span className="contributor-name-group">
                    <strong>{contributor.name}</strong>
                    <span className="contributor-role">{contributor.role}</span>
                    <span className="contributor-handle">@{contributor.handle}</span>
                  </span>
                </div>
                <a className="contributor-link" href={contributor.href} target="_blank" rel="noreferrer">
                  {contributor.action} <ArrowUpRight />
                </a>
              </article>
            ))}
          </div>
          <p className="contributors-source">The five v2 contributors are listed in the <a href="https://github.com/servo/rust-smallvec#v2-core-contributors" target="_blank" rel="noreferrer">SmallVec repository README <ArrowUpRight /></a>.</p>
        </section>

        <section className="funding-section section-wrap" id="funding">
          <div className="funding-card">
            <div className="funding-copy">
              <p className="eyebrow"><span className="status-dot" /> Help keep SmallVec healthy</p>
              <h2>Make room for<br /><em>the work behind the crate.</em></h2>
              <p>Recurring support helps make issue triage, reviews, testing, and releases a dependable part of the job—not just the time left over.</p>
            </div>
            <div className="funding-ask">
              <span className="ask-label">NEXT MONTHLY GOAL</span>
              <div className="ask-amount">$249<span>/ month</span></div>
              <div className="ask-rule" />
              <p>Every sponsorship helps move the goal forward. Choose an amount that works for you.</p>
              <a className="button button-light" href={sponsorUrl} target="_blank" rel="noreferrer">
                <GitHubMark /> Sponsor on GitHub <ArrowUpRight />
              </a>
              <span className="github-handle">Supporting <strong>@alejandro-vaz</strong></span>
            </div>
            <span className="funding-decoration" aria-hidden="true">✳</span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#top" aria-label="SmallVec home">
          <span className="wordmark-icon" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>smallvec</span>
        </a>
        <p>SmallVec is open source. <a href="https://github.com/servo/rust-smallvec" target="_blank" rel="noreferrer">Explore the code <ArrowUpRight /></a></p>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
