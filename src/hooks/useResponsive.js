import { useState, useEffect } from 'react';
import { AppDimensions } from '../core/constants/dimensions.js';

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobileBreakpoint = parseInt(AppDimensions.mobileBreakpoint);
      const tabletBreakpoint = parseInt(AppDimensions.tabletBreakpoint);
      
      setScreenSize({
        isMobile: width < mobileBreakpoint,
        isTablet: width >= mobileBreakpoint && width < tabletBreakpoint,
        isDesktop: width >= tabletBreakpoint,
        width,
      });
    };

    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};