import { useEffect, useMemo, useState } from 'react'
import { portfolio } from './data/portfolio'

type SectionId =
  | 'about'
  | 'research'
  | 'publications'
  | 'projects'
  | 'experience'
  | 'education'
  | 'skills'
  | 'contact'

const Arrow = () => <span aria-hidden="true">↗</span>

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      className="text-link"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      <span>{children}</span>
      <Arrow />
    </a>
  )
}

function SectionHeading({
  title,
  eyebrow,
}: {
  title: string
  eyebrow: string
}) {
  return (
    <header className="section-heading reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </header>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const { profile } = portfolio

  const sections = useMemo(
    () =>
      [
        { id: 'about' as SectionId, label: 'About', show: true },
        { id: 'research' as SectionId, label: 'Research', show: portfolio.researchProjects.length > 0 },
        { id: 'publications' as SectionId, label: 'Publications', show: portfolio.publications.length > 0 },
        { id: 'projects' as SectionId, label: 'Projects', show: portfolio.projects.length > 0 },
        {
          id: 'experience' as SectionId,
          label: 'Experience',
          show: portfolio.experience.length > 0,
        },
        { id: 'education' as SectionId, label: 'Education', show: portfolio.education.length > 0 },
        { id: 'skills' as SectionId, label: 'Skills', show: portfolio.skills.length > 0 },
        { id: 'contact' as SectionId, label: 'Contact', show: true },
      ].filter((section) => section.show),
    [],
  )

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="progress-bar" style={{ transform: `scaleX(${progress / 100})` }} />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="wordmark" href="#top" aria-label={`${profile.name}, home`}>
          <span>{profile.initials}</span>
          <span className="wordmark-name">{profile.name}</span>
        </a>
        <nav className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} onClick={() => setMenuOpen(false)}>
              {section.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-content reveal is-visible">
            <p className="eyebrow">{profile.role}</p>
            <h1>Researching intelligence.</h1>
            <p className="hero-intro">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button primary" href="#research">
                Explore research <span aria-hidden="true">↓</span>
              </a>
              <TextLink href={`mailto:${profile.email}`}>Start a conversation</TextLink>
            </div>
          </div>
          <div className="hero-footer">
            <p className="hero-name">{profile.name}</p>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-rail about-rail">
            <SectionHeading eyebrow="Profile" title="About" />
            <figure className="portrait reveal">
              <img
                src="/images/pratibodh-solanki.jpg"
                alt="Pratibodh Solanki outdoors in winter"
                width="1000"
                height="750"
              />
              <figcaption>Pratibodh Solanki</figcaption>
            </figure>
          </div>
          <div className="about-copy reveal">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="about-note reveal">
            <p className="eyebrow">Current focus</p>
            <p>Multi-agent learning, reinforcement learning, and research-grade agentic systems.</p>
          </aside>
        </section>

        <section className="section research" id="research">
          <SectionHeading eyebrow="Selected work" title="Research" />
          <p className="section-intro reveal">
            My research explores how agents learn from one another, adapt through interaction, and acquire useful behavior from language-model supervision.
          </p>
          <div className="research-list">
            {portfolio.researchProjects.map((project) => (
              <article className="research-project reveal" key={project.title}>
                <div className="research-project-meta">
                  <p>{project.period}</p>
                </div>
                <div className="research-project-content">
                  <h3>{project.title}</h3>
                  {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {project.status && <p className="project-status">{project.status}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        {portfolio.experience.length > 0 && (
          <section className="section experience" id="experience">
            <SectionHeading eyebrow="Industry" title="Experience" />
            <div className="experience-list">
              {portfolio.experience.map((item) => (
                <article className="experience-item reveal" key={`${item.period}-${item.role}`}>
                  <div className="experience-meta">
                    <img className="amazon-symbol" src="/images/amazon.svg" alt={item.organization} />
                    {item.team && <p className="experience-team">{item.team}</p>}
                  </div>
                  <div className="experience-detail">
                    <p className="experience-type">{item.period}</p>
                    <h3>{item.role}</h3>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {portfolio.publications.length > 0 && (
          <section className="section" id="publications">
            <SectionHeading eyebrow="Selected writing" title="Publications" />
            <div className="stack-list">
              {portfolio.publications.map((publication) => (
                <article className="publication reveal" key={publication.title}>
                  <p className="publication-meta">{publication.year} · {publication.venue}</p>
                  <h3>{publication.title}</h3>
                  <p>{publication.authors}</p>
                  <div className="link-row">
                    {publication.links.map((link) => <TextLink key={link.href} href={link.href}>{link.label}</TextLink>)}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {portfolio.projects.length > 0 && (
          <section className="section" id="projects">
            <SectionHeading eyebrow="Selected work" title="Projects" />
            <div className="project-grid">
              {portfolio.projects.map((project) => (
                <article className="project-card reveal" key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </section>
        )}

        {portfolio.education.length > 0 && (
          <section className="section" id="education">
            <SectionHeading eyebrow="Academic path" title="Education" />
            <div>
              {portfolio.education.map((item) => (
                <article className="timeline-item reveal" key={`${item.period}-${item.role}`}>
                  <p>{item.period}</p><h3>{item.role}</h3><p>{item.organization}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {portfolio.skills.length > 0 && (
          <section className="section" id="skills">
            <SectionHeading eyebrow="Technical toolkit" title="Skills" />
            <div className="skills-grid">
              {portfolio.skills.map((skillGroup) => (
                <div className="skill-group reveal" key={skillGroup.group}>
                  <h3>{skillGroup.group}</h3>
                  <p>{skillGroup.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="contact" id="contact">
          <div className="contact-compact reveal">
            <p className="eyebrow">Contact</p>
            <div className="contact-links">
              <TextLink href={`mailto:${profile.email}`}>{profile.email}</TextLink>
              <TextLink href={portfolio.links.github}>GitHub</TextLink>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Designed for clarity. Built for the web.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
