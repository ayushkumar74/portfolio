import { useEffect, useRef } from 'react';

export default function useMouseTilt(reverse = false, amount = 15) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        if (window.matchMedia('(pointer: coarse)').matches) return;

        let frameId;
        const handleMouseMove = (e) => {
            if (frameId) cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                
                // Normalizes coordinates from -1 to 1 based on screen size
                const xPos = (clientX / innerWidth - 0.5) * 2;
                const yPos = (clientY / innerHeight - 0.5) * 2;

                const rotateX = reverse ? yPos * amount : yPos * -amount;
                const rotateY = reverse ? xPos * -amount : xPos * amount;

                element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
        };

        const handleMouseLeave = () => {
            if (frameId) cancelAnimationFrame(frameId);
            element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        };

        const parent = element.parentElement; // Track mouse over container for smoother transitions
        if(parent) {
             parent.addEventListener('mousemove', handleMouseMove);
             parent.addEventListener('mouseleave', handleMouseLeave);
        } else {
             window.addEventListener('mousemove', handleMouseMove);
             window.addEventListener('mouseout', handleMouseLeave);
        }

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
            if(parent) {
                parent.removeEventListener('mousemove', handleMouseMove);
                parent.removeEventListener('mouseleave', handleMouseLeave);
            } else {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseout', handleMouseLeave);
            }
        };
    }, [reverse, amount]);

    return ref;
}
