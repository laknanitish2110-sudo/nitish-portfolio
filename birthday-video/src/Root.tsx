import { Composition } from "remotion";
import { BirthdayVideo } from "./BirthdayVideo";
import { MEDIA_ITEMS } from "./mediaConfig";

const FPS = 30;
const SCENE_DURATION = 4 * FPS; // 4 seconds per scene
const TRANSITION_DURATION = Math.floor(0.8 * FPS); // 0.8s transitions
const INTRO_DURATION = 3 * FPS;
const OUTRO_DURATION = 5 * FPS;

const totalScenes = MEDIA_ITEMS.length;
const totalDuration =
  INTRO_DURATION +
  totalScenes * SCENE_DURATION -
  (totalScenes - 1) * TRANSITION_DURATION +
  OUTRO_DURATION;

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
          friendName: "Friend",
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
          friendName: "Friend",
        }}
      />
    </>
  );
};
