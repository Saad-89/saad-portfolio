import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './CustomButton.module.css';

const CustomNavBar = ({
  heroRef,
  aboutRef,
  portfolioRef,
  experienceRef,
  skillsRef,
  contactRef,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const navItems = ['About', 'Portfolio', 'Experience', 'Skills', 'Contact'];
  
  // Map sections to their refs for dynamic position detection
  const sectionRefs = {
    'Hero': heroRef,
    'About': aboutRef,
    'Portfolio': portfolioRef,
    'Experience': experienceRef,
    'Skills': skillsRef,
    'Contact': contactRef,
  };

  // Check if mobile on resize
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Determine active section based on scroll position
  const determineActiveSection = useCallback(() => {
    try {
      const currentScrollOffset = window.pageYOffset;
      const screenHeight = window.innerHeight;
      const navHeight = 80; // AppDimensions.navHeight equivalent

      // Define viewport bounds considering navbar height
      const viewportCenter = currentScrollOffset + (screenHeight * 0.3); // Top 30% of screen

      // Special case: if we're near the very top, always show Hero
      if (currentScrollOffset < 100) {
        return 'Hero';
      }

      // Get all section positions sorted by their position
      const sectionPositions = [];

      for (const [sectionName, sectionRef] of Object.entries(sectionRefs)) {
        if (sectionRef?.current) {
          try {
            const rect = sectionRef.current.getBoundingClientRect();
            const adjustedPosition = rect.top + currentScrollOffset;
            sectionPositions.push({ name: sectionName, position: adjustedPosition });
          } catch (e) {
            continue;
          }
        }
      }

      if (sectionPositions.length === 0) return activeSection;

      // Sort sections by position
      sectionPositions.sort((a, b) => a.position - b.position);

      // Find the active section based on viewport center
      let newActiveSection = sectionPositions[0].name;

      for (let i = 0; i < sectionPositions.length; i++) {
        const currentSection = sectionPositions[i];
        const nextSection = i + 1 < sectionPositions.length ? sectionPositions[i + 1] : null;

        // Check if viewport center is between current and next section
        if (viewportCenter >= currentSection.position) {
          if (nextSection === null || viewportCenter < nextSection.position) {
            newActiveSection = currentSection.name;
            break;
          }
        }
      }

      // Special handling for the last section
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const maxScrollExtent = documentHeight - windowHeight;

      // If we're near the bottom, activate the last section
      if (currentScrollOffset > maxScrollExtent - 200) {
        newActiveSection = sectionPositions[sectionPositions.length - 1].name;
      }

      return newActiveSection;
    } catch (e) {
      console.error('Error determining active section:', e);
      return activeSection;
    }
  }, [sectionRefs, activeSection]);

  // Handle scroll events
  const handleScroll = useCallback(() => {
    const offset = window.pageYOffset;

    // Update scroll state for navbar background
    if (offset > 50 && !isScrolled) {
      setIsScrolled(true);
    } else if (offset <= 50 && isScrolled) {
      setIsScrolled(false);
    }

    // Determine active section based on viewport intersection
    const newActiveSection = determineActiveSection();

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  }, [isScrolled, activeSection, determineActiveSection]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll to specific section
  const scrollToSection = (section) => {
    setIsMobileMenuOpen(false);

    // Immediately update active section for visual feedback
    setActiveSection(section);

    // Special case for Hero section
    if (section === 'Hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // Use ref for accurate positioning
    const sectionRef = sectionRefs[section];
    if (sectionRef?.current) {
      try {
        const rect = sectionRef.current.getBoundingClientRect();
        const navHeight = 80; // AppDimensions.navHeight equivalent
        
        // Calculate target position considering navbar height
        const targetPosition = rect.top + window.pageYOffset - navHeight - 20; // Small padding

        // Ensure we don't scroll beyond bounds
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const maxScrollExtent = documentHeight - windowHeight;
        const clampedPosition = Math.max(0, Math.min(targetPosition, maxScrollExtent));

        window.scrollTo({
          top: clampedPosition,
          behavior: 'smooth'
        });

        return;
      } catch (e) {
        console.error(`Error scrolling to section ${section}:`, e);
      }
    }

    console.warn(
      `Warning: Could not find section ${section}. Make sure ref is properly assigned.`
    );
  };

  // Setup event listeners
  useEffect(() => {
    checkMobile();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [handleScroll, checkMobile]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(`.${styles.mobileDrawer}`) && !event.target.closest(`.${styles.mobileMenuButton}`)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const renderDrawerItem = (item) => {
    const isActive = activeSection === item;

    return (
      <div
        key={item}
        className={`${styles.drawerItem} ${isActive ? styles.drawerItemActive : ''}`}
        onClick={() => scrollToSection(item)}
      >
        <div className={`${styles.activeIndicator} ${isActive ? styles.activeIndicatorVisible : ''}`} />
        <span className={styles.drawerItemText}>{item}</span>
      </div>
    );
  };

  const renderDesktopNavigation = () => {
    return (
      <div className={styles.desktopNavigation}>
        {navItems.map((item, index) => {
          const isActive = activeSection === item;
          
          return (
            <div
              key={item}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              onClick={() => scrollToSection(item)}
              style={{ animationDelay: `${800 + (index * 100)}ms` }}
            >
              <span 
                className={`${styles.navItemText} ${isScrolled ? styles.navItemScrolled : ''} ${isActive ? styles.navItemTextActive : ''}`}
              >
                {item}
              </span>
              <div 
                className={`${styles.underlineIndicator} ${isActive ? styles.underlineIndicatorActive : ''} ${isScrolled ? styles.underlineIndicatorScrolled : ''}`}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const renderMobileMenu = () => {
    return (
      <div 
        className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        onClick={toggleMobileMenu}
      >
        <div className={`${styles.hamburgerLine} ${styles.hamburgerLine1} ${isScrolled ? styles.hamburgerScrolled : ''}`} />
        <div className={`${styles.hamburgerLine} ${styles.hamburgerLine2} ${isScrolled ? styles.hamburgerScrolled : ''}`} />
        <div className={`${styles.hamburgerLine} ${styles.hamburgerLine3} ${isScrolled ? styles.hamburgerScrolled : ''}`} />
      </div>
    );
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`}>
        <div className={styles.navContent}>
          {/* Logo/Name */}
          <div 
            className={`${styles.logo} ${isScrolled ? styles.logoScrolled : ''}`}
            onClick={() => scrollToSection('Hero')}
          >
            M
          </div>

          {/* Navigation Items or Hamburger Menu */}
          {isMobile ? renderMobileMenu() : renderDesktopNavigation()}
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <div className={`${styles.mobileDrawer} ${isMobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
          <div className={styles.drawerContent}>
            {/* Drawer Header */}
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>Menu</span>
              <div className={styles.closeButton} onClick={toggleMobileMenu}>
                ✕
              </div>
            </div>

            {/* Menu Items */}
            <div className={styles.drawerItems}>
              {renderDrawerItem('Hero')}
              {navItems.map(item => renderDrawerItem(item))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomNavBar;