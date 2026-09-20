import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

interface ConfettiPiece {
  x: number;
  angle: number;
  speed: number;
  color: string;
  w: number;
  h: number;
  rotSpeed: number;
  delay: number;
}

export const ConfettiBurst: React.FC<{
  startFrame?: number;
  count?: number;
}> = ({ startFrame = 0, count = 60 }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const relFrame = frame - startFrame;

  const pieces = useMemo<ConfettiPiece[]>(() => {
    const colors = ["#e8c46c", "#e87c8a", "#b8a9d4", "#7eb8d4", "#f5efe6", "#d4a84b", "#c4606e"];
    return Array.from({ length: count }, (_, i) => {
      const r = ((i * 7919 + 104729) % 233280) / 233280;
      const r2 = ((i * 13397 + 51749) % 233280) / 233280;
      const r3 = ((i * 23497 + 71429) % 233280) / 233280;
      return {
        x: r * width,
        angle: r2 * Math.PI * 2,
        speed: r3 * 5 + 3,
        color: colors[Math.floor(r * colors.length)],
        w: r2 * 10 + 5,
        h: r3 * 8 + 3,
        rotSpeed: (r - 0.5) * 15,
        delay: r2 * 10,
      };
    });
  }, [count, width]);

  if (relFrame < 0) return null;

  const burstProgress = spring({ frame: relFrame, fps, config: { damping: 80 } });

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {pieces.map((p, i) => {
        const t = Math.max(0, relFrame - p.delay);
        if (t <= 0) return null;
        const cx = width / 2;
        const cy = height * 0.35;
        const gravity = 0.15;
        const vx = Math.cos(p.angle) * p.speed * burstProgress;
        const vy = Math.sin(p.angle) * p.speed * burstProgress;
        const px = cx + vx * t;
        const py = cy + vy * t + gravity * t * t;
        const opacity = interpolate(t, [0, 60, 90], [1, 1, 0], { extrapolateRight: "clamp" });
        if (opacity <= 0) return null;
        const rot = t * p.rotSpeed;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: px,
              top: py,
              width: p.w,
              height: p.h,
              backgroundColor: p.color,
              opacity,
              transform: `rotate(${rot}deg)`,
              borderRadius: 1,
            }}
          />
        );
      })}
    </div>
  );
};
