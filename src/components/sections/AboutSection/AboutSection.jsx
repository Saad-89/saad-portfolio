import React, { useState, useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';
import saadProfile from '../../../assets/images/saad.png';

const AboutSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const handleSocialClick = (platform) => {
    const links = {
      Twitter: 'https://x.com/saadkashmiri_',
      LinkedIn: 'https://www.linkedin.com/in/muhammadsaad89/',
      GitHub: 'https://github.com/Saad-89',
    };
    if (links[platform]) window.open(links[platform], '_blank');
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.aboutSection} ${visible ? styles.visible : ''}`}
      aria-label="About"
    >
      <div className={styles.container}>
        <div className={`${styles.content} ${styles.textFirst}`}>
          <div className={styles.textContent}>
            <div className={styles.sectionLabel}>About Me</div>
            <h2 className={styles.name}>Saad Yaqoob</h2>
            <p className={styles.introduction}>
              I'm a senior mobile and web developer. I build apps and websites with Flutter, React, and modern stacks—focused on clean code and great UX across platforms.
            </p>
            <p className={styles.skillsBrief}>
              I've shipped apps to Google Play and the App Store and built responsive web products. I stay current with industry trends to deliver solid, maintainable solutions.
            </p>
            <div className={styles.socialLinks}>
              {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                <button
                  key={platform}
                  type="button"
                  className={styles.socialLink}
                  onClick={() => handleSocialClick(platform)}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img
              src={saadProfile}
              alt="Saad Yaqoob"
              className={styles.profileImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
