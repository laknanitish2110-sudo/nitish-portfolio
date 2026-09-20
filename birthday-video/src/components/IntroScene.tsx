import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { TextReveal } from "./TextReveal";
import { FloatingParticles } from "./Particles";
import { ConfettiBurst } from "./Confetti";

export const IntroScene: React.FC<{ friendName: string }> = ({ friendName }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isPortrait = height > width;

  const ringScale = spring({
    frame: Math.max(0, frame - 5),
    fps,
    config: { damping: 15, mass: 1.2 },
  });

  const ringOpacity = interpolate(frame, [0, 20, 80, 90], [0, 0.5, 0.5, 0], {
    extrapolateRight: "clamp",
  });

  const ringSize = isPortrait ? 320 : 280;

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
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,196,108,0.15) 0%, transparent 70%)",
          top: "15%",
          left: "-5%",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,124,138,0.12) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
          filter: "blur(60px)",
        }}
      />

      <FloatingParticles count={25} />

      {/* Glow ring */}
      <div
        style={{
          position: "absolute",
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: "2px solid rgba(232,196,108,0.2)",
          boxShadow: "0 0 60px rgba(232,196,108,0.1), inset 0 0 60px rgba(232,196,108,0.05)",
          opacity: ringOpacity,
          transform: `scale(${ringScale})`,
        }}
      />

      {/* Eyebrow */}
      <TextReveal
        text="A CINEMATIC TRIBUTE"
        startFrame={10}
        fontSize={isPortrait ? 14 : 13}
        fontFamily="'Helvetica Neue', sans-serif"
        fontWeight={500}
        color="#e8c46c"
        letterSpacing="0.3em"
        textTransform="uppercase"
      />

      <div style={{ height: isPortrait ? 24 : 16 }} />

      {/* Main title */}
      <TextReveal
        text={`Happy\nBirthday,\n${friendName}!`}
        startFrame={20}
        fontSize={isPortrait ? 80 : 64}
        fontFamily="'Georgia', serif"
        fontWeight={700}
        color="#f5efe6"
        lineHeight={1.05}
        glow
        glowColor="rgba(232,196,108,0.25)"
      />

      <div style={{ height: isPortrait ? 20 : 12 }} />

      {/* Cake emoji */}
      <div
        style={{
          fontSize: isPortrait ? 72 : 56,
          opacity: spring({ frame: Math.max(0, frame - 35), fps, config: { damping: 20 } }),
          transform: `scale(${spring({ frame: Math.max(0, frame - 35), fps, config: { damping: 12, mass: 0.8 } })})`,
          filter: "drop-shadow(0 0 30px rgba(232,196,108,0.4))",
        }}
      >
        🎂
      </div>

      <ConfettiBurst startFrame={30} count={50} />
    </div>
  );
};
