import { Frame } from "./IFrame";

// Since frame values are between 0 and 1,
// let's set the closed threshold to 0.1 and the open threshold to 0.5
export const CLOSED_THRESHOLD = 0.1; // This would have a small positive and negative y-coordinate difference which indicates the scissors are closed
export const OPEN_THRESHOLD = 0.5; // This would have a significant positive and negative y-coordinate difference which indicates the scissors are open

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
