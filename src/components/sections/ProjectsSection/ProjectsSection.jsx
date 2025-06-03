import React, { useState, useEffect, useRef } from 'react';
import styles from './ProjectsSection.module.css';
import { portfolioData } from '../../../data/repositories/portfolioData.js';
import ProjectVideoDialog from '../../dialogs/ProjectVideoDialog/ProjectVideoDialog.jsx';

const ProjectsSection = ({ scrollController }) => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle item as center
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [leftArrowScale, setLeftArrowScale] = useState(1.0);
  const [rightArrowScale, setRightArrowScale] = useState(1.0);
  
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  // Responsive breakpoints
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll listener for animations
  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && isInView()) {
        setHasAnimated(true);
      }
    };

    // Check if scrollController exists and has addEventListener method
    if (scrollController && typeof scrollController.addEventListener === 'function') {
      scrollController.addEventListener('scroll', handleScroll);
      return () => {
        if (scrollController && typeof scrollController.removeEventListener === 'function') {
          scrollController.removeEventListener('scroll', handleScroll);
        }
      };
    } else {
      // Fallback to window scroll if scrollController is not available or doesn't have addEventListener
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollController, hasAnimated]);

  const isInView = () => {
    if (!sectionRef.current) return false;

    const rect = sectionRef.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    // Trigger animation when section is 50% visible
    return rect.top < screenHeight * 0.8 && rect.top > -rect.height * 0.5;
  };

  const openProjectDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeProjectDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  const nextProject = () => {
    if (currentIndex < portfolioData.projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const buildEnhancedSectionTitle = () => (
    <div className={styles.sectionTitleContainer}>
      {/* Decorative line */}
      <div className={styles.decorativeLine}></div>
      
      <div className={styles.spacing24}></div>
      
      <h2 className={`${styles.mainTitle} ${isMobile ? styles.mainTitleMobile : ''}`}>
        PORTFOLIO
      </h2>
      
      <div className={styles.spacing12}></div>
      
      <p className={`${styles.subtitle} ${isMobile ? styles.subtitleMobile : ''}`}>
        Featured Projects & Case Studies
      </p>
      
      <div className={styles.spacing32}></div>
      
      {/* Decorative elements */}
      <div className={styles.decorativeElements}>
        <div className={styles.decorator}></div>
        <div className={styles.spacing20}></div>
        <div className={styles.decorativeCircle}></div>
        <div className={styles.spacing20}></div>
        <div className={styles.decorator}></div>
      </div>
    </div>
  );

  const getCardPosition = (index) => {
    const position = index - currentIndex;
    if (position === 0) return 'center';
    if (position === -1) return 'left';
    if (position === 1) return 'right';
    if (position < -1) return 'far-left';
    if (position > 1) return 'far-right';
    return 'hidden';
  };

  const buildProjectCard = (project, index, isMobileCard = false) => {
    const position = getCardPosition(index);
    const isCenter = position === 'center';
    
    return (
      <div
        key={project.id}
        className={`${styles.projectCard} ${styles[position]} ${isMobileCard ? styles.mobileCard : ''}`}
        onClick={() => openProjectDialog(project)}
      >
        <div className={styles.cardContent}>
          {/* Project Image */}
          <div className={styles.imageContainer}>
            <div 
              className={styles.projectImage}
              style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
              onError={(e) => {
                e.target.style.backgroundColor = '#f5f5f5';
              }}
            >
              {/* Gradient overlay */}
              <div className={styles.gradientOverlay}></div>
              
              {/* Category Badge */}
              <div className={styles.categoryBadge}>
                {project.category}
              </div>
              
              {/* Play button overlay */}
              {project.videoUrl && (
                <div className={styles.playButton}>
                  <div className={styles.playIcon}>▶</div>
                </div>
              )}
            </div>
          </div>
          
          {/* Project Info - Only show full info for center card */}
          {(isCenter || isMobileCard) && (
            <div className={`${styles.projectInfo} ${isMobileCard ? styles.projectInfoMobile : ''}`}>
              <div className={styles.projectDetails}>
                {/* Project Title */}
                <h3 className={`${styles.projectTitle} ${isMobileCard ? styles.projectTitleMobile : ''}`}>
                  {project.title}
                </h3>
                
                <div className={styles.spacing8}></div>
                
                {/* Project Description */}
                <p className={`${styles.projectDescription} ${isMobileCard ? styles.projectDescriptionMobile : ''}`}>
                  {project.detailedDescription.split('\n')[0].replace(/\*\*/g, '')}
                </p>
              </div>
              
              {/* Technologies */}
              <div className={styles.technologiesContainer}>
                {project.technologies.slice(0, isMobileCard ? 2 : 3).map((tech, index) => (
                  <span key={index} className={styles.techBadge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Side cards show minimal info */}
          {!isCenter && !isMobileCard && (
            <div className={styles.sideCardInfo}>
              <h3 className={styles.sideCardTitle}>{project.title}</h3>
              <div className={styles.sideCardCategory}>{project.category}</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const buildDesktopView = () => (
    <div className={styles.desktopViewContainer}>
      {/* Main Carousel */}
      <div className={styles.carouselContainer} ref={carouselRef}>
        <div className={styles.carouselWrapper}>
          {portfolioData.projects.map((project, index) => (
            buildProjectCard(project, index)
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className={styles.navigationArrows}>
        <button
          className={`${styles.navArrow} ${styles.prevArrow} ${currentIndex === 0 ? styles.disabled : ''}`}
          onClick={previousProject}
          onMouseDown={() => setLeftArrowScale(0.85)}
          onMouseUp={() => setLeftArrowScale(1.0)}
          onMouseLeave={() => setLeftArrowScale(1.0)}
          style={{ transform: `scale(${leftArrowScale})` }}
          disabled={currentIndex === 0}
        >
          <span className={styles.arrowIcon}>‹</span>
        </button>
        
        <button
          className={`${styles.navArrow} ${styles.nextArrow} ${currentIndex === portfolioData.projects.length - 1 ? styles.disabled : ''}`}
          onClick={nextProject}
          onMouseDown={() => setRightArrowScale(0.85)}
          onMouseUp={() => setRightArrowScale(1.0)}
          onMouseLeave={() => setRightArrowScale(1.0)}
          style={{ transform: `scale(${rightArrowScale})` }}
          disabled={currentIndex === portfolioData.projects.length - 1}
        >
          <span className={styles.arrowIcon}>›</span>
        </button>
      </div>
    </div>
  );

  const buildMobileView = () => (
    <div className={styles.mobileViewContainer}>
      <div 
        className={styles.mobileCarouselTrack}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.4s ease-in-out'
        }}
      >
        {portfolioData.projects.map((project, index) => (
          <div key={project.id} className={styles.mobileCarouselSlide}>
            {buildProjectCard(project, index, true)}
          </div>
        ))}
      </div>
      
      {/* Mobile Navigation Arrows */}
      <div className={styles.mobileNavigationArrows}>
        <button
          className={`${styles.mobileNavArrow} ${currentIndex === 0 ? styles.disabled : ''}`}
          onClick={previousProject}
          disabled={currentIndex === 0}
        >
          <span className={styles.arrowIcon}>‹</span>
        </button>
        
        <button
          className={`${styles.mobileNavArrow} ${currentIndex === portfolioData.projects.length - 1 ? styles.disabled : ''}`}
          onClick={nextProject}
          disabled={currentIndex === portfolioData.projects.length - 1}
        >
          <span className={styles.arrowIcon}>›</span>
        </button>
      </div>
    </div>
  );

  const buildIndicators = () => (
    <div className={styles.indicators}>
      {portfolioData.projects.map((_, index) => (
        <button
          key={index}
          className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className={`${styles.portfolioSection} ${hasAnimated ? styles.animated : ''}`}
    >
      <div className={styles.container}>
        {/* Section Title */}
        {buildEnhancedSectionTitle()}
        
        <div className={isMobile ? styles.spacing24 : styles.spacing30}></div>
        
        {/* Portfolio Carousel */}
        <div className={styles.portfolioCarousel}>
          {isMobile ? buildMobileView() : buildDesktopView()}
        </div>
        
        <div className={styles.spacing20}></div>
        
        {/* Navigation Indicators */}
        {buildIndicators()}
      </div>
      
      {/* Project Dialog */}
      {isDialogOpen && selectedProject && (
        <ProjectVideoDialog
          project={selectedProject}
          onClose={closeProjectDialog}
        />
      )}
    </section>
  );
};

export default ProjectsSection;