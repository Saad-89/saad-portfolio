import React, { useState, useEffect, useRef } from 'react';
import styles from './SkillsSection.module.css';

// Plain-language capabilities first (for clients), with the real tech kept as a
// small footnote for the technically curious.
const CAPABILITIES = [
  {
    group: 'Websites & apps',
    items: [
      'Business & marketing websites',
      'Web apps & dashboards',
      'Mobile apps (iOS & Android)',
      'E-commerce & payments',
      'Booking & member portals',
    ],
  },
  {
    group: 'AI & automation',
    items: [
      'AI assistants & chatbots',
      'Custom AI agents',
      'Claude Code & MCP connectors',
      'Claude Skills',
      'Workflow & task automation',
      'Document & data processing',
    ],
  },
  {
    group: 'Backend & integrations',
    items: [
      'APIs & third-party integrations',
      'Databases & secure storage',
      'Accounts & authentication',
      'Cloud hosting & deployment',
    ],
  },
  {
    group: 'Product & delivery',
    items: [
      'MVP scoping & planning',
      'Launch & app-store release',
      'Speed & reliability',
      'Ongoing support & improvements',
    ],
  },
];

const TECH = ['Flutter', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Firebase', 'MongoDB', 'AWS'];

const SkillsSection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${sectionVisible ? styles.visible : ''}`}
      aria-labelledby="skills-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>04 — What I do</span>
          <h2 id="skills-title" className={styles.title}>
            From idea to launched product
          </h2>
          <p className={styles.subtitle}>
            I cover the whole journey — design, build, AI, and launch — so you don&apos;t have to
            juggle a handful of different freelancers to get there.
          </p>
        </header>

        <dl className={styles.groups}>
          {CAPABILITIES.map(({ group, items }, gi) => (
            <div
              key={group}
              className={`${styles.groupRow} ${sectionVisible ? styles.in : ''}`}
              style={{ transitionDelay: `${gi * 70}ms` }}
            >
              <dt className={styles.groupLabel}>
                <span className={styles.groupIndex}>{String(gi + 1).padStart(2, '0')}</span>
                {group}
              </dt>
              <dd className={styles.groupItems}>
                {items.map((name) => (
                  <span key={name} className={styles.chip}>{name}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <p className={`${styles.techLine} ${sectionVisible ? styles.in : ''}`}>
          <span className={styles.techLabel}>Under the hood</span>
          {TECH.join('  ·  ')}
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
