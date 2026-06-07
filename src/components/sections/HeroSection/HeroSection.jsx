import React, { useState, useEffect, useCallback } from 'react';
import styles from './HeroSection.module.css';
import saadPortrait from '../../../assets/images/saad-hero.jpg';

const HeroSection = ({ contactRef, portfolioRef, scrollController }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [60, 160, 260, 360, 460, 560].map((d, i) =>
      setTimeout(() => setPhase(i + 1), d)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollTo = useCallback(
    (ref) => {
      if (ref?.current) {
        const top = ref.current.getBoundingClientRect().top + window.pageYOffset;
        const target = scrollController?.current || window;
        target.scrollTo({ top: top - 72, behavior: 'smooth' });
      }
    },
    [scrollController]
  );

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={`${styles.kicker} ${phase >= 1 ? styles.in : ''}`}>
            <span className={styles.dot} aria-hidden="true" />
            Saad Yaqoob — Software Engineer
          </p>

          <h1 className={`${styles.headline} ${phase >= 2 ? styles.in : ''}`}>
            I build software that helps businesses
            <span className={styles.accent}> grow.</span>
          </h1>

          <p className={`${styles.lead} ${phase >= 3 ? styles.in : ''}`}>
            For 5+ years I&apos;ve helped startups and companies turn ideas into products their
            customers love — websites and apps, smart AI tools, and automation that saves teams
            hours every week. From the first idea to launch, I handle the whole build.
          </p>

          <div className={`${styles.actions} ${phase >= 4 ? styles.in : ''}`}>
            <button className={styles.primary} onClick={() => scrollTo(portfolioRef)}>
              View work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className={styles.ghost} onClick={() => scrollTo(contactRef)}>
              Get in touch
            </button>
          </div>

          <p className={`${styles.meta} ${phase >= 5 ? styles.in : ''}`}>
            <span>Websites &amp; apps</span><span>AI &amp; automation</span><span>Launch-ready MVPs</span>
            <span className={styles.metaSep}>·</span>
            <span>Remote, worldwide</span>
          </p>
        </div>

        <div className={`${styles.portraitWrap} ${phase >= 1 ? styles.in : ''}`}>
          <div className={styles.portraitFrame}>
            <img
              src={saadPortrait}
              alt="Saad Yaqoob"
              className={styles.portrait}
              width="440"
              height="520"
              fetchPriority="high"
            />
          </div>
          <div className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
