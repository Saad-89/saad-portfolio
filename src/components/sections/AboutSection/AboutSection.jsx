import React, { useState, useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';

const AboutSection = ({ scrollController }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && isInView()) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    };

    const scrollElement = window;

    scrollElement.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const isInView = () => {
    if (!sectionRef.current) return false;

    const rect = sectionRef.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    return rect.top < screenHeight * 0.7 && rect.top > -rect.height * 0.3;
  };

  const handleSocialClick = (platform) => {
    const links = {
      Instagram: 'https://instagram.com/your-username',
      LinkedIn: 'https://linkedin.com/in/your-username',
      GitHub: 'https://github.com/your-username'
    };

    if (links[platform]) {
      window.open(links[platform], '_blank');
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.aboutSection} ${isVisible ? styles.animate : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Desktop Layout */}
          <div className={styles.desktopLayout}>
            <div className={`${styles.textContent} ${styles.slideFromLeft}`}>
              <div className={styles.textWrapper}>
                <div className={styles.sectionLabel}>About Me</div>
                <h1 className={styles.name}>Saad Yaqoob</h1>
                              <p className={styles.introduction}>
                  Hello, I'm Saad Yaqoob.<br />
                  I'm a senior mobile and web developer who brings digital ideas to life. With expertise in both 
                  mobile app development and modern web technologies, I create seamless user experiences that work 
                  beautifully across all platforms.
                </p>
                <p className={styles.skillsBrief}>
                  Over the years, I've successfully built and launched numerous applications on both Google Play Store 
                  and Apple App Store using Flutter and React Native. My web development skills span modern frameworks 
                  and technologies, allowing me to create responsive, fast-loading websites that engage users and drive results. 
                  I believe in writing clean, maintainable code and always stay updated with the latest industry trends 
                  to deliver cutting-edge solutions.
                </p>
                <div className={styles.socialLinks}>
                  {['Instagram', 'LinkedIn', 'GitHub'].map((platform) => (
                    <button
                      key={platform}
                      className={styles.socialLink}
                      onClick={() => handleSocialClick(platform)}
                    >
                      <span className={styles.socialText}>{platform}</span>
                      <div className={styles.socialUnderline}></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${styles.imageContent} ${styles.slideFromRight}`}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <svg className={styles.personIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className={styles.mobileLayout}>
            <div className={`${styles.imageContent} ${styles.slideFromRight}`}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <svg className={styles.personIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className={`${styles.textContent} ${styles.slideFromLeft}`}>
              <div className={styles.textWrapper}>
                <div className={styles.sectionLabel}>About Me</div>
                <h1 className={styles.name}>Muhammad<br />Ahsan</h1>
                <p className={styles.introduction}>
                  Hello, I'm Muhammad Ahsan.<br />
                  I'm a Flutter developer passionate about creating beautiful cross-platform mobile experiences. 
                  I specialize in building high-performance apps that work seamlessly on both iOS and Android.
                </p>
                <p className={styles.skillsBrief}>
                  My expertise includes Flutter, Dart, Firebase, REST APIs, and state management solutions like Provider and Bloc. 
                  I've worked with clients ranging from startups to established companies, delivering robust mobile solutions.
                </p>
                <div className={styles.socialLinks}>
                  {['Instagram', 'LinkedIn', 'GitHub'].map((platform) => (
                    <button
                      key={platform}
                      className={styles.socialLink}
                      onClick={() => handleSocialClick(platform)}
                    >
                      <span className={styles.socialText}>{platform}</span>
                      <div className={styles.socialUnderline}></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
