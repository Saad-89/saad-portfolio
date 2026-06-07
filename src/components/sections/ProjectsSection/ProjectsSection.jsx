import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsSection.module.css';
import { portfolioData } from '../../../data/repositories/portfolioData.js';

const INITIAL_VISIBLE = 6;

const ProjectsSection = () => {
  const [visible, setVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  const projects = portfolioData?.projects ?? [];
  const displayedProjects = expanded ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) setVisible(true); },
      { threshold: 0.06, rootMargin: '0px 0px 80px 0px' }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (!visible || !displayedProjects.length) return;
    const timeouts = displayedProjects.map((_, i) =>
      setTimeout(() => setVisibleCards((prev) => new Set(prev).add(i)), 40 + i * 55)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [visible, displayedProjects.length]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      aria-label="Selected work"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>02 — Selected work</span>
          <h2 className={styles.title}>
            Real products, built for real businesses.
          </h2>
          <p className={styles.subtitle}>
            Each one opens as a full case study — the problem it solved, how I approached it, and
            what I delivered. All of them are live and in use today.
          </p>
        </header>

        <div className={styles.grid}>
          {displayedProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className={`${styles.card} ${visibleCards.has(index) ? styles.visible : ''}`}
              style={{ transitionDelay: `${40 + index * 55}ms` }}
              aria-label={`Read the ${project.title} case study`}
            >
              <div className={styles.thumbWrap}>
                <img
                  src={project.thumbnailUrl}
                  alt=""
                  className={styles.thumb}
                  loading="lazy"
                  onError={(e) => { e.target.style.opacity = '0'; }}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  {project.year && <span className={styles.cardYear}>{project.year}</span>}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.tagline}</p>
                <span className={styles.readMore}>
                  Read case study
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className={styles.seeMoreWrap}>
            <button
              type="button"
              className={styles.seeMoreButton}
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show fewer' : `View all ${projects.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
