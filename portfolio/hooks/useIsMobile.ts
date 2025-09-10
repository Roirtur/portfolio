"use client";

import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const checkMobile = () => {
      // Check screen width (tablets and smaller)
      const isSmallScreen = window.innerWidth <= 1024;
      
      // Check user agent for mobile devices
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      
      // Check for touch support
      const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // More aggressive mobile detection - any small screen OR mobile device OR touch support
      setIsMobile(isSmallScreen || isMobileDevice || (hasTouchSupport && window.innerWidth <= 1200));
    };

    // Check on mount
    checkMobile();

    // Check on resize with debounce
    let timeoutId: NodeJS.Timeout;
    const debouncedCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', debouncedCheck);
    window.addEventListener('orientationchange', checkMobile);
    
    return () => {
      window.removeEventListener('resize', debouncedCheck);
      window.removeEventListener('orientationchange', checkMobile);
      clearTimeout(timeoutId);
    };
  }, [isClient]);

  // Return false during SSR to avoid hydration mismatch
  return isClient ? isMobile : false;
};
