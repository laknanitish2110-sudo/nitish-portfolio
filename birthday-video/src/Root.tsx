import { Composition } from "remotion";
import { BirthdayVideo, calculateTotalDuration } from "./BirthdayVideo";

const FPS = 30;
const totalDuration = calculateTotalDuration(FPS);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BirthdayVideo"
        component={BirthdayVideo}
        durationInFrames={totalDuration}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{
          friendName: "Mani",
        }}
      />
      <Composition
        id="BirthdayVideoLandscape"
        component={BirthdayVideo}
        durationInFrames={totalDuration}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{
          friendName: "Mani",
        }}
      />
    </>
  );
};
