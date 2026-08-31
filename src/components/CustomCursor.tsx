import React, { useEffect, useState } from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const CustomCursor: React.FC = () => {
  const { x, y, isHovered, cursorText } = useCustomCursor();
  const [pos, setPos] = useState({ x: -100, y: -100 });

  // Smooth lerp follower for dot and ring
  useEffect(() => {
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updatePosition = () => {
      setPos((prev) => ({
        x: lerp(prev.x, x, 0.2),
        y: lerp(prev.y, y, 0.2),
      }));
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, [x, y]);

  // Don't render on touch devices or before initial mouse move
  if (x < 0 || y < 0) return null;

  return (
    <>
      {/* Outer Circle Ring */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-50 flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          isHovered
            ? 'h-16 w-16 -ml-8 -mt-8 border border-[#00F0FF]/80 bg-[#00F0FF]/10 backdrop-blur-[2px]'
            : 'h-8 w-8 -ml-4 -mt-4 border border-white/20 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#00F0FF] uppercase">
            {cursorText}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-50 h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#00F0FF] transition-opacity duration-200 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`,
        }}
      />
    </>
  );
};
