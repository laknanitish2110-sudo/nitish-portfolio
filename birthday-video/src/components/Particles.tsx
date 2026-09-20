import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  color: string;
  wobbleAmp: number;
  wobbleFreq: number;
}

export const FloatingParticles: React.FC<{ count?: number; colors?: string[] }> = ({
  count = 30,
  colors = ["#e8c46c", "#e87c8a", "#b8a9d4", "#7eb8d4", "rgba(255,255,255,0.5)"],
}) => {
  const frame = useCurrentFrame();
  const { height, width } = useVideoConfig();

  const particles = useMemo<Particle[]>(() => {
    const seed = 42;
    return Array.from({ length: count }, (_, i) => {
      const r = ((seed * (i + 1) * 9301 + 49297) % 233280) / 233280;
      const r2 = ((seed * (i + 2) * 9301 + 49297) % 233280) / 233280;
      const r3 = ((seed * (i + 3) * 9301 + 49297) % 233280) / 233280;
      return {
        x: r * width,
        y: r2 * height,
        size: r3 * 4 + 1,
        speed: r * 0.5 + 0.2,
        delay: r2 * 100,
        color: colors[Math.floor(r3 * colors.length)],
        wobbleAmp: r * 20 + 5,
        wobbleFreq: r2 * 0.05 + 0.02,
      };
    });
  }, [count, width, height, colors]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {particles.map((p, i) => {
        const t = frame + p.delay;
        const y = ((p.y - t * p.speed) % (height + 20) + height + 20) % (height + 20) - 10;
        const x = p.x + Math.sin(t * p.wobbleFreq) * p.wobbleAmp;
        const opacity = interpolate(
          Math.sin(t * 0.03 + i),
          [-1, 1],
          [0.15, 0.6]
        );
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: p.color,
              opacity,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            }}
          />
        );
      })}
    </div>
  );
};
