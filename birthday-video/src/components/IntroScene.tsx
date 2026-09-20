import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { SlamText } from "./TextReveal";
import { FloatingParticles } from "./Particles";
import { ConfettiBurst } from "./Confetti";

export const IntroScene: React.FC<{ friendName: string }> = ({ friendName }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isPortrait = height > width;

  const flashOpacity = interpolate(frame, [0, 3, 8], [1, 0.9, 0], {
    extrapolateRight: "clamp",
  });

  const ringSize = isPortrait ? 360 : 300;
  const ringScale = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 12, mass: 1.5 },
  });
  const ringOpacity = interpolate(frame, [5, 15, 70, 85], [0, 0.6, 0.6, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const ring2Scale = spring({
    frame: Math.max(0, frame - 12),
    fps,
    config: { damping: 15, mass: 1 },
  });
  const ring2Opacity = interpolate(frame, [12, 22, 65, 80], [0, 0.3, 0.3, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lensFlareX = interpolate(frame, [0, 90], [-width * 0.3, width * 1.3], {
    extrapolateRight: "clamp",
  });
  const lensFlareOpacity = interpolate(frame, [10, 30, 60, 80], [0, 0.4, 0.3, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const eyebrowOpacity = spring({
    frame: Math.max(0, frame - 15),
    fps,
    config: { damping: 30 },
  });

  const cakeSpring = spring({
    frame: Math.max(0, frame - 50),
    fps,
    config: { damping: 8, mass: 0.6 },
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#0a0a12",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Opening white flash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#fff",
          opacity: flashOpacity,
          zIndex: 50,
        }}
      />

      {/* Ambient orbs */}
      {[
        { x: "-8%", y: "12%", size: 400, color: "rgba(232,196,108,0.18)" },
        { x: "80%", y: "75%", size: 350, color: "rgba(232,124,138,0.14)" },
        { x: "50%", y: "30%", size: 300, color: "rgba(184,169,212,0.10)" },
      ].map((orb, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            left: orb.x,
            top: orb.y,
            filter: "blur(50px)",
            transform: `scale(${1 + 0.1 * Math.sin(frame * 0.03 + i)})`,
          }}
        />
      ))}

      <FloatingParticles count={35} colors={["rgba(232,196,108,0.4)", "rgba(232,124,138,0.3)", "rgba(255,215,0,0.3)"]} />

      {/* Lens flare streak */}
      <div
        style={{
          position: "absolute",
          left: lensFlareX,
          top: "45%",
          width: 200,
          height: 3,
          background: "linear-gradient(90deg, transparent, rgba(232,196,108,0.8), rgba(255,255,255,0.9), rgba(232,196,108,0.8), transparent)",
          opacity: lensFlareOpacity,
          filter: "blur(2px)",
          zIndex: 10,
        }}
      />

      {/* Concentric glow rings */}
      <div
        style={{
          position: "absolute",
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: "2px solid rgba(232,196,108,0.25)",
          boxShadow: "0 0 80px rgba(232,196,108,0.15), inset 0 0 80px rgba(232,196,108,0.05)",
          opacity: ringOpacity,
          transform: `scale(${ringScale})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: ringSize * 1.4,
          height: ringSize * 1.4,
          borderRadius: "50%",
          border: "1px solid rgba(232,196,108,0.12)",
          boxShadow: "0 0 40px rgba(232,196,108,0.06)",
          opacity: ring2Opacity,
          transform: `scale(${ring2Scale})`,
        }}
      />

      {/* Eyebrow text */}
      <div
        style={{
          opacity: eyebrowOpacity,
          transform: `translateY(${(1 - eyebrowOpacity) * 15}px)`,
          fontSize: isPortrait ? 15 : 13,
          fontFamily: "'Helvetica Neue', sans-serif",
          fontWeight: 500,
          color: "#e8c46c",
          letterSpacing: "0.35em",
          textTransform: "uppercase" as const,
          textAlign: "center" as const,
          marginBottom: isPortrait ? 24 : 16,
        }}
      >
        A CINEMATIC TRIBUTE
      </div>

      {/* SLAM title */}
      <SlamText
        text={`Happy\nBirthday,\n${friendName}!`}
        startFrame={18}
        fontSize={isPortrait ? 84 : 66}
        glowColor="rgba(232,196,108,0.35)"
      />

      <div style={{ height: isPortrait ? 28 : 16 }} />

      {/* Cake with bounce */}
      <div
        style={{
          fontSize: isPortrait ? 80 : 60,
          opacity: cakeSpring,
          transform: `scale(${interpolate(cakeSpring, [0, 1], [0, 1.1])}) rotate(${interpolate(cakeSpring, [0, 0.5, 1], [0, -10, 0])}deg)`,
          filter: "drop-shadow(0 0 40px rgba(232,196,108,0.5))",
        }}
      >
        🎂
      </div>

      {/* Confetti bursts - staggered */}
      <ConfettiBurst startFrame={20} count={70} />
      <ConfettiBurst startFrame={40} count={40} />
    </div>
  );
};
