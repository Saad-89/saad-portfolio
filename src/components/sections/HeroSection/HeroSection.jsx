import React, { useState, useEffect, useCallback } from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({ contactRef, scrollController }) => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setAnimationPhase(1), 80);
    const t2 = setTimeout(() => setAnimationPhase(2), 180);
    const t3 = setTimeout(() => setAnimationPhase(3), 280);
    const t4 = setTimeout(() => setAnimationPhase(4), 380);
    const t5 = setTimeout(() => setAnimationPhase(5), 480);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  const scrollToContact = useCallback(() => {
    if (contactRef?.current && scrollController?.current) {
      const el = contactRef.current;
      const top = el.getBoundingClientRect().top + window.pageYOffset;
      scrollController.current.scrollTo({ top: top - 80, behavior: 'smooth' });
    }
  }, [contactRef, scrollController]);

  return (
    <section className={styles.heroSection} aria-label="Introduction">
      <div className={styles.animatedBackground}>
        <div className={`${styles.glowElement} ${styles.glowPrimary}`} />
        <div className={`${styles.glowElement} ${styles.glowSecondary}`} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={`${styles.greeting} ${animationPhase >= 1 ? styles.visible : ''}`}>
            <div className={styles.greetingBadge}>
              <div className={styles.statusDot} />
              <span>Hello, I'm</span>
            </div>
          </div>
          <h1 className={`${styles.name} ${animationPhase >= 2 ? styles.visible : ''}`}>
            Saad Yaqoob
          </h1>
          <div className={`${styles.title} ${animationPhase >= 3 ? styles.visible : ''}`}>
            <span className={styles.titleBadge}>Mobile App & Web Developer</span>
          </div>
          <div className={`${styles.quote} ${animationPhase >= 4 ? styles.visible : ''}`}>
            <span className={styles.quoteText}>
              Building mobile apps and modern web experiences that work beautifully across all platforms.
            </span>
          </div>
          <div className={`${styles.ctaContainer} ${animationPhase >= 5 ? styles.visible : ''}`}>
            <button
              className={styles.ctaButton}
              onClick={scrollToContact}
              aria-label="Scroll to contact"
            >
              <span>Let's Connect</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
