import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectsSection.module.css';
import { portfolioData } from '../../../data/repositories/portfolioData.js';
import ProjectVideoDialog from '../../dialogs/ProjectVideoDialog/ProjectVideoDialog.jsx';

const INITIAL_VISIBLE = 6; // 2 rows of 3 (desktop) or 3 rows of 2 (tablet)

const ProjectsSection = () => {
  const [visible, setVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [expanded, setExpanded] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = portfolioData?.projects ?? [];
  const displayedProjects = expanded ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hasMore = projects.length > INITIAL_VISIBLE;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0]?.isIntersecting) setVisible(true); },
      { threshold: 0.08, rootMargin: '0px 0px 80px 0px' }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  useEffect(() => {
    if (!visible || !displayedProjects.length) return;
    const timeouts = displayedProjects.map((_, i) =>
      setTimeout(() => setVisibleCards((prev) => new Set(prev).add(i)), 50 + i * 60)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [visible, displayedProjects.length]);

  const openDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  const firstLine = (text) => {
    if (!text || typeof text !== 'string') return '';
    return text.replace(/\*\*/g, '').split('\n')[0].trim();
  };

  if (!projects.length) {
    return (
      <section ref={sectionRef} className={styles.section} aria-label="Projects">
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.headerLine} />
            <h2 className={styles.title}>Projects</h2>
            <p className={styles.subtitle}>No projects to show.</p>
          </header>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${visible ? styles.visible : ''}`}
      aria-label="Projects"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerLine} aria-hidden="true" />
          <h2 className={styles.title}>Projects</h2>
          <p className={styles.subtitle}>Selected work</p>
        </header>

        <div className={styles.grid}>
          {displayedProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.card} ${visibleCards.has(index) ? styles.visible : ''}`}
              style={{ transitionDelay: `${50 + index * 60}ms` }}
              onClick={() => openDialog(project)}
            >
              <div className={styles.thumbWrap}>
                <img
                  src={project.thumbnailUrl}
                  alt=""
                  className={styles.thumb}
                  loading="lazy"
                  onError={(e) => { e.target.style.backgroundColor = 'var(--color-bg-alt)'; }}
                />
                <div className={styles.overlay} />
                <span className={styles.categoryBadge}>{project.category}</span>
                {project.videoUrl && <div className={styles.playIcon} aria-hidden="true">▶</div>}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{firstLine(project.detailedDescription)}</p>
                <div className={styles.techRow}>
                  {(project.technologies || []).slice(0, 4).map((tech, i) => (
                    <span key={i} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
            </button>
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
              {expanded ? 'Show less' : 'See more'}
            </button>
          </div>
        )}
      </div>

      {isDialogOpen && selectedProject && (
        <ProjectVideoDialog project={selectedProject} onClose={closeDialog} />
      )}
    </section>
  );
};

export default ProjectsSection;
