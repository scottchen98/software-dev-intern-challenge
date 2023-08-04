// Define the closed and open thresholds
const CLOSED_THRESHOLD = 0.2;
const OPEN_THRESHOLD = 0.2;

interface Frame {
  // center
  x1: number;
  y1: number;
  // top
  x2: number;
  y2: number;
  // bottom
  x3: number;
  y3: number;
}

const startWithClosedFrame = (frames: Frame[], threshold: number) => {
  for (const [index, frame] of frames.entries()) {
    const { y2 } = frame;
    // Here we only compare the y2 value, assuming the scissors
    // are symmetrical when they are opened
    if (y2 < threshold) {
      return frames.slice(index);
    }
  }
};
