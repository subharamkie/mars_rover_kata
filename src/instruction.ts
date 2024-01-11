import * as PlateauObj from "./plateau";
import * as RoverObj from "./rover";
import {
  INSTRUCTIONS,
  Instruction,
  directionLookupTable,
  Rover,
} from "./types";

export function isInstruction(input: string): input is Instruction {
  return INSTRUCTIONS.includes(input as Instruction);
}

export function executeInstruction(
  instruction: Instruction,
  rover: Rover
): Rover {
  switch (instruction) {
    case "R":
    case "L":
      //change direction
      rover.currentDirection =
        directionLookupTable[rover.currentDirection + instruction];
      break;
    case "M":
      let newPos = RoverObj.getNewPosition(
        rover.currentPosition,
        rover.currentDirection
      );
      //check if within boundary
      if (
        PlateauObj.isPositionInPlateau(newPos, rover.plateau) &&
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
    default:
      throw new Error("Invalid instruction");
      break;
  }
  return rover;
}
