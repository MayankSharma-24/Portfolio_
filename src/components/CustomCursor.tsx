import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const springX = useSpring(-100, { stiffness: 450, damping: 35 });
  const springY = useSpring(-100, { stiffness: 450, damping: 35 });

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [data-cursor], [role="button"], input, textarea');
      if (interactiveEl) {
        setIsHovered(true);
        const customText = interactiveEl.getAttribute('data-cursor');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [springX, springY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer follow ring with editorial border */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#242424]/60 backdrop-blur-[2px] transition-all duration-200 flex items-center justify-center ${
          isHovered
            ? 'w-16 h-16 bg-[#242424]/10 border-[#242424] scale-110'
            : 'w-8 h-8 bg-transparent border-[#242424]/40'
        }`}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#242424]">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <div
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`,
        }}
        className={`fixed top-0 left-0 rounded-full bg-[#242424] transition-all duration-150 ${
          isHovered ? 'w-2 h-2 scale-0 opacity-0' : 'w-1.5 h-1.5 opacity-90'
        }`}
      />
    </div>
  );
};
