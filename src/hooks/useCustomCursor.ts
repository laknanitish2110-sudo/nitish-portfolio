import { useState, useEffect } from 'react';

export interface CursorState {
  x: number;
  y: number;
  hoveredElement: string | null;
  isHovered: boolean;
  cursorText: string;
}

export function useCustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: -100,
    y: -100,
    hoveredElement: null,
    isHovered: false,
    cursorText: '',
  });

  useEffect(() => {
    // Check if pointer fine device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hoverable = target?.closest('[data-cursor]');
      const clickable = target?.closest('a, button, [role="button"]');

      let cursorText = '';
      let isHovered = false;
      let hoveredElement = null;

      if (hoverable) {
        isHovered = true;
        cursorText = hoverable.getAttribute('data-cursor-text') || 'VIEW';
        hoveredElement = hoverable.getAttribute('data-cursor') || 'element';
      } else if (clickable) {
        isHovered = true;
        hoveredElement = 'clickable';
      }

      setCursorState({
        x: e.clientX,
        y: e.clientY,
        hoveredElement,
        isHovered,
        cursorText,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return cursorState;
}
