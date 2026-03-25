import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Use refs for positions and scales to avoid closure/lag issues
  const mouse = useRef({ x: 0, y: 0 });
  const outline = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const scales = useRef({ dot: 1, outline: 1 });
  const isVisible = useRef(true);

  useEffect(() => {
    // Check if device is a touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId;

    const updatePosition = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      
      if (!isVisible.current) {
        isVisible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (outlineRef.current) outlineRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (outlineRef.current) outlineRef.current.style.opacity = '0';
    };

    const animate = () => {
      // Lerp scales for smooth hover transitions
      const targetDotScale = isHoveringRef.current ? 3 : 1;
      scales.current.dot += (targetDotScale - scales.current.dot) * 0.2;

      const targetOutlineScale = isHoveringRef.current ? 1.5 : 1;
      scales.current.outline += (targetOutlineScale - scales.current.outline) * 0.15;

      // Dot follows exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) scale(${scales.current.dot})`;
      }

      // Smooth trailing outline
      outline.current.x += (mouse.current.x - outline.current.x) * 0.25;
      outline.current.y += (mouse.current.y - outline.current.y) * 0.25;

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outline.current.x}px, ${outline.current.y}px, 0) scale(${scales.current.outline})`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const isCustomCursorTarget = 
        e.target.tagName?.toLowerCase() === 'a' ||
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList?.contains('cursor-pointer');
        
      isHoveringRef.current = !!isCustomCursorTarget;
      setIsHovering(!!isCustomCursorTarget);
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mouseout', handleMouseLeave, { passive: true });
    
    animate();

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] -ml-1.5 -mt-1.5 mix-blend-difference will-change-transform transition-opacity duration-300 opacity-0"
      ></div>
      <div 
        ref={outlineRef}
        className={`fixed top-0 left-0 w-12 h-12 border rounded-full pointer-events-none z-[9998] -ml-6 -mt-6 mix-blend-difference transition-[colors,opacity] duration-300 will-change-transform opacity-0 ${isHovering ? 'border-white/10 bg-white/10' : 'border-white/50 bg-transparent'}`}
      ></div>
    </>
  );
};

export default CustomCursor;
