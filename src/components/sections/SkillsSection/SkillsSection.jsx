

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './SkillsSection.module.css';
import { SkillsRepository } from '../../../data/repositories/skillsData';

const SkillsSection = ({ scrollController = null }) => {
  const [allSkills, setAllSkills] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  
  const sectionRef = useRef(null);
  const animationTimeouts = useRef([]);
  const observerRef = useRef(null);

  // Debounced resize handler
  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const currentRef = sectionRef.current;
    
    if (!currentRef) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
            
            // Stagger card animations
            allSkills.forEach((_, index) => {
              const timeout = setTimeout(() => {
                setCardAnimations(prev => {
                  const newAnimations = [...prev];
                  newAnimations[index] = true;
                  return newAnimations;
                });
              }, index * 80);
              
              animationTimeouts.current.push(timeout);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observerRef.current.observe(currentRef);

    return () => {
      if (observerRef.current && currentRef) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [allSkills, hasAnimated]);

  // Load skills data
  useEffect(() => {
    console.log('Loading skills data from repository...');
    
    try {
      const skillsFromRepository = SkillsRepository.getAllSkills();
      
      const transformedSkills = skillsFromRepository.map(skill => ({
        name: skill.name,
        logoPath: skill.logoPath,
        category: skill.category,
        description: skill.description,
        id: skill.id || skill.name.toLowerCase().replace(/\s+/g, '-')
      }));
      
      console.log('Loaded skills from repository:', transformedSkills);
      setAllSkills(transformedSkills);
      setCardAnimations(new Array(transformedSkills.length).fill(false));
      
    } catch (error) {
      console.error('Error loading skills from repository:', error);
      // Fallback data
      const fallbackSkills = [
        { name: 'React', logoPath: '/icons/react.svg', category: 'Frontend' },
        { name: 'JavaScript', logoPath: '/icons/javascript.svg', category: 'Programming' },
        { name: 'Node.js', logoPath: '/icons/nodejs.svg', category: 'Backend' },
        { name: 'CSS', logoPath: '/icons/css.svg', category: 'Frontend' },
        { name: 'Python', logoPath: '/icons/python.svg', category: 'Programming' },
        { name: 'TypeScript', logoPath: '/icons/typescript.svg', category: 'Programming' }
      ].map(skill => ({ ...skill, id: skill.name.toLowerCase() }));
      
      setAllSkills(fallbackSkills);
      setCardAnimations(new Array(fallbackSkills.length).fill(false));
    }
  }, []);

  // Handle window resize with debouncing
  useEffect(() => {
    let timeoutId;
    
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debouncedResize);
      return () => {
        window.removeEventListener('resize', debouncedResize);
        clearTimeout(timeoutId);
      };
    }
  }, [handleResize]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      animationTimeouts.current.forEach(timeout => clearTimeout(timeout));
      animationTimeouts.current = [];
    };
  }, []);

  // Get responsive configuration
  const getResponsiveConfig = useCallback(() => {
    if (windowWidth < 480) {
      return {
        isMobile: true,
        columns: 2,
        padding: '3rem 1rem',
        headerFontSize: '1.75rem',
        subHeaderFontSize: '0.875rem',
        iconSize: 32,
        gap: '1rem'
      };
    } else if (windowWidth < 768) {
      return {
        isMobile: true,
        columns: 3,
        padding: '4rem 1.5rem',
        headerFontSize: '2rem',
        subHeaderFontSize: '0.9rem',
        iconSize: 36,
        gap: '1.25rem'
      };
    } else if (windowWidth < 1024) {
      return {
        isMobile: false,
        columns: 4,
        padding: '5rem 2rem',
        headerFontSize: '2.25rem',
        subHeaderFontSize: '1rem',
        iconSize: 40,
        gap: '1.5rem'
      };
    } else {
      return {
        isMobile: false,
        columns: 6,
        padding: '6rem 2rem',
        headerFontSize: '2.5rem',
        subHeaderFontSize: '1.1rem',
        iconSize: 44,
        gap: '1.75rem'
      };
    }
  }, [windowWidth]);

  const config = getResponsiveConfig();

  // Enhanced skill icon with better error handling
  const buildSkillIcon = useCallback((skill, iconSize) => {
    return (
      <img
        src={skill.logoPath}
        alt={`${skill.name} logo`}
        className={styles.skillIcon}
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`
        }}
        onError={(e) => {
          console.warn(`Failed to load image for ${skill.name}:`, skill.logoPath);
          e.target.style.display = 'none';
          const fallback = e.target.nextElementSibling;
          if (fallback && fallback.classList.contains(styles.fallbackIcon)) {
            fallback.style.display = 'flex';
          }
        }}
        loading="lazy"
      />
    );
  }, []);

  // Fallback icon
  const buildFallbackIcon = useCallback((skill, iconSize) => {
    const getInitials = (name) => {
      return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
    };

    return (
      <div 
        className={styles.fallbackIcon}
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          fontSize: `${iconSize * 0.4}px`,
          display: 'none'
        }}
        aria-label={`${skill.name} fallback icon`}
      >
        {getInitials(skill.name)}
      </div>
    );
  }, []);

  // Handle card click
  const handleCardClick = useCallback((skill, index) => {
    console.log(`Clicked on ${skill.name}`, skill);
  }, []);

  console.log('Rendering SkillsSection:', {
    skillsCount: allSkills.length,
    isVisible,
    hasAnimated,
    windowWidth,
    config
  });

  if (allSkills.length === 0) {
    return (
      <div className={styles.skillsSection} style={{ padding: config.padding }}>
        <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle} style={{ fontSize: config.headerFontSize }}>
          TECHNICAL EXPERTISE
        </h2>
        <p className={styles.sectionSubtitle} style={{ fontSize: config.subHeaderFontSize }}>
          Loading...
        </p>
      </div>
        </div>
      </div>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className={`${styles.skillsSection} ${isVisible ? styles.visible : ''}`}
      style={{ padding: config.padding }}
      aria-labelledby="skills-title"
    >
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <div className={styles.decorativeLine} aria-hidden="true" />
          
          <h2 
            id="skills-title"
            className={styles.sectionTitle}
            style={{ fontSize: config.headerFontSize }}
          >
            TECHNICAL EXPERTISE
          </h2>
          
          <p 
            className={styles.sectionSubtitle}
            style={{ fontSize: config.subHeaderFontSize }}
          >
            Technologies and tools I use to bring innovative ideas to life with passion and precision
          </p>
          
          <div className={styles.decorativeElements} aria-hidden="true">
            <div className={styles.decorator} />
            <div className={styles.decorativeDot} />
            <div className={styles.decorator} />
          </div>
        </header>

        <div 
          className={styles.skillsGrid}
          style={{
            gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
            gap: config.gap
          }}
        >
          {allSkills.map((skill, index) => (
            <div
              key={skill.id}
              className={`${styles.skillCard} ${cardAnimations[index] ? styles.animated : ''}`}
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => handleCardClick(skill, index)}
              tabIndex={0}
              role="button"
              aria-label={`${skill.name} skill`}
            >
              <div className={styles.iconWrapper}>
                {buildSkillIcon(skill, config.iconSize)}
                {buildFallbackIcon(skill, config.iconSize)}
              </div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

