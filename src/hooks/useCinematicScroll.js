import { useEffect, useRef } from 'react';

/**
 * useCinematicScroll
 * Applies Apple-style directional enter/exit animations to each .cinema-section.
 *
 * States:
 *   .is-active → fully visible (opacity 1, translateY 0)
 *   .is-above  → exited up (opacity 0, translateY -48px)
 *   .is-below  → waiting below (opacity 0, translateY 56px)
 */
export const useCinematicScroll = () => {
  useEffect(() => {
    const sectionElements = Array.from(document.querySelectorAll('.cinema-section'));
    if (sectionElements.length === 0) return;

    const updateClasses = () => {
      const scrollY = window.scrollY;
      const vpHeight = window.innerHeight;
      const centerY = scrollY + vpHeight / 2;

      let closestIdx = 0;
      let minDistance = Infinity;

      sectionElements.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        const secCenter = rect.top + scrollY + rect.height / 2;
        const dist = Math.abs(centerY - secCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = i;
        }
      });

      sectionElements.forEach((sec, i) => {
        sec.classList.remove('is-active', 'is-above', 'is-below');
        if (i === closestIdx) {
          sec.classList.add('is-active');
        } else if (i < closestIdx) {
          sec.classList.add('is-above');
        } else {
          sec.classList.add('is-below');
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        requestAnimationFrame(updateClasses);
      }
    }, { threshold: [0, 0.1, 0.5, 0.9] });

    sectionElements.forEach(sec => observer.observe(sec));
    
    updateClasses();

    window.addEventListener('resize', () => {
      updateClasses();
    }, { passive: true });

    return () => {
      sectionElements.forEach(sec => observer.unobserve(sec));
      observer.disconnect();
    };
  }, []);
};
