import React, { useState, useEffect, useRef } from 'react';
import ExperienceData from '../../../data/repositories/experienceData.js';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = ExperienceData?.experiences ?? [];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) setSectionVisible(true); },
      { threshold: 0.08, rootMargin: '0px 0px 80px 0px' }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (!sectionVisible || !experiences.length) return;
    const timeouts = experiences.map((_, i) =>
      setTimeout(() => setVisibleIndices((prev) => new Set(prev).add(i)), 60 + i * 80)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [sectionVisible, experiences.length]);

  if (!experiences.length) {
    return (
      <section ref={sectionRef} className={styles.section} aria-label="Experience">
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headerLine} aria-hidden="true" />
            <h2 className={styles.title}>Experience</h2>
            <p className={styles.subtitle}>Professional journey</p>
          </header>
          <p style={{ color: 'var(--color-text-muted)', textAlign: 'center', fontSize: '0.875rem' }}>
            No experience data available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${sectionVisible ? styles.visible : ''}`}
      aria-label="Experience"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLine} aria-hidden="true" />
          <h2 className={styles.title}>Experience</h2>
          <p className={styles.subtitle}>Professional journey & milestones</p>
        </header>

        <div className={styles.list}>
          {experiences.map((exp, index) => (
            <article
              key={exp.id || index}
              className={`${styles.row} ${visibleIndices.has(index) ? styles.visible : ''}`}
              style={{ transitionDelay: `${60 + index * 80}ms` }}
            >
              <div className={styles.left}>
                <div className={styles.logoWrap}>
                  {exp.companyLogo ? (
                    <img
                      src={exp.companyLogo}
                      alt=""
                      className={styles.logoImg}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextElementSibling;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className={styles.logoFallback}
                    style={{ display: exp.companyLogo ? 'none' : 'flex' }}
                    aria-hidden="true"
                  >
                    {exp.company?.charAt(0)?.toUpperCase() || '?'}
                  </div>
                </div>
                <span className={styles.duration}>{exp.duration || '—'}</span>
                <span className={`${styles.typePill} ${exp.isCurrentJob ? styles.current : ''}`}>
                  {exp.type?.toUpperCase() || '—'}
                </span>
              </div>

              <div className={styles.right}>
                <div className={styles.rowHeader}>
                  <h3 className={styles.position}>{exp.position || '—'}</h3>
                  {exp.isCurrentJob && <span className={styles.currentBadge}>Current</span>}
                </div>
                <p className={styles.company}>{exp.company || '—'}</p>
                <span className={styles.location}>
                  <svg className={styles.locationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {exp.location || '—'}
                </span>
                <p className={styles.description}>{exp.description || ''}</p>
                {exp.responsibilities?.length > 0 && (
                  <>
                    <p className={styles.label}>Key responsibilities</p>
                    <ul className={styles.responsibilitiesList}>
                      {(exp.responsibilities || []).slice(0, 3).map((item, i) => (
                        <li key={i} className={styles.responsibilityItem}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {exp.technologies?.length > 0 && (
                  <>
                    <p className={styles.label}>Technologies</p>
                    <div className={styles.techList}>
                      {(exp.technologies || []).slice(0, 8).map((tech, i) => (
                        <span key={i} className={styles.techTag}>{tech}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
