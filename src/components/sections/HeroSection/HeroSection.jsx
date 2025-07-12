import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useResponsive } from '../../../hooks/useResponsive.js';
import styles from './HeroSection.module.css';

const HeroSection = ({ contactRef, scrollController }) => {
  const { isMobile, isTablet } = useResponsive();
  
  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  
  // Refs for animations
  const sectionRef = useRef(null);
  const floatingRef = useRef(null);
  const glowRef = useRef(null);
  
  // Faster sequential animations
  useEffect(() => {
    setIsVisible(true);
    
    const timeouts = [
      setTimeout(() => setAnimationPhase(1), 100),   // greeting
      setTimeout(() => setAnimationPhase(2), 250),   // name
      setTimeout(() => setAnimationPhase(3), 400),   // title
      setTimeout(() => setAnimationPhase(4), 600),   // quote
      setTimeout(() => setAnimationPhase(5), 800),   // cta
    ];
    
    return () => timeouts.forEach(clearTimeout);
  }, []);
  
  // Floating animations
  useEffect(() => {
    let floatingAnimation, glowAnimation;
    
    if (animationPhase >= 3) {
      let floatValue = 0;
      let glowValue = 0;
      
      floatingAnimation = setInterval(() => {
        floatValue += 0.02;
        glowValue += 0.015;
        
        if (floatingRef.current) {
          const offsetY = Math.sin(floatValue) * 3;
          floatingRef.current.style.transform = `translateY(${offsetY}px)`;
        }
        
        if (glowRef.current) {
          const opacity = 0.4 + Math.sin(glowValue) * 0.4;
          glowRef.current.style.opacity = opacity;
        }
      }, 16);
    }
    
    return () => {
      if (floatingAnimation) clearInterval(floatingAnimation);
      if (glowAnimation) clearInterval(glowAnimation);
    };
  }, [animationPhase]);
  
  // Scroll to contact section
  const scrollToContact = useCallback(() => {
    if (contactRef?.current && scrollController?.current) {
      const element = contactRef.current;
      const scrollContainer = scrollController.current;
      
      const elementTop = element.offsetTop;
      const offset = isMobile ? 100 : isTablet ? 150 : 80;
      const targetPosition = elementTop - offset;
      
      scrollContainer.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, [contactRef, scrollController, isMobile, isTablet]);
  
  return (
    <section 
      ref={sectionRef}
      className={styles.heroSection}
      style={{
        '--screen-height': '100vh',
        '--mobile': isMobile ? '1' : '0',
        '--tablet': isTablet ? '1' : '0'
      }}
    >
      {/* Animated Background */}
      <div className={styles.animatedBackground}>
        <div 
          ref={glowRef}
          className={`${styles.glowElement} ${styles.glowPrimary}`}
        />
        <div 
          ref={glowRef}
          className={`${styles.glowElement} ${styles.glowSecondary}`}
        />
      </div>
      
      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          {/* Greeting */}
          <div 
            className={`${styles.greeting} ${animationPhase >= 1 ? styles.visible : ''}`}
          >
            <div className={styles.greetingBadge}>
              <div className={styles.statusDot} />
              <span>👋 Hello, I'm</span>
            </div>
          </div>
          
          {/* Name */}
          <h1 
            className={`${styles.name} ${animationPhase >= 2 ? styles.visible : ''}`}
          >
            Saad Yaqoob
          </h1>
          
          {/* Title */}
          <div 
            className={`${styles.title} ${animationPhase >= 3 ? styles.visible : ''}`}
          >
            <span className={styles.titleBadge}>Mobile App & Web Developer</span>
          </div>
          
          {/* Quote */}
          <div 
            className={`${styles.quote} ${animationPhase >= 4 ? styles.visible : ''}`}
          >
            <span className={styles.quoteText}>
              Building powerful mobile apps and modern websites that deliver exceptional user experiences across all platforms.
            </span>
          </div>
          
          {/* CTA Button */}
          <div 
            ref={floatingRef}
            className={`${styles.ctaContainer} ${animationPhase >= 5 ? styles.visible : ''}`}
          >
            <button 
              className={styles.ctaButton}
              onClick={scrollToContact}
              aria-label="Scroll to contact section"
            >
              <span>Let's Connect</span>
              <div className={styles.ctaIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M5 12h14M12 5l7 7-7 7" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { AppTheme } from '../../../core/theme/theme.js';
// import { useResponsive } from '../../../hooks/useResponsive.js';
// import styles from './HeroSection.module.css';

// const HeroSection = ({ contactRef, scrollController }) => {
//   const { isMobile, isTablet } = useResponsive();
  
//   // Animation states
//   const [isVisible, setIsVisible] = useState(false);
//   const [displayedQuote, setDisplayedQuote] = useState('');
//   const [showCursor, setShowCursor] = useState(true);
//   const [animationPhase, setAnimationPhase] = useState(0);
  
//   // Refs for animations
//   const sectionRef = useRef(null);
//   const typewriterRef = useRef(null);
//   const floatingRef = useRef(null);
//   const glowRef = useRef(null);
  
//   const fullQuote = 'Crafting digital experiences with passion & precision.';
  
//   // Typewriter effect
//  useEffect(() => {
//   if (animationPhase < 4) return;
  
//   let currentIndex = 0;
//   let cursorInterval;
  
//   const typewriterInterval = setInterval(() => {
//     if (currentIndex <= fullQuote.length) {
//       setDisplayedQuote(fullQuote.substring(0, currentIndex));
//       currentIndex++;
//     } else {
//       clearInterval(typewriterInterval);
//       // Start cursor blinking after typing is complete
//       cursorInterval = setInterval(() => {
//         setShowCursor(prev => !prev);
//       }, 500);
//     }
//   }, 50);
  
//   return () => {
//     clearInterval(typewriterInterval);
//     if (cursorInterval) clearInterval(cursorInterval);
//   };
// }, [animationPhase, fullQuote]);
  
//   // Sequential animations
//   useEffect(() => {
//     setIsVisible(true);
    
//     const timeouts = [
//       setTimeout(() => setAnimationPhase(1), 200),   // greeting
//       setTimeout(() => setAnimationPhase(2), 500),   // name
//       setTimeout(() => setAnimationPhase(3), 800),   // title
//       setTimeout(() => setAnimationPhase(4), 1200),  // quote
//       setTimeout(() => setAnimationPhase(5), 1800),  // cta
//     ];
    
//     return () => timeouts.forEach(clearTimeout);
//   }, []);
  
//   // Floating animations
//   useEffect(() => {
//     let floatingAnimation, glowAnimation;
    
//     if (animationPhase >= 3) {
//       let floatValue = 0;
//       let glowValue = 0;
      
//       floatingAnimation = setInterval(() => {
//         floatValue += 0.02;
//         glowValue += 0.015;
        
//         if (floatingRef.current) {
//           const offsetY = Math.sin(floatValue) * 3;
//           floatingRef.current.style.transform = `translateY(${offsetY}px)`;
//         }
        
//         if (glowRef.current) {
//           const opacity = 0.4 + Math.sin(glowValue) * 0.4;
//           glowRef.current.style.opacity = opacity;
//         }
//       }, 16);
//     }
    
//     return () => {
//       if (floatingAnimation) clearInterval(floatingAnimation);
//       if (glowAnimation) clearInterval(glowAnimation);
//     };
//   }, [animationPhase]);
  
//   // Scroll to contact section
//   const scrollToContact = useCallback(() => {
//     if (contactRef?.current && scrollController?.current) {
//       const element = contactRef.current;
//       const scrollContainer = scrollController.current;
      
//       const elementTop = element.offsetTop;
//       const offset = isMobile ? 100 : isTablet ? 150 : 80;
//       const targetPosition = elementTop - offset;
      
//       scrollContainer.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth'
//       });
//     }
//   }, [contactRef, scrollController, isMobile, isTablet]);
  
//   return (
//     <section 
//       ref={sectionRef}
//       className={styles.heroSection}
//       style={{
//         '--screen-height': '100vh',
//         '--mobile': isMobile ? '1' : '0',
//         '--tablet': isTablet ? '1' : '0'
//       }}
//     >
//       {/* Animated Background */}
//       <div className={styles.animatedBackground}>
//         <div 
//           ref={glowRef}
//           className={`${styles.glowElement} ${styles.glowPrimary}`}
//         />
//         <div 
//           ref={glowRef}
//           className={`${styles.glowElement} ${styles.glowSecondary}`}
//         />
//       </div>
      
//       {/* Main Content */}
//       <div className={styles.contentContainer}>
//         <div className={styles.content}>
//           {/* Greeting */}
//           <div 
//             className={`${styles.greeting} ${animationPhase >= 1 ? styles.visible : ''}`}
//           >
//             <div className={styles.greetingBadge}>
//               <div className={styles.statusDot} />
//               <span>👋 Hello, I'm</span>
//             </div>
//           </div>
          
//           {/* Name */}
//           <h1 
//             className={`${styles.name} ${animationPhase >= 2 ? styles.visible : ''}`}
//           >
//             Muhammad
//           </h1>
          
//           {/* Title */}
//           <div 
//             className={`${styles.title} ${animationPhase >= 3 ? styles.visible : ''}`}
//           >
//             <span className={styles.titleBadge}>Full Stack Developer</span>
//           </div>
          
//         {/* Quote with Typewriter */}
// <div 
//   className={`${styles.quote} ${animationPhase >= 4 ? styles.visible : ''}`}
// >
//   <span className={styles.quoteText}>
//     {displayedQuote}
//     {displayedQuote.length < fullQuote.length && (
//       <span className={styles.cursor}>|</span>
//     )}
//   </span>
// </div>
          
//           {/* CTA Button */}
//           <div 
//             ref={floatingRef}
//             className={`${styles.ctaContainer} ${animationPhase >= 5 ? styles.visible : ''}`}
//           >
//             <button 
//               className={styles.ctaButton}
//               onClick={scrollToContact}
//               aria-label="Scroll to contact section"
//             >
//               <span>Let's Connect</span>
//               <div className={styles.ctaIcon}>
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//                   <path 
//                     d="M5 12h14M12 5l7 7-7 7" 
//                     stroke="currentColor" 
//                     strokeWidth="2" 
//                     strokeLinecap="round" 
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;