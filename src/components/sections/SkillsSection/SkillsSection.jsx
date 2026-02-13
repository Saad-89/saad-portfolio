import React, { useState, useEffect, useRef, useMemo } from 'react';
import styles from './SkillsSection.module.css';
import { SkillsRepository } from '../../../data/repositories/skillsData';

const BASE = typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : '';

function getIconUrl(path) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/')) return path;
  const clean = path.replace(/^\.\//, '');
  return `${BASE.replace(/\/$/, '')}/${clean}`;
}

const SkillCard = React.memo(function SkillCard({ skill, isVisible, delay }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = getIconUrl(skill.logoPath);

  return (
    <div
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      role="listitem"
    >
      <div className={styles.iconWrap}>
        {!imgFailed && src ? (
          <img
            src={src}
            alt=""
            className={styles.icon}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : null}
        <div
          className={styles.fallbackIcon}
          style={{ display: !imgFailed && src ? 'none' : 'flex' }}
          aria-hidden="true"
        >
          {skill.name
            .split(/\s+/)
            .map((w) => w.charAt(0))
            .slice(0, 2)
            .join('')
            .toUpperCase() || '?'}
        </div>
      </div>
      <span className={styles.name}>{skill.name}</span>
    </div>
  );
});

const SkillsSection = () => {
  const [skillsByCategory, setSkillsByCategory] = useState([]);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  useEffect(() => {
    try {
      const all = SkillsRepository.getAllSkills();
      const map = new Map();
      all.forEach((s) => {
        const cat = s.category || 'Other';
        if (!map.has(cat)) map.set(cat, []);
        map.get(cat).push({
          id: s.id || s.name?.toLowerCase?.()?.replace(/\s+/g, '-'),
          name: s.name,
          logoPath: s.logoPath,
          category: cat,
        });
      });
      setSkillsByCategory(Array.from(map.entries()).map(([category, items]) => ({ category, items })));
    } catch {
      setSkillsByCategory([]);
    }
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.08, rootMargin: '0px 0px 80px 0px' }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (!sectionVisible || !skillsByCategory.length) return;
    let globalIndex = 0;
    const timeouts = [];
    skillsByCategory.forEach(({ items }) => {
      items.forEach((_, i) => {
        const idx = globalIndex++;
        timeouts.push(
          setTimeout(() => {
            setVisibleCards((prev) => new Set(prev).add(idx));
          }, 50 + idx * 60)
        );
      });
    });
    return () => timeouts.forEach(clearTimeout);
  }, [sectionVisible, skillsByCategory.length]);

  const cardKeyToIndex = useMemo(() => {
    const m = new Map();
    let i = 0;
    skillsByCategory.forEach(({ items }) => {
      items.forEach((item) => m.set(item.id, i++));
    });
    return m;
  }, [skillsByCategory]);

  if (!skillsByCategory.length) {
    return (
      <section ref={sectionRef} className={styles.section} aria-labelledby="skills-title">
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headerLine} aria-hidden="true" />
            <h2 id="skills-title" className={styles.title}>
              Technical expertise
            </h2>
            <p className={styles.subtitle}>Loading…</p>
          </header>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${sectionVisible ? styles.visible : ''}`}
      aria-labelledby="skills-title"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLine} aria-hidden="true" />
          <h2 id="skills-title" className={styles.title}>
            Technical expertise
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I use to build products with clarity and precision
          </p>
        </header>

        {skillsByCategory.map(({ category, items }) => (
          <div key={category} className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{category}</h3>
            <div className={styles.grid} role="list">
              {items.map((skill) => {
                const index = cardKeyToIndex.get(skill.id) ?? 0;
                return (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    isVisible={visibleCards.has(index)}
                    delay={50 + index * 60}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
