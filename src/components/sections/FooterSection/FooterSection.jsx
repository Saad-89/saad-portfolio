
import React from 'react';
import styles from './FooterSection.module.css';



const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Left Side - Brand */}
          <div className={styles.brand}>
            <h3>Saad Yaqoob</h3>
            <p>Full Stack Developer</p>
          </div>

          {/* Right Side - Back to Top */}
          <div className={styles.backToTop}>
            <button 
              className={styles.backToTopButton}
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Saad Yaqoob. All rights reserved.</p>
          </div>
          <div className={styles.location}>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;