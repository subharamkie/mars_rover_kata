import * as PlateauObj from "./plateau";
import * as InstructionObj from "./instruction";
import { Instruction, Direction, isDirection } from "./types";
//used to get the value to know where to move for L|R

export type Rover = {
  currentPosition: PlateauObj.Position;
  currentDirection: Direction;
  plateau: PlateauObj.Plateau;
};
//set rover position
export function setRoverPosition(
  position: PlateauObj.Position,
  direction: Direction,
  rover: Rover
): void {
  rover.currentPosition = position;
  rover.currentDirection = direction;
}
export function setRoverPlateau(plateau: PlateauObj.Plateau, rover: Rover) {
  rover.plateau = plateau;
  rover.plateau.occupied.push(rover.currentPosition);
}
export function getCurrentRoverPosition(myRover: Rover): PlateauObj.Position {
  return myRover.currentPosition;
}
export function moveRover(instruction: string, rover: Rover): string {
  //need to parse input
  //split the string into an array
  const instructionArray = instruction.split("");
  let i: Instruction;
  instructionArray.forEach((element) => {
    if (InstructionObj.isInstruction(element)) {
      i = element as Instruction;
      rover = InstructionObj.executeInstruction(i, rover);
    } else {
      throw new Error("invalid instruction");
    }
  });
  return `${rover.currentPosition[0]} ${rover.currentPosition[1]} ${rover.currentDirection}`;
}
