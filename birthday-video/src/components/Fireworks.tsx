import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

interface Spark {
  angle: number;
  speed: number;
  color: string;
  size: number;
}

interface Burst {
  cx: number;
  cy: number;
  startFrame: number;
  sparks: Spark[];
}

export const Fireworks: React.FC<{ startFrame?: number; burstCount?: number }> = ({
  startFrame = 0,
  burstCount = 5,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const bursts = useMemo<Burst[]>(() => {
    const colors = ["#e8c46c", "#e87c8a", "#b8a9d4", "#7eb8d4", "#f5efe6", "#ffd700"];
    return Array.from({ length: burstCount }, (_, bi) => {
      const r = ((bi * 31337 + 7919) % 233280) / 233280;
      const r2 = ((bi * 49297 + 9301) % 233280) / 233280;
      return {
        cx: width * 0.15 + r * width * 0.7,
        cy: height * 0.15 + r2 * height * 0.35,
        startFrame: startFrame + bi * 18,
        sparks: Array.from({ length: 40 }, (_, si) => {
          const sr = ((si * 7919 + bi * 13397) % 233280) / 233280;
          const sr2 = ((si * 13397 + bi * 7919) % 233280) / 233280;
          return {
            angle: sr * Math.PI * 2,
            speed: sr2 * 4 + 2,
            color: colors[Math.floor(sr * colors.length)],
            size: sr2 * 3 + 1.5,
          };
        }),
      };
    });
  }, [burstCount, startFrame, width, height]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {bursts.map((burst, bi) => {
        const t = frame - burst.startFrame;
        if (t < 0 || t > 60) return null;
        return burst.sparks.map((spark, si) => {
          const px = burst.cx + Math.cos(spark.angle) * spark.speed * t;
          const py = burst.cy + Math.sin(spark.angle) * spark.speed * t + 0.08 * t * t;
          const opacity = interpolate(t, [0, 20, 50, 60], [0, 1, 0.6, 0], {
            extrapolateRight: "clamp",
          });
          return (
            <div
              key={`${bi}-${si}`}
              style={{
                position: "absolute",
                left: px,
                top: py,
                width: spark.size,
                height: spark.size,
                borderRadius: "50%",
                backgroundColor: spark.color,
                opacity,
                boxShadow: `0 0 ${spark.size * 3}px ${spark.color}`,
              }}
            />
          );
        });
      })}
    </div>
  );
};
