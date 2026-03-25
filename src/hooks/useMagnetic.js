import { useEffect, useRef } from 'react';

export default function useMagnetic(strength = 0.5) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Skip on mobile devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const rectRef = { current: null };

        const updateRect = () => {
            rectRef.current = element.getBoundingClientRect();
        };

        const xTo = (x) => {
            element.style.transform = `translate3d(${x}px, ${element.dataset.my || 0}px, 0)`;
            element.dataset.mx = x;
        };
        const yTo = (y) => {
            element.style.transform = `translate3d(${element.dataset.mx || 0}px, ${y}px, 0)`;
            element.dataset.my = y;
        };

        const handleMouseMove = (e) => {
            if (!rectRef.current) updateRect();
            const { clientX, clientY } = e;
            const { height, width, left, top } = rectRef.current;
            
            const x = (clientX - (left + width / 2)) * strength;
            const y = (clientY - (top + height / 2)) * strength;
            
            xTo(x);
            yTo(y);
        };

        const handleMouseEnter = () => {
            updateRect();
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        element.addEventListener('mousemove', handleMouseMove, { passive: true });
        element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
        element.addEventListener('mouseleave', handleMouseLeave, { passive: true });
        window.addEventListener('resize', updateRect);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', updateRect);
        };
    }, [strength]);

    return ref;
}
