import React, { useState, useEffect, useRef } from 'react';
import ExperienceData from '../../../data/repositories/experienceData.js';
import { useResponsive } from '../../../hooks/useResponsive.js';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {


  const { isMobile } = useResponsive();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);



  useEffect(() => {
   

  
    if (ExperienceData?.experiences && !hasAnimated) {
      setHasAnimated(true);
      ExperienceData.experiences.forEach((_, index) => {
        setTimeout(() => {
        
          setVisibleCards(prev => new Set(prev).add(index));
        }, 100 + (index * 150));
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
      
        entries.forEach((entry) => {
        
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current && !hasAnimated) {
            
              setHasAnimated(true);
              
              // Start card animations with staggered delay
              if (ExperienceData?.experiences) {
                ExperienceData.experiences.forEach((_, index) => {
                 
                  setTimeout(() => {
                
                    setVisibleCards(prev => new Set(prev).add(index));
                  }, 200 + (index * 200));
                });
              } else {
               
              }
            }
          }
        });
      },
      {
        threshold: 0.1, // Reduced threshold for easier triggering
        rootMargin: '0px' // Removed negative margins for easier triggering
      }
    );

    if (sectionRef.current) {
    
      observer.observe(sectionRef.current);
    } else {
     
    }

    return () => {
   
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const DefaultLogo = ({ companyName }) => {
  
    return (
      <div className={styles.defaultLogo}>
        {companyName?.substring(0, 1).toUpperCase() || '?'}
      </div>
    );
  };

  const ExperienceCard = ({ experience, index, isMobile }) => {
   
    
    const isVisible = visibleCards.has(index);
   
    
    if (!experience) {
      return <div>Error: Missing experience data for card {index}</div>;
    }
    
    return (
      <div 
        className={`${styles.experienceCard} ${isVisible ? styles.visible : ''}`}
        ref={el => cardRefs.current[index] = el}
        style={{
          animationDelay: `${200 + (index * 200)}ms`
        }}
      >
        {/* Accent line */}
        <div className={styles.accentLine}></div>
        
        {/* Card content */}
        <div className={styles.cardContent}>
          {isMobile ? (
            <MobileCardContent experience={experience} />
          ) : (
            <DesktopCardContent experience={experience} />
          )}
        </div>
      </div>
    );
  };

  const DesktopCardContent = ({ experience }) => {
  if (!experience) {
    return <div>Error: Missing experience data</div>;
  }
  
  return (
    <div className={styles.desktopContent}>
      {/* Left side - Company info */}
      <div className={styles.leftSide}>
        {/* Company Logo */}
        <div className={styles.logoContainer}>
          {experience.companyLogo ? (
            <img 
              src={experience.companyLogo} 
              alt={`${experience.company} logo`}
              className={styles.companyLogo}
              onError={(e) => {
                e.target.style.display = 'none';
                const defaultLogo = e.target.parentNode.querySelector('.defaultLogo');
                if (defaultLogo) {
                  defaultLogo.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <div className={`${styles.defaultLogo} defaultLogo`} style={{ display: experience.companyLogo ? 'none' : 'flex' }}>
            {experience.company?.substring(0, 1).toUpperCase() || '?'}
          </div>
        </div>

        {/* Duration */}
        <div className={styles.duration}>
          {experience.duration || 'No duration'}
        </div>

        {/* Job Type */}
        <div className={`${styles.jobType} ${experience.isCurrentJob ? styles.current : ''}`}>
          {experience.type?.toUpperCase() || 'NO TYPE'}
        </div>

        {/* Location */}
        <div className={styles.location}>
          <svg className={styles.locationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {experience.location || 'No location'}
        </div>
      </div>

      {/* Right side - Job details */}
      <div className={styles.rightSide}>
        {/* Header */}
        <div className={styles.jobHeader}>
          <div className={styles.jobTitleContainer}>
            <h3 className={styles.position}>{experience.position || 'No position'}</h3>
            <h4 className={styles.company}>{experience.company || 'No company'}</h4>
          </div>
          {experience.isCurrentJob && (
            <div className={styles.currentBadge}>CURRENT</div>
          )}
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Description */}
        <p className={styles.description}>{experience.description || 'No description available'}</p>

        {/* Responsibilities */}
        <div className={styles.responsibilitiesSection}>
          <h5 className={styles.sectionTitle}>KEY RESPONSIBILITIES</h5>
          <ul className={styles.responsibilitiesList}>
            {(experience.responsibilities || []).map((responsibility, idx) => (
              <li key={idx} className={styles.responsibilityItem}>
                <span className={styles.bullet}></span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className={styles.technologiesSection}>
          <h5 className={styles.sectionTitle}>TECHNOLOGIES</h5>
          <div className={styles.techTags}>
            {(experience.technologies || []).map((tech, idx) => (
              <span key={idx} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated MobileCardContent component - replace the existing one
const MobileCardContent = ({ experience }) => {
  if (!experience) {
    return <div>Error: Missing experience data</div>;
  }
  
  return (
    <div className={styles.mobileContent}>
      {/* Header */}
      <div className={styles.mobileHeader}>
        {/* Company Logo */}
        <div className={styles.mobileLogoContainer}>
          {experience.companyLogo ? (
            <img 
              src={experience.companyLogo} 
              alt={`${experience.company} logo`}
              className={styles.mobileCompanyLogo}
              onError={(e) => {
                e.target.style.display = 'none';
                const defaultLogo = e.target.parentNode.querySelector('.mobileDefaultLogo');
                if (defaultLogo) {
                  defaultLogo.style.display = 'flex';
                }
              }}
            />
          ) : null}
          <div className={`${styles.defaultLogo} mobileDefaultLogo`} style={{ display: experience.companyLogo ? 'none' : 'flex' }}>
            {experience.company?.substring(0, 1).toUpperCase() || '?'}
          </div>
        </div>

        <div className={styles.mobileTitleContainer}>
          <h3 className={styles.mobilePosition}>{experience.position || 'No position'}</h3>
          <h4 className={styles.mobileCompany}>{experience.company || 'No company'}</h4>
        </div>

        {experience.isCurrentJob && (
          <div className={styles.mobileCurrentBadge}>CURRENT</div>
        )}
      </div>

      {/* Duration and type */}
      <div className={styles.mobileMetadata}>
        <div className={styles.mobileDuration}>{experience.duration || 'No duration'}</div>
        <div className={styles.mobileJobType}>{experience.type?.toUpperCase() || 'NO TYPE'}</div>
      </div>

      {/* Location */}
      <div className={styles.mobileLocation}>
        <svg className={styles.mobileLocationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        {experience.location || 'No location'}
      </div>

      {/* Divider */}
      <div className={styles.mobileDivider}></div>

      {/* Description */}
      <p className={styles.mobileDescription}>{experience.description || 'No description available'}</p>

      {/* Responsibilities (top 3) */}
      <div className={styles.mobileResponsibilitiesSection}>
        <h5 className={styles.mobileSectionTitle}>KEY RESPONSIBILITIES</h5>
        <ul className={styles.mobileResponsibilitiesList}>
          {(experience.responsibilities || []).slice(0, 3).map((responsibility, idx) => (
            <li key={idx} className={styles.mobileResponsibilityItem}>
              <span className={styles.mobileBullet}></span>
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies (top 8) */}
      <div className={styles.mobileTechnologiesSection}>
        <h5 className={styles.mobileSectionTitle}>TECHNOLOGIES</h5>
        <div className={styles.mobileTechTags}>
          {(experience.technologies || []).slice(0, 8).map((tech, idx) => (
            <span key={idx} className={styles.mobileTechTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
  // const DesktopCardContent = ({ experience }) => {

  //   if (!experience) {
  //     return <div>Error: Missing experience data</div>;
  //   }
    
  //   return (
  //     <div className={styles.desktopContent}>
  //       {/* Left side - Company info */}
  //       <div className={styles.leftSide}>
  //         {/* Company Logo */}
  //         <div className={styles.logoContainer}>
  //           {experience.companyLogo ? (
  //             <img 
  //               src={experience.companyLogo} 
  //               alt={`${experience.company} logo`}
  //               className={styles.companyLogo}
  //               onError={(e) => {
                 
  //                 e.target.style.display = 'none';
  //                 e.target.nextSibling.style.display = 'flex';
  //               }}
  //             />
  //           ) : null}
  //           <DefaultLogo companyName={experience.company} />
  //         </div>

  //         {/* Duration */}
  //         <div className={styles.duration}>
  //           {experience.duration || 'No duration'}
  //         </div>

  //         {/* Job Type */}
  //         <div className={`${styles.jobType} ${experience.isCurrentJob ? styles.current : ''}`}>
  //           {experience.type?.toUpperCase() || 'NO TYPE'}
  //         </div>

  //         {/* Location */}
  //         <div className={styles.location}>
  //           <svg className={styles.locationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
  //             <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
  //             <circle cx="12" cy="10" r="3"/>
  //           </svg>
  //           {experience.location || 'No location'}
  //         </div>
  //       </div>

  //       {/* Right side - Job details */}
  //       <div className={styles.rightSide}>
  //         {/* Header */}
  //         <div className={styles.jobHeader}>
  //           <div className={styles.jobTitleContainer}>
  //             <h3 className={styles.position}>{experience.position || 'No position'}</h3>
  //             <h4 className={styles.company}>{experience.company || 'No company'}</h4>
  //           </div>
  //           {experience.isCurrentJob && (
  //             <div className={styles.currentBadge}>CURRENT</div>
  //           )}
  //         </div>

  //         {/* Divider */}
  //         <div className={styles.divider}></div>

  //         {/* Description */}
  //         <p className={styles.description}>{experience.description || 'No description available'}</p>

  //         {/* Responsibilities */}
  //         <div className={styles.responsibilitiesSection}>
  //           <h5 className={styles.sectionTitle}>KEY RESPONSIBILITIES</h5>
  //           <ul className={styles.responsibilitiesList}>
  //             {(experience.responsibilities || []).map((responsibility, idx) => (
  //               <li key={idx} className={styles.responsibilityItem}>
  //                 <span className={styles.bullet}></span>
  //                 {responsibility}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>

  //         {/* Technologies */}
  //         <div className={styles.technologiesSection}>
  //           <h5 className={styles.sectionTitle}>TECHNOLOGIES</h5>
  //           <div className={styles.techTags}>
  //             {(experience.technologies || []).map((tech, idx) => (
  //               <span key={idx} className={styles.techTag}>
  //                 {tech}
  //               </span>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const MobileCardContent = ({ experience }) => {
    
  //   if (!experience) {
  //     return <div>Error: Missing experience data</div>;
  //   }
    
  //   return (
  //     <div className={styles.mobileContent}>
  //       {/* Header */}
  //       <div className={styles.mobileHeader}>
  //         {/* Company Logo */}
  //         <div className={styles.mobileLogoContainer}>
  //           {experience.companyLogo ? (
  //             <img 
  //               src={experience.companyLogo} 
  //               alt={`${experience.company} logo`}
  //               className={styles.mobileCompanyLogo}
  //               onError={(e) => {
  //                 e.target.style.display = 'none';
  //                 e.target.nextSibling.style.display = 'flex';
  //               }}
  //             />
  //           ) : null}
  //           <DefaultLogo companyName={experience.company} />
  //         </div>

  //         <div className={styles.mobileTitleContainer}>
  //           <h3 className={styles.mobilePosition}>{experience.position || 'No position'}</h3>
  //           <h4 className={styles.mobileCompany}>{experience.company || 'No company'}</h4>
  //         </div>

  //         {experience.isCurrentJob && (
  //           <div className={styles.mobileCurrentBadge}>CURRENT</div>
  //         )}
  //       </div>

  //       {/* Duration and type */}
  //       <div className={styles.mobileMetadata}>
  //         <div className={styles.mobileDuration}>{experience.duration || 'No duration'}</div>
  //         <div className={styles.mobileJobType}>{experience.type?.toUpperCase() || 'NO TYPE'}</div>
  //       </div>

  //       {/* Location */}
  //       <div className={styles.mobileLocation}>
  //         <svg className={styles.mobileLocationIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
  //           <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
  //           <circle cx="12" cy="10" r="3"/>
  //         </svg>
  //         {experience.location || 'No location'}
  //       </div>

  //       {/* Divider */}
  //       <div className={styles.mobileDivider}></div>

  //       {/* Description */}
  //       <p className={styles.mobileDescription}>{experience.description || 'No description available'}</p>

  //       {/* Responsibilities (top 3) */}
  //       <div className={styles.mobileResponsibilitiesSection}>
  //         <h5 className={styles.mobileSectionTitle}>KEY RESPONSIBILITIES</h5>
  //         <ul className={styles.mobileResponsibilitiesList}>
  //           {(experience.responsibilities || []).slice(0, 3).map((responsibility, idx) => (
  //             <li key={idx} className={styles.mobileResponsibilityItem}>
  //               <span className={styles.mobileBullet}></span>
  //               {responsibility}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>

  //       {/* Technologies (top 8) */}
  //       <div className={styles.mobileTechnologiesSection}>
  //         <h5 className={styles.mobileSectionTitle}>TECHNOLOGIES</h5>
  //         <div className={styles.mobileTechTags}>
  //           {(experience.technologies || []).slice(0, 8).map((tech, idx) => (
  //             <span key={idx} className={styles.mobileTechTag}>
  //               {tech}
  //             </span>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const SectionTitle = () => {
    return (
      <div className={styles.sectionTitle}>
        {/* Decorative line */}
        <div className={styles.decorativeLine}></div>
        
        <h2 className={styles.mainTitle}>EXPERIENCE</h2>
        
        <p className={styles.subtitle}>Professional Journey & Milestones</p>
        
        {/* Decorative elements */}
        <div className={styles.decorativeElements}>
          <div className={styles.decorator}></div>
          <div className={styles.centerDot}></div>
          <div className={styles.decorator}></div>
        </div>
      </div>
    );
  };



  // Early return with error message if no data
  if (!ExperienceData || !ExperienceData.experiences) {
    return (
      <section className={styles.experienceSection}>
        <div className={styles.container}>
          <h2>Experience Section</h2>
          <p style={{ color: 'red', fontSize: '18px', padding: '20px' }}>
            Error: ExperienceData not found or invalid. Check console for details.
          </p>
          {!ExperienceData && <p>ExperienceData is null/undefined</p>}
          {ExperienceData && !ExperienceData.experiences && <p>ExperienceData.experiences is null/undefined</p>}
        </div>
      </section>
    );
  }

  if (ExperienceData.experiences.length === 0) {
    return (
      <section className={styles.experienceSection}>
        <div className={styles.container}>
          <SectionTitle />
          <p style={{ color: 'orange', fontSize: '16px', textAlign: 'center' }}>
            No experience data available.
          </p>
        </div>
      </section>
    );
  }


  return (
    <section 
      ref={sectionRef}
      className={`${styles.experienceSection} ${hasAnimated ? styles.animated : ''}`}
    >
      <div className={styles.container}>
        <SectionTitle />
        
        <div className={styles.timeline}>
          {ExperienceData.experiences.map((experience, index) => {
            return (
              <ExperienceCard
                key={experience.id || index}
                experience={experience}
                index={index}
                isMobile={isMobile}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
