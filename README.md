## DO NOT EDIT THIS TEMPLATE. CLICK THE FORK OPTION ON THE TOP RIGHT TO CONTINUE!

## Calculate Openings and Closings of a Scissor

Our task is to figure out how many times scissor was used at a manufacturing plant. Imagine we have used a computer vision model which returns us the frame by frame data on how the scissors are moving.

1. It returns three sets of coordinates (x, y): **center**, **top**, **bottom**.
2. **Closed Threshold**: When top and bottom blades are below this threshold, we assume scissors are closed. You can decide how you want to define this value, and justify why you chose it.
3. **Open Threshold**: When top and bottom blades are beyong this threshold, we assume scissors are opened. You can decide how you want to define this value, and justify why you chose it.

Here's a graph that represents visually (move the slider for variable a): [https://www.desmos.com/calculator/6cvrampqhh](https://www.desmos.com/calculator/6cvrampqhh)

Look at the image below:

![baseline](https://i.imgur.com/QgTZoJj.png)

### Algorithm and Examples

There are few frames files provided in `frames` folder. We shall run algorithm one by one on each of these files. Each file represents series of coordinates for the three keypoints, and the task is to calculate the number of times scissors were opened and closed. Here are some examples to clarify the different cases:
![examples](https://i.imgur.com/mi5Ia1s.png)

### Questions to think about (No code needed)

#### Feel free to write small answers for them below

Besides these examples, there are a lot of other cases how the data could be collect, for example, they data captured could be zoomed in, or zoomed out.

![zoom](https://i.imgur.com/bqvBXr6.png)

1. What would be the other different orientations/cases that are possible?
   **a. If the entire scissor is shifted within the frame, the coordinates of all the blades would change accordingly.**
   **b. Movements of multiple scissors could overlap in the frame, making it challenging to track individual openings and closings.**
2. How would you update your algorithm (if you need to) for these new cases in (1)
   **a. If the scissor is shifted, apply the identical translation vector to the blade coordinates to bring them into a common reference frame.**
   **b. If there are multiple scissors, it would require scissor tracking and identification techniques to distinguish between different scissors. Each scissor's state changes should be tracked separately.**
3. For testing purposes, if you had to generate frames data, how would you go about it?
4. **I would use graphics libraries such as OpenGL to create scissor movements and capture frame data. This frame simulation approach gives you precise control over the scissor's behavior.**
