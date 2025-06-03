import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import styles from './ProjectVideoDialog.module.css';

const ProjectVideoDialog = ({ project, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Start animations on mount
    setTimeout(() => setIsVisible(true), 10);
    
    // Prevent body scroll when dialog is open
    // document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = async () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  const getFirstParagraph = (description) => {
    return description.split('\n')[0].replace(/\*\*/g, '');
  };

  return (
    <div 
      className={`${styles.overlay} ${isVisible ? styles.visible : ''} ${isClosing ? styles.closing : ''}`}
      onClick={handleOverlayClick}
    >
      <div 
        className={`${styles.dialogContainer} ${isVisible ? styles.visible : ''} ${isClosing ? styles.closing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{project.title}</h2>
          <button 
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close dialog"
          >
            <span className={styles.closeIcon}>×</span>
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.desktopLayout}>
            {/* Video Section */}
            <div className={styles.videoSection}>
              <div className={styles.videoContainer}>
                <div 
                  className={styles.videoThumbnail}
                  style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                >
                  <div className={styles.videoOverlay}></div>
                  
                  {/* Play Button */}
                  <div className={styles.videoPlayButton}>
                    <div className={styles.playIcon}>▶</div>
                  </div>

                  {/* Demo Video Label */}
                  <div className={styles.videoLabel}>
                    Demo Video
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className={styles.detailsSection}>
              {/* Technologies */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Technologies</h3>
                <div className={styles.technologiesGrid}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category and Date */}
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Category</span>
                  <span className={styles.infoValue}>{project.category}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Completed</span>
                  <span className={styles.infoValue}>
                    {formatDate(project.completionDate)}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Project Details</h3>
                <div className={styles.description}>
                  <Markdown 
                    components={{
                      p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
                      strong: ({ children }) => <strong className={styles.bold}>{children}</strong>,
                      ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
                      li: ({ children }) => <li className={styles.listItem}>{children}</li>,
                    }}
                  >
                    {project.detailedDescription}
                  </Markdown >
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className={styles.mobileLayout}>
            {/* Video Section */}
            <div className={styles.videoSection}>
              <div className={styles.videoContainer}>
                <div 
                  className={styles.videoThumbnail}
                  style={{ backgroundImage: `url(${project.thumbnailUrl})` }}
                >
                  <div className={styles.videoOverlay}></div>
                  
                  <div className={styles.videoPlayButton}>
                    <div className={styles.playIcon}>▶</div>
                  </div>

                  <div className={styles.videoLabel}>
                    Demo Video
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className={styles.detailsSection}>
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Technologies</h3>
                <div className={styles.technologiesGrid}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Category</span>
                  <span className={styles.infoValue}>{project.category}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Completed</span>
                  <span className={styles.infoValue}>
                    {formatDate(project.completionDate)}
                  </span>
                </div>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Project Details</h3>
                <div className={styles.description}>
                  <Markdown 
                    components={{
                      p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
                      strong: ({ children }) => <strong className={styles.bold}>{children}</strong>,
                      ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
                      li: ({ children }) => <li className={styles.listItem}>{children}</li>,
                    }}
                  >
                    {project.detailedDescription}
                  </Markdown >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoDialog;