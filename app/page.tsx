import Image from "next/image";
import Link from "next/link";

const alejandroSponsorUrl = "https://github.com/sponsors/alejandro-vaz";
const smallvecPeople = [
  {
    handle: "alejandro-vaz",
    name: "Alejandro Vaz",
    role: "Maintainer",
    initials: "AV",
    href: alejandroSponsorUrl,
    action: "Support SmallVec maintenance",
    group: "leadership",
    responsibility: "maintainer",
  },
  {
    handle: "jdm",
    name: "Josh Bowman-Matthews",
    role: "Servo project supervisor",
    initials: "JB",
    href: "https://github.com/sponsors/jdm",
    action: "Sponsor on GitHub",
    group: "leadership",
    responsibility: "project-supervisor",
  },
  {
    handle: "mbrubeck",
    name: "Matt Brubeck",
    role: "Former maintainer",
    initials: "MB",
    href: "https://github.com/mbrubeck",
    action: "View GitHub profile",
    group: "leadership",
    responsibility: "former-maintainer",
  },
  {
    handle: "fereidani",
    name: "Khashayar Fereidani",
    role: "Contributor · Security expert",
    initials: "KF",
    href: "https://github.com/sponsors/fereidani",
    action: "Sponsor on GitHub",
    group: "contributors",
    responsibility: "security",
  },
  {
    handle: "GauravPawar101",
    name: "Gaurav Pawar",
    role: "Contributor · Issue triage",
    initials: "GP",
    href: "https://github.com/sponsors/GauravPawar101",
    action: "Sponsor on GitHub",
    group: "contributors",
    responsibility: "triage",
  },
  {
    handle: "TDecking",
    name: "Tobias Decking",
    role: "Contributor",
    initials: "TD",
    href: "https://github.com/TDecking",
    action: "View GitHub profile",
    group: "contributors",
    responsibility: "contributor",
  },
  {
    handle: "pedrodesu",
    name: "Pedro Nobre",
    role: "Contributor",
    initials: "PN",
    href: "https://github.com/pedrodesu",
    action: "View GitHub profile",
    group: "contributors",
    responsibility: "contributor",
  },
  {
    handle: "Divyansh089",
    name: "Divyansh Patel",
    role: "Member",
    initials: "DP",
    href: "https://github.com/Divyansh089",
    action: "View GitHub profile",
    group: "contributors",
    responsibility: "contributor",
  },
];

