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
              }, index * 100);
              
              animationTimeouts.current.push(timeout);
            });
          }
        });
      },
      {
        threshold: 0.2,
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
      
      // Simplified skill transformation - remove proficiency levels
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
      // Fallback data in case repository fails
      const fallbackSkills = [
        { name: 'React', logoPath: '/icons/react.svg', category: 'Frontend' },
        { name: 'JavaScript', logoPath: '/icons/javascript.svg', category: 'Programming' },
        { name: 'Node.js', logoPath: '/icons/nodejs.svg', category: 'Backend' },
        { name: 'CSS', logoPath: '/icons/css.svg', category: 'Frontend' }
      ];
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
    if (windowWidth < 576) {
      return {
        isMobile: true,
        isTablet: false,
        crossAxisCount: 1,
        padding: '3rem 1rem',
        headerFontSize: '2rem',
        subHeaderFontSize: '0.9rem',
        iconSize: 50,
        cardPadding: '2rem 1rem',
        gap: '1.5rem'
      };
    } else if (windowWidth < 768) {
      return {
        isMobile: true,
        isTablet: false,
        crossAxisCount: 2,
        padding: '4rem 1.5rem',
        headerFontSize: '2.5rem',
        subHeaderFontSize: '1rem',
        iconSize: 60,
        cardPadding: '2rem 1.5rem',
        gap: '1.5rem'
      };
    } else if (windowWidth < 992) {
      return {
        isMobile: false,
        isTablet: true,
        crossAxisCount: 3,
        padding: '4.5rem 2rem',
        headerFontSize: '3rem',
        subHeaderFontSize: '1.1rem',
        iconSize: 70,
        cardPadding: '2.25rem 1.5rem',
        gap: '1.75rem'
      };
    } else if (windowWidth < 1200) {
      return {
        isMobile: false,
        isTablet: false,
        crossAxisCount: 4,
        padding: '2rem 2rem',
        headerFontSize: '3.25rem',
        subHeaderFontSize: '1.1rem',
        iconSize: 80,
        cardPadding: '2.5rem 1.5rem',
        gap: '1.75rem'
      };
    } else if (windowWidth < 1400) {
      return {
        isMobile: false,
        isTablet: false,
        crossAxisCount: 4,
        padding: '2rem 2rem',
        headerFontSize: '3.5rem',
        subHeaderFontSize: '1.1rem',
        iconSize: 90,
        cardPadding: '2.5rem 1.5rem',
        gap: '2rem'
      };
    } else {
      return {
        isMobile: false,
        isTablet: false,
        crossAxisCount: 5,
        padding: '2rem 2rem',
        headerFontSize: '3.5rem',
        subHeaderFontSize: '1.1rem',
        iconSize: 90,
        cardPadding: '2.5rem 1.5rem',
        gap: '2rem'
      };
    }
  }, [windowWidth]);

  const config = getResponsiveConfig();

  // Enhanced skill icon with better error handling
  const buildSkillIcon = useCallback((skill, iconSize) => {
    return (
      <img
        src={skill.logoPath}
        alt={`${skill.name} technology logo`}
        className={styles.skillIcon}
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          maxWidth: '100%',
          maxHeight: '100%'
        }}
        onError={(e) => {
          console.warn(`Failed to load image for ${skill.name}:`, skill.logoPath);
          e.target.style.display = 'none';
          const fallback = e.target.nextElementSibling;
          if (fallback && fallback.classList.contains(styles.fallbackIcon)) {
            fallback.style.display = 'flex';
          }
        }}
        onLoad={(e) => {
          console.log(`Successfully loaded image for ${skill.name}`);
        }}
        loading="lazy"
      />
    );
  }, []);

  // Enhanced fallback icon
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
          display: 'none',
          fontSize: `${iconSize * 0.35}px`,
          fontWeight: '700'
        }}
        aria-label={`${skill.name} fallback icon`}
      >
        {getInitials(skill.name)}
      </div>
    );
  }, []);

  // Handle card click for potential future interactions
  const handleCardClick = useCallback((skill, index) => {
    console.log(`Clicked on ${skill.name}`, skill);
    // Add any click handlers here if needed
  }, []);

  // Handle card keyboard navigation
  const handleCardKeyDown = useCallback((e, skill, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(skill, index);
    }
  }, [handleCardClick]);

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
            <div className={styles.decorativeLine} />
            <h2 className={styles.sectionTitle} style={{ fontSize: config.headerFontSize }}>
              TECHNICAL EXPERTISE
            </h2>
            <p className={styles.sectionSubtitle} style={{ fontSize: config.subHeaderFontSize }}>
              Loading skills...
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
            gridTemplateColumns: `repeat(${config.crossAxisCount}, 1fr)`,
            gap: config.gap
          }}
          role="grid"
          aria-label="Technical skills showcase"
        >
          {allSkills.map((skill, index) => (
            <div
              key={skill.id || `${skill.name}-${index}`}
              className={`${styles.skillCard} ${cardAnimations[index] ? styles.animated : ''}`}
              style={{
                animationDelay: `${index * 100}ms`,
                padding: config.cardPadding
              }}
              onClick={() => handleCardClick(skill, index)}
              onKeyDown={(e) => handleCardKeyDown(e, skill, index)}
              tabIndex={0}
              role="gridcell"
              aria-label={`${skill.name} technology skill`}
            >
              <div 
                className={styles.logoContainer}
                style={{
                  width: `${config.iconSize + 20}px`,
                  height: `${config.iconSize + 20}px`
                }}
                aria-hidden="true"
              >
                {buildSkillIcon(skill, config.iconSize)}
                {buildFallbackIcon(skill, config.iconSize)}
              </div>

              <h3 
                className={styles.skillName}
                style={{ fontSize: config.isMobile ? '1rem' : '1.25rem' }}
              >
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
// import React, { useState, useEffect, useRef } from 'react';
// import styles from './SkillsSection.module.css';
// import { SkillsRepository } from '../../../data/repositories/skillsData';

// const SkillsSection = ({ scrollController = null }) => {
//   const [allSkills, setAllSkills] = useState([]);
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [cardAnimations, setCardAnimations] = useState([]);
//   const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
//   const sectionRef = useRef(null);
//   const animationTimeouts = useRef([]);

//   useEffect(() => {
//     console.log('Loading skills data from repository...');
    
//     try {
//       // Get data from repository
//       const skillsFromRepository = SkillsRepository.getAllSkills();
      
//       // Transform proficiency numbers to text levels
//       const transformedSkills = skillsFromRepository.map(skill => {
//         let proficiencyLevel = 'Beginner';
//         if (skill.proficiency >= 0.9) proficiencyLevel = 'Expert';
//         else if (skill.proficiency >= 0.8) proficiencyLevel = 'Advanced';
//         else if (skill.proficiency >= 0.6) proficiencyLevel = 'Intermediate';
        
//         return {
//           name: skill.name,
//           proficiencyLevel: proficiencyLevel,
//           logoPath: skill.logoPath,
//           category: skill.category,
//           description: skill.description
//         };
//       });
      
//       console.log('Loaded skills from repository:', transformedSkills);
//       setAllSkills(transformedSkills);
//       setCardAnimations(new Array(transformedSkills.length).fill(false));
      
//       // Auto-show after short delay
//       setTimeout(() => {
//         setIsVisible(true);
//         setCardAnimations(new Array(transformedSkills.length).fill(true));
//       }, 500);
      
//     } catch (error) {
//       console.error('Error loading skills from repository:', error);
//     }
//   }, []);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     if (typeof window !== 'undefined') {
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   useEffect(() => {
//     return () => {
//       animationTimeouts.current.forEach(timeout => clearTimeout(timeout));
//     };
//   }, []);

//   const getResponsiveConfig = () => {
//     if (windowWidth < 768) {
//       return {
//         isMobile: true,
//         crossAxisCount: 2,
//         padding: '2rem 1.5rem',
//         headerFontSize: '2.25rem',
//         subHeaderFontSize: '0.875rem'
//       };
//     } else if (windowWidth < 1024) {
//       return {
//         isMobile: false,
//         crossAxisCount: 3,
//         padding: '4rem 2rem',
//         headerFontSize: '3rem',
//         subHeaderFontSize: '1rem'
//       };
//     } else {
//       return {
//         isMobile: false,
//         crossAxisCount: 4,
//         padding: '2rem 2rem',
//         headerFontSize: '3rem',
//         subHeaderFontSize: '1rem'
//       };
//     }
//   };

//   const config = getResponsiveConfig();

//   const buildSkillIcon = (skill, isMobile) => {
//     return (
//       <img
//         src={skill.logoPath}
//         alt={`${skill.name} logo`}
//         className={styles.skillIcon}
//         style={{
//           width: isMobile ? '36px' : '44px',
//           height: isMobile ? '36px' : '44px'
//         }}
//         onError={(e) => {
//           console.log(`Failed to load image for ${skill.name}:`, skill.logoPath);
//           e.target.style.display = 'none';
//           if (e.target.nextSibling) {
//             e.target.nextSibling.style.display = 'flex';
//           }
//         }}
//       />
//     );
//   };

//   const buildFallbackIcon = (skill, isMobile) => {
//     return (
//       <div 
//         className={styles.fallbackIcon}
//         style={{
//           width: isMobile ? '36px' : '44px',
//           height: isMobile ? '36px' : '44px',
//           display: 'none'
//         }}
//       >
//         <div style={{
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: isMobile ? '14px' : '16px',
//           fontWeight: '600',
//           color: '#666'
//         }}>
//           {skill.name.charAt(0).toUpperCase()}
//         </div>
//       </div>
//     );
//   };

//   console.log('Rendering with skills:', allSkills.length, 'visible:', isVisible);

//   return (
//     <div 
//       ref={sectionRef}
//       className={`${styles.skillsSection} ${isVisible ? styles.visible : ''}`}
//       style={{ padding: config.padding }}
//     >
//       <div className={styles.container}>
//         <div className={styles.sectionHeader}>
//           <div className={styles.decorativeLine} />
          
//           <h2 
//             className={styles.sectionTitle}
//             style={{ fontSize: config.headerFontSize }}
//           >
//             TECHNICAL EXPERTISE
//           </h2>
          
//           <p 
//             className={styles.sectionSubtitle}
//             style={{ fontSize: config.subHeaderFontSize }}
//           >
//             Technologies and tools I use to bring ideas to life with passion and precision
//           </p>
          
//           <div className={styles.decorativeElements}>
//             <div className={styles.decorator} />
//             <div className={styles.decorativeDot} />
//             <div className={styles.decorator} />
//           </div>
//         </div>

//         <div 
//           className={styles.skillsGrid}
//           style={{
//             gridTemplateColumns: `repeat(${config.crossAxisCount}, 1fr)`,
//             gap: config.isMobile ? '1rem' : '1.25rem'
//           }}
//         >
//           {allSkills.map((skill, index) => (
//             <div
//               key={`${skill.name}-${index}`}
//               className={`${styles.skillCard} ${cardAnimations[index] ? styles.animated : ''}`}
//               style={{
//                 animationDelay: `${index * 50}ms`
//               }}
//             >
//               <div 
//                 className={styles.logoContainer}
//                 style={{
//                   width: config.isMobile ? '60px' : '80px',
//                   height: config.isMobile ? '60px' : '80px'
//                 }}
//               >
//                 {buildSkillIcon(skill, config.isMobile)}
//                 {buildFallbackIcon(skill, config.isMobile)}
//               </div>

//               <h3 
//                 className={styles.skillName}
//                 style={{ fontSize: config.isMobile ? '1rem' : '1.125rem' }}
//               >
//                 {skill.name}
//               </h3>

//               <p 
//                 className={styles.skillLevel}
//                 style={{ fontSize: config.isMobile ? '0.75rem' : '0.813rem' }}
//               >
//                 {skill.proficiencyLevel}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsSection;