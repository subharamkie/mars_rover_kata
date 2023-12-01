import * as PlateauObj from "./plateau";
import * as RoverObj from "./rover";
import { INSTRUCTIONS, Instruction, directionLookupTable } from "./types";
export function isInstruction(input: string): input is Instruction {
  return INSTRUCTIONS.includes(input as Instruction);
}

export function executeInstruction(
  instruction: Instruction,
  rover: RoverObj.Rover
): RoverObj.Rover {
  switch (instruction) {
    case "R":
    case "L":
      //change direction
      rover.currentDirection =
        directionLookupTable[rover.currentDirection + instruction];
      break;
    case "M":
      //move one square in the current direction
      //add check for boundary
      let newPos: PlateauObj.Position;
      switch (rover.currentDirection) {
        case "E": //x+1,y
          newPos = [rover.currentPosition[0] + 1, rover.currentPosition[1]];
          break;
        case "W": //x-1,y
          newPos = [rover.currentPosition[0] - 1, rover.currentPosition[1]];

          break;
        case "N": //x,y+1
          newPos = [rover.currentPosition[0], rover.currentPosition[1] + 1];

          break;
        case "S": //x,y-1
          newPos = [rover.currentPosition[0], rover.currentPosition[1] - 1];

          break;
      }
      //check if within boundary
      if (
        PlateauObj.checkPlateauBoundary(
          rover.currentPosition,
          rover.plateau,
          rover.currentDirection
        ) &&
        !PlateauObj.isOccupied(rover.plateau, newPos)
      ) {
        //remove the currnt position from occupied list
        PlateauObj.deletePlateauOccupiedPosition(
          rover.plateau,
          rover.currentPosition
        );
        rover.currentPosition = newPos;
        PlateauObj.addPlateauOccupiedPosition(rover.plateau, newPos);
      }

      break;
  }
  return rover;
}
