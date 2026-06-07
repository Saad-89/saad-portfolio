import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../../data/repositories/portfolioData.js';
import { getScreenshot } from '../../data/screenshots.js';
import styles from './CaseStudyPage.module.css';

const EMAIL = 'saadyaqoob595@gmail.com';

const hostOf = (url) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch { return ''; }
};

// Public assets (videos) live in /public. A relative "./videos/x.mp4" breaks on
// nested routes like /work/:slug, so resolve against the configured base.
const publicAsset = (p) =>
  p ? `${import.meta.env.BASE_URL}${p.replace(/^\.?\//, '')}` : p;

const CaseStudyPage = () => {
  const { slug } = useParams();
  const project = portfolioData.getProjectBySlug(slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p className={styles.eyebrow}>404</p>
        <h1>This case study doesn&apos;t exist.</h1>
        <Link to="/" className={styles.ghostLink}>← Back to portfolio</Link>
      </div>
    );
  }

  const { next } = portfolioData.getAdjacent(slug);
  const shot = getScreenshot(project.id) || project.thumbnailUrl;
  const host = hostOf(project.liveUrl);

  return (
    <div className={styles.page}>
      {/* Top bar */}
      <header className={styles.topbar}>
        <Link to="/" className={styles.back}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>All work</span>
        </Link>
        <Link to="/" className={styles.wordmark}>Saad Yaqoob</Link>
        <a className={styles.topCta} href={`mailto:${EMAIL}`}>Get in touch</a>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>
            <span>{project.category}</span>
            {project.year && <><span className={styles.dot}>/</span><span>{project.year}</span></>}
          </p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lead}>{project.tagline}</p>

          <dl className={styles.metaRow}>
            {project.role && (
              <div className={styles.metaItem}>
                <dt>Role</dt>
                <dd>{project.role.split('—')[0].trim()}</dd>
              </div>
            )}
            <div className={styles.metaItem}>
              <dt>Stack</dt>
              <dd>{(project.technologies || []).slice(0, 3).join(', ')}</dd>
            </div>
            {project.liveUrl && (
              <div className={styles.metaItem}>
                <dt>Live</dt>
                <dd>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveInline}>
                    {host} ↗
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* Screenshot in a browser frame */}
      <section className={styles.shotSection}>
        <figure className={styles.browser}>
          <div className={styles.browserBar}>
            <span className={styles.trafficLights} aria-hidden="true">
              <i /><i /><i />
            </span>
            <span className={styles.urlPill}>{host || 'live preview'}</span>
          </div>
          <img src={shot} alt={`${project.title} — live site`} className={styles.shot} loading="eager" />
        </figure>
      </section>

      {/* Narrative */}
      <article className={styles.body}>
        {project.detailedDescription && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}><span className={styles.idx}>00</span>Overview</h2>
            <p className={styles.prose}>{project.detailedDescription}</p>
          </section>
        )}

        {project.challenge && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}><span className={styles.idx}>01</span>The challenge</h2>
            <p className={styles.prose}>{project.challenge}</p>
          </section>
        )}

        {project.approach && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}><span className={styles.idx}>02</span>The approach</h2>
            <p className={styles.prose}>{project.approach}</p>
          </section>
        )}

        {project.contributions?.length > 0 && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}><span className={styles.idx}>03</span>What I built</h2>
            <ul className={styles.buildList}>
              {project.contributions.map((item, i) => (
                <li key={i} className={styles.buildItem}>
                  <span className={styles.buildNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.videoUrl && (
          <section className={styles.block}>
            <h2 className={styles.blockHeading}><span className={styles.idx}>04</span>The demo</h2>
            <video
              className={styles.video}
              controls
              preload="metadata"
              poster={shot}
              playsInline
            >
              <source src={publicAsset(project.videoUrl)} type="video/mp4" />
            </video>
          </section>
        )}

        <section className={styles.block}>
          <h2 className={styles.blockHeading}><span className={styles.idx}>05</span>Built with</h2>
          <div className={styles.techRow}>
            {(project.technologies || []).map((tech, i) => (
              <span key={i} className={styles.techTag}>{tech}</span>
            ))}
          </div>
          {project.role && <p className={styles.roleNote}>{project.role}</p>}
        </section>
      </article>

      {/* CTA */}
      <section className={styles.cta}>
        <p className={styles.ctaEyebrow}>Want results like these for your business?</p>
        <h2 className={styles.ctaTitle}>Let&apos;s build yours.</h2>
        <div className={styles.ctaActions}>
          <a className={styles.primaryBtn} href={`mailto:${EMAIL}`}>Start your project</a>
          <Link className={styles.ghostBtn} to="/">View more work</Link>
        </div>
      </section>

      {/* Next project */}
      {next && (
        <Link to={`/work/${next.slug}`} className={styles.nextProject}>
          <span className={styles.nextLabel}>Next case study</span>
          <span className={styles.nextTitle}>
            {next.title}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
};

export default CaseStudyPage;
