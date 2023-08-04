import { Frame } from "./IFrame";

// Since frame values are between 0 and 1, let's use 0.1 as the threshold
export const CLOSED_THRESHOLD = 0.1;
export const OPEN_THRESHOLD = 0.1;

export const startWithClosedFrame = (
  frames: Frame[],
  threshold: number
): Frame[] => {
  for (const [index, frame] of frames.entries()) {
    const { y2 } = frame;
    // Here we only compare the y2 value, assuming the scissors
    // are symmetrical when they are opened
    if (y2 < threshold) {
      return frames.slice(index);
    }
  }
};
