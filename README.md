# Mars Rover Kata

## Introduction

This problem sets the plateau for the Rover and given a starting position with direction of the Rover, followed by a set of instructions to move the Rover, will give the final position of the Rover after executing the instructions.

## Structure

There is a plateau,rover,instruction defined by the specific files and functions that help set/get and execute instructions.
Direction has to be one of "N|S|E|W". The types are made a constant, so they can be extended in future.
Instruction has to be one of "L|M|R", again has the potential to be extended to add another instruction.
Plateau contains position(x,y) and a list of tuples in "occupied" key which is used to avoid collision while moving rover.
Changing direction uses a lookuptable which currently supports only 4 directions but can be used to extend to more in future.

## Assumptions

The starting position of a plateau is always set to [0,0].
If the rover is at any border of the plateau, it will not move beyond the boundary.

## To run the files

The program can be executed using
npm start  
followed by inputs in the following format
Plateau border: 5 5
Rover position: 1 2 N
Instruction : LMLMLMLMM
or npm test tests/rover.test.ts.
The test file creates a rover with plateau and position and instruction.

## To improve

The user input has not been tested extensively. I haven't trimmed the extra spaces if any.So any wrong input would currently throw an error.
