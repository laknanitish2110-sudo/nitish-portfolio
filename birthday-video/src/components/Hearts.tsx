import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

interface HeartData {
  x: number;
  startY: number;
  size: number;
  speed: number;
  delay: number;
  wobbleAmp: number;
  wobbleFreq: number;
  color: string;
}

const HeartShape: React.FC<{ size: number; color: string }> = ({ size, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const FloatingHearts: React.FC<{
  count?: number;
  startFrame?: number;
}> = ({ count = 15, startFrame = 0 }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const hearts = useMemo<HeartData[]>(() => {
    const colors = ["#e87c8a", "#e8c46c", "#c4606e", "#b8a9d4", "#ff6b81"];
    return Array.from({ length: count }, (_, i) => {
      const r = ((i * 31337 + 49297) % 233280) / 233280;
      const r2 = ((i * 49297 + 31337) % 233280) / 233280;
      const r3 = ((i * 7919 + 13397) % 233280) / 233280;
      return {
        x: r * width * 0.8 + width * 0.1,
        startY: height + 40,
        size: r2 * 24 + 14,
        speed: r3 * 2.5 + 1,
        delay: r * 40 + startFrame,
        wobbleAmp: r2 * 30 + 10,
        wobbleFreq: r3 * 0.08 + 0.03,
        color: colors[Math.floor(r * colors.length)],
      };
    });
  }, [count, startFrame, width, height]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {hearts.map((h, i) => {
        const t = Math.max(0, frame - h.delay);
        if (t <= 0) return null;
        const y = h.startY - t * h.speed;
        if (y < -50) return null;
        const x = h.x + Math.sin(t * h.wobbleFreq) * h.wobbleAmp;
        const opacity = interpolate(y, [-50, height * 0.1, height * 0.8], [0, 0.7, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const scale = interpolate(t, [0, 10], [0.3, 1], { extrapolateRight: "clamp" });
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              opacity,
              transform: `scale(${scale})`,
            }}
          >
            <HeartShape size={h.size} color={h.color} />
          </div>
        );
      })}
    </div>
  );
};
