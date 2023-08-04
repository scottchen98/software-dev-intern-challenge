/***************************************************************************************
                   !!  DO NOT EDIT THIS TEMPLATE   !!
          !!  CLICK THE FORK OPTION ON THE TOP RIGHT TO CONTINUE !!
/***************************************************************************/

/*************  Frames provided to test out your algorithm   ***************/

import frames1 from "./frames/frames1.json";
import frames2 from "./frames/frames2.json";
import frames3 from "./frames/frames3.json";
import frames4 from "./frames/frames4.json";
import frames5 from "./frames/frames5.json";
import frames6 from "./frames/frames6.json";
import frames7 from "./frames/frames7.json";

/***************************************************************************/
import {
  startWithClosedFrame,
  OPEN_THRESHOLD,
  CLOSED_THRESHOLD,
} from "./helper";
import { Frame } from "./IFrame";

const calculateOpenings = (frames: Frame[]): number => {
  let openings = 0;
  let isOpen = false;

  // Update "frames" variable so that the dataset begins
  // when the scissors are closed
  const newFrames = startWithClosedFrame(frames, CLOSED_THRESHOLD);

  // Loop through the frames
  for (const frame of newFrames) {
    const { y2 } = frame;

    // If the scissors are open, set isOpen to true
    if (y2 > OPEN_THRESHOLD && !isOpen) {
      isOpen = true;
    }

    // If the scissors are closed and isOpen is true,
    // increment the openings counter and set isOpen to false
    if (y2 < CLOSED_THRESHOLD && isOpen) {
      openings++;
      isOpen = false;
    }
  }

  console.log(`**** Openings: ${openings} ****`);
  return openings;
};

// Run the following with different frame JSON files
calculateOpenings(frames1);
calculateOpenings(frames2);
calculateOpenings(frames3);
calculateOpenings(frames4);
calculateOpenings(frames5);
calculateOpenings(frames6);
calculateOpenings(frames7);
