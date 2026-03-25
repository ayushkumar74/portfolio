import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Add CSS scope class to enable JS-based hide logic
    document.body.classList.add('js-reveal-enabled');

    const options = {
      threshold: 0, // Using 0 so very tall elements still trigger intersection
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Bi-directional: remove 'active' so re-entry reruns the animation
          // Only remove if the element is well above viewport (scrolling back up)
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove('active');
          }
        }
      });
    }, options);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);
};