const leadershipPeople = smallvecPeople.filter((person) => person.group === "leadership");
const contributorPeople = smallvecPeople.filter((person) => person.group === "contributors");

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
        <Link className="wordmark" href="/" aria-label="SmallVec home">
          <span className="wordmark-icon" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>smallvec</span>
        </Link>

        <a className="nav-sponsor" href={alejandroSponsorUrl} target="_blank" rel="noreferrer">
          <span className="nav-sponsor-full">Support SmallVec maintenance</span>
          <span className="nav-sponsor-short">Support</span>
          <ArrowUpRight />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Open source, maintained in the open</p>
            <h1>Help bring a second maintainer to <em>SmallVec.</em></h1>
            <p className="hero-description">
              SmallVec is used inside the Rust compiler and depended on by more than
              160,000 crates. The first $250 monthly goal is reached. The next $500
              goal would help afford a second maintainer. One-time sponsorships are
              appreciated too and help sustain this work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={alejandroSponsorUrl} target="_blank" rel="noreferrer">
                <GitHubMark /> Support SmallVec maintenance <ArrowUpRight />
              </a>
            </div>
            <p className="goal-note"><span>Next monthly goal</span> $500 to afford a second maintainer</p>
          </div>

          <figure className="hero-quote">
            <span className="hero-quote-mark" aria-hidden="true">“</span>
            <p className="hero-quote-label">From the Rust Foundation funding team</p>
            <blockquote>
              <p>
                SmallVec is amongst the 30 most downloaded crates on <a href="https://crates.io/" target="_blank" rel="noreferrer">crates.io</a>. It implements a very useful data structure, which we use in many places in the Rust compiler to improve its performance.
              </p>
              <p>
                Due to its low-level nature, the crate contains unsafe code, which needs to be properly maintained and reviewed. It is also important to promptly resolve any potential security vulnerabilities found in such code.
              </p>
            </blockquote>
            <figcaption>
              <cite>Jakub Beránek</cite>
              <span>Funding team, Rust Foundation</span>
            </figcaption>
          </figure>
        </section>

        <section className="stats-strip" id="impact" aria-label="SmallVec usage statistics">
          <div className="stats-inner">
            <div className="stat-item"><strong>1.5<span>B</span></strong><span>downloads overall</span></div>
            <div className="stat-item"><strong>160<span>k</span></strong><span>dependent crates</span></div>
            <div className="stat-item"><strong>40<span>%</span></strong><span>of the Rust ecosystem</span></div>
            <div className="stat-item"><strong>410<span>M</span></strong><span>downloads in the last 90 days</span></div>
          </div>
          <p className="stats-source">
            Figures as of November 2026. Download counts: <a href="https://crates.io/crates/smallvec" target="_blank" rel="noreferrer">crates.io</a>.
            Dependent crate count and ecosystem share: <a href="https://lib.rs/crates/smallvec" target="_blank" rel="noreferrer">lib.rs</a>.
          </p>
        </section>

        <section className="testimonial-section section-wrap" aria-labelledby="testimonial-title">
          <div className="testimonial-heading">
            <p className="eyebrow">Testimonials</p>
            <h2 id="testimonial-title">Why SmallVec matters.</h2>
          </div>
          <figure className="hero-quote testimonial-quote">
            <p className="hero-quote-label">From the Rust Foundation funding team</p>
            <blockquote>
              <p>
                SmallVec is amongst the 30 most downloaded crates on <a href="https://crates.io/" target="_blank" rel="noreferrer">crates.io</a>. It implements a very useful data structure, which we use in many places in the Rust compiler to improve its performance.
              </p>
              <p>
                Due to its low-level nature, the crate contains unsafe code, which needs to be properly maintained and reviewed. It is also important to promptly resolve any potential security vulnerabilities found in such code.
              </p>
            </blockquote>
            <figcaption>
              <cite>Jakub Beránek</cite>
              <span>Funding team, Rust Foundation</span>
            </figcaption>
          </figure>
        </section>

        <section className="use-section use-section-highlight" id="uses" aria-labelledby="uses-title">
          <div className="section-wrap use-inner">
            <div className="use-heading">
              <div>
                <p className="eyebrow">Across the Rust ecosystem</p>
                <h2 id="uses-title">Where SmallVec is used</h2>
              </div>
              <p>SmallVec is used directly in major Rust software and reaches many more projects through shared libraries and framework dependencies.</p>
            </div>
            <div className="use-grid">
              <article className="use-card">
                <div className="use-logo-row" aria-hidden="true">
                  <Image src="/rust.svg" alt="" width={42} height={42} />
                </div>
                <div className="use-card-copy">
                  <span className="use-category">Compiler</span>
                  <h3>Rust compiler</h3>
                  <p><code>rustc_arena</code> uses SmallVec to collect values before storing them in the compiler’s arena.</p>
                  <a className="use-link" href="https://github.com/rust-lang/rust/blob/main/compiler/rustc_arena/src/lib.rs" target="_blank" rel="noreferrer">
                    View Rust source <ArrowUpRight />
                  </a>
                </div>
              </article>
              <article className="use-card">
                <div className="use-logo-row use-logo-row-pair" aria-hidden="true">
                  <Image src="/android.svg" alt="" width={28} height={28} />
                  <Image src="/chromium.svg" alt="" width={28} height={28} />
                </div>
                <div className="use-card-copy">
                  <span className="use-category">Platforms and browsers</span>
                  <h3>Android &amp; Chromium</h3>
                  <p>Android uses SmallVec through libquiche; Chromium’s Rust text shaping code uses it in harfrust.</p>
                  <div className="use-links">
                    <a className="use-link" href="https://android.googlesource.com/platform/external/rust/crates/smallvec/+/8ae8fd457012fe96106f1d6628321e7ca0e3de7d" target="_blank" rel="noreferrer">
                      Android source <ArrowUpRight />
                    </a>
                    <a className="use-link" href="https://chromium.googlesource.com/chromium/src/+/fb4e6cbe1ec82809d230820432f8770e7cad50bb/third_party/rust/chromium_crates_io/vendor/harfrust-v0_14/src/language.rs" target="_blank" rel="noreferrer">
                      Chromium source <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
              <article className="use-card">
                <div className="use-logo-row use-logo-row-hyper" aria-hidden="true">
                  <Image src="/rust.svg" alt="" width={36} height={36} />
                  <span>hyper</span>
                </div>
                <div className="use-card-copy">
                  <span className="use-category">Rust web servers</span>
                  <h3>Across the web stack</h3>
                  <p>SmallVec is used by most of Rust’s web-server ecosystem. Hyper depends on it directly and powers many of the servers and frameworks behind Rust web apps.</p>
                  <div className="use-links">
                    <a className="use-link" href="https://crates.io/crates/hyper" target="_blank" rel="noreferrer">
                      Hyper crate <ArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="story-section section-wrap" id="story">
          <div className="section-heading">
            <p className="eyebrow">How the maintenance gap began</p>
            <h2>One maintainer ran out of time.<br /><em>SmallVec went dark.</em></h2>
          </div>
          <div className="story-content">
            <div className="story-timeline">
              <span className="timeline-rule" />
              <span className="timeline-dot" />
              <div><strong>Nov 2025–Aug 2026</strong><span>the repository was nearly inactive</span></div>
            </div>
            <div className="story-text">
              <p>
                Matt had less time to maintain SmallVec starting around 2023. In
                September 2025, he <a href="https://github.com/servo/rust-smallvec/issues/395" target="_blank" rel="noreferrer">asked for another active maintainer</a>,
                explaining that he had not been able to give the crate the time it
                deserved and that some pull requests were long delayed. He planned to
                keep maintaining it until he could hand it off. From November 2025 to
                August 2026, the repository was nearly inactive. There was no funded
                maintenance plan or backup maintainer to take over. The backlog grew,
                security fixes needed attention, and SmallVec’s API fell behind <code>Vec</code>
                in completeness.
              </p>
              <p>
                I’m Alejandro, SmallVec’s current maintainer. I took over in August
                2026, after months of near-total inactivity. Since then, issues have
                been triaged, PRs reviewed, security fixes shipped, and releases
                managed. There is still a lot to do. SmallVec’s reach did not come with
                a funded plan or a backup maintainer. I want to make sure the work
                doesn’t go dark again.
              </p>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap work-inner">
            <div className="work-intro">
              <p className="eyebrow">Since taking over</p>
              <h2>The work is moving.<br /><em>Let’s keep it moving.</em></h2>
              <p>In two months, the backlog was cleared, releases moved forward, and testing grew stronger. Here’s what that work looks like.</p>
            </div>
            <div className="work-details">
              <div className="work-grid">
                <article className="work-card"><strong>40+</strong><h3>Contributors</h3><p>People now contributing to SmallVec’s ongoing development.</p></article>
                <article className="work-card"><strong>&lt;48h</strong><h3>Response time</h3><p>Keeping questions and reviews moving.</p></article>
                <article className="work-card"><strong>~200</strong><h3>Issues triaged</h3><p>Cleared a backlog that had grown for more than two years.</p></article>
                <article className="work-card"><strong>~200</strong><h3>PRs merged</h3><p>Total since taking over.</p></article>
                <article className="work-card"><strong>11</strong><h3>Releases</h3><p>Published since taking over.</p></article>
                <article className="work-card"><strong>CI + fuzzer</strong><h3>New test infrastructure</h3><p>More coverage and stronger checks.</p></article>
              </div>
              <p className="release-note"><span className="release-icon">✓</span><span><strong>Security fixes shipped.</strong> Several vulnerabilities fixed, with a new fuzzer and CI adding stronger checks.</span></p>
              <p className="release-note"><span className="release-icon">↗</span><span><strong>Releases moving forward.</strong> Managed v1.16 and the v2 release series from alpha.13, with around 75M downloads across those releases.</span></p>
              <p className="work-source">
                Repository and maintenance figures as of November 2026, from the <a href="https://github.com/servo/rust-smallvec" target="_blank" rel="noreferrer">SmallVec GitHub repository</a>. Release download counts are from <a href="https://crates.io/crates/smallvec" target="_blank" rel="noreferrer">crates.io</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="goals-section" id="goals" aria-labelledby="goals-title">
          <div className="section-wrap goals-inner">
            <div className="goals-heading">
              <p className="eyebrow">Monthly funding goals</p>
              <h2 id="goals-title">What each goal <em>makes possible.</em></h2>
            </div>
            <ol className="goals-timeline" aria-label="SmallVec monthly sponsorship milestones">
              <li className="goal-step goal-step-complete">
                <span className="goal-marker" aria-hidden="true" />
                <span className="goal-stage">Goal reached</span>
                <h3 className="goal-amount">$250<span>/ month</span></h3>
                <p>10 hours of maintenance work each week.</p>
              </li>
              <li className="goal-step goal-step-current">
                <span className="goal-marker" aria-hidden="true" />
                <span className="goal-stage">Current goal</span>
                <h3 className="goal-amount">$500<span>/ month</span></h3>
                <p>Afford a second maintainer.</p>
              </li>
              <li className="goal-step">
                <span className="goal-marker" aria-hidden="true" />
                <span className="goal-stage">Next goal</span>
                <h3 className="goal-amount">$1,000<span>/ month</span></h3>
                <p>Improve work conditions for both maintainers.</p>
              </li>
              <li className="goal-step">
                <span className="goal-marker" aria-hidden="true" />
                <span className="goal-stage">Future goal</span>
                <h3 className="goal-amount">$1,750<span>/ month</span></h3>
                <p>Start a security vulnerability bug bounty program.</p>
              </li>
              <li className="goal-step">
                <span className="goal-marker" aria-hidden="true" />
                <span className="goal-stage">Future goal</span>
                <h3 className="goal-amount">$3,000<span>/ month</span></h3>
                <p>Start a feature bounty program.</p>
              </li>
              <li className="goal-step">
                <span className="goal-marker" aria-hidden="true" />
                <span className="goal-stage">Future goal</span>
                <h3 className="goal-amount">$5,000<span>/ month</span></h3>
                <p>Even better maintenance, up to 15 hours per week for each maintainer.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="contributors-section section-wrap" id="contributors">
          <div className="contributors-heading">
            <div>
              <p className="eyebrow">Individual sponsorships</p>
              <h2>Support the people behind SmallVec</h2>
            </div>
            <p>Use a “Sponsor on GitHub” link to sponsor that person directly; profile links simply open their GitHub profile. These individual sponsorships are separate from the SmallVec maintenance goal. To fund that work, <a href="#funding">support the SmallVec maintenance goal</a>.</p>
          </div>
          <div className="contributor-groups">
            <section className="contributor-group" aria-labelledby="leadership-title">
              <div className="contributor-group-heading">
                <h3 id="leadership-title">Maintainers &amp; project leadership</h3>
                <p>Current maintainer, Servo project supervisor, and former maintainer.</p>
              </div>
              <div className="contributors-grid contributors-grid-leadership">
                {leadershipPeople.map((contributor) => (
                  <article className={`contributor-card contributor-card-${contributor.responsibility}`} key={contributor.handle}>
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
            </section>
            <section className="contributor-group" aria-labelledby="members-title">
              <div className="contributor-group-heading">
                <h3 id="members-title">Members</h3>
                <p>People contributing to SmallVec’s development and maintenance.</p>
              </div>
              <div className="contributors-grid contributors-grid-community">
                {contributorPeople.map((contributor) => (
                  <article className={`contributor-card contributor-card-${contributor.responsibility}`} key={contributor.handle}>
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
            </section>
          </div>
          <p className="contributors-source">See the v2 core contributor listing in the <a href="https://github.com/servo/rust-smallvec#v2-core-contributors" target="_blank" rel="noreferrer">SmallVec repository README <ArrowUpRight /></a>.</p>
        </section>

        <section className="project-sponsors-section section-wrap" aria-labelledby="project-sponsors-title">
          <div className="project-sponsors-heading">
            <p className="eyebrow">Current sponsors</p>
            <h2 id="project-sponsors-title">Thank you for supporting SmallVec.</h2>
          </div>
          <div className="project-sponsors-grid">
            <a className="project-sponsor-card" href="https://servo.org/" target="_blank" rel="noreferrer">
              <div className="project-sponsor-brand">
                <Image src="/servo-logo.svg" alt="Servo" width={284} height={63} />
              </div>
              <span>Visit website <ArrowUpRight /></span>
            </a>
            <a className="project-sponsor-card" href="https://thanks.dev/" target="_blank" rel="noreferrer">
              <div className="project-sponsor-brand project-sponsor-brand-thanks">
                <Image src="/thanks-dev-icon.png" alt="" width={72} height={72} />
                <strong>thanks.dev</strong>
              </div>
              <span>Visit website <ArrowUpRight /></span>
            </a>
            <div className="project-sponsor-card">
              <div className="project-sponsor-brand project-sponsor-brand-private">
                <strong>Private sponsor</strong>
              </div>
              <span>Supporting SmallVec</span>
            </div>
          </div>
        </section>

        <section className="funding-section section-wrap" id="funding">
          <div className="funding-card">
            <div className="funding-copy">
              <p className="eyebrow"><span className="status-dot" /> Help keep SmallVec healthy</p>
              <h2>Make the work behind<br /><em>SmallVec sustainable.</em></h2>
              <p>Monthly support gives the work that keeps a widely used crate dependable—issue triage, reviews, testing, security fixes, and releases—a planned place in ongoing maintenance. One-time sponsorships are appreciated too.</p>
            </div>
            <div className="funding-ask">
              <span className="ask-label">MONTHLY GOAL</span>
              <div className="ask-amount">$500<span>/ month</span></div>
              <div className="ask-rule" />
              <div className="sponsor-benefits">
                <h3>Sponsor benefits</h3>
                <ul>
                  <li>Logo on the SmallVec website and crates.io README</li>
                  <li>Priority support</li>
                  <li>Monthly email updates</li>
                </ul>
              </div>
              <p>The first $250 monthly goal is reached. This next goal would help afford a second maintainer.</p>
              <a className="button button-light" href={alejandroSponsorUrl} target="_blank" rel="noreferrer">
                <GitHubMark /> Support SmallVec maintenance <ArrowUpRight />
              </a>
              <span className="github-handle">Supporting <strong>SmallVec maintenance</strong></span>
            </div>
            <span className="funding-decoration" aria-hidden="true">✳</span>
          </div>
        </section>

        <section className="faq-section section-wrap" id="faq" aria-labelledby="faq-title">
          <div className="faq-inner">
            <p className="eyebrow">Before you sponsor</p>
            <h2 id="faq-title">Questions, answered</h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Who receives the money?</summary>
                <p>Sponsorship is processed through Alejandro’s GitHub Sponsors page and supports the crate’s ongoing maintenance. Alejandro leads this work as SmallVec’s maintainer.</p>
              </details>
              <details className="faq-item">
                <summary>Can I give once?</summary>
                <p>Yes—one-time sponsorships are appreciated. Choose the one-time option on GitHub Sponsors; monthly support contributes to the current $500 goal to help afford a second maintainer.</p>
              </details>
              <details className="faq-item">
                <summary>What am I funding?</summary>
                <p>Issue triage, reviews, testing, security fixes, and releases. The first $250 monthly goal funds ten hours of maintenance each week; the current $500 goal would help afford a second maintainer.</p>
              </details>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer section-wrap">
        <Link className="wordmark" href="/" aria-label="SmallVec home">
          <span className="wordmark-icon" aria-hidden="true"><span /><span /><span /><span /></span>
          <span>smallvec</span>
        </Link>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
