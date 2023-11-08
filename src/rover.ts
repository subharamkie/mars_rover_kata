import * as PlateauObj from "./plateau";
import * as InstructionObj from "./instruction";
export const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type Direction = (typeof DIRECTIONS)[number];

//used to get the value to know where to move for L|R
export const directionLookupTable: { [key: string]: Direction } = {
  NL: "W", // Current dir:N,Instruction:L, resulting dir:W
  NR: "E",
  SL: "E",
  SR: "W",
  ER: "S",
  EL: "N",
  WR: "N",
  WL: "S",
};

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
  console.log(myRover.currentPosition[0], myRover.currentPosition[1]);
  return myRover.currentPosition;
}
export function moveRover(instruction: string, rover: Rover): string {
  //need to parse input
  //split the string into an array
  const instructionArray = instruction.split("");
  let i: InstructionObj.Instruction;
  instructionArray.forEach((element) => {
    console.log("current instruction:" + element);
    if (InstructionObj.isInstruction(element)) {
      i = element as InstructionObj.Instruction;
      rover = InstructionObj.executeInstruction(i, rover);
    } else {
      throw new Error("invalid instruction");
    }
  });
  console.log(
    `${rover.currentPosition[0]} ${rover.currentPosition[1]} ${rover.currentDirection}`
  );
  return `${rover.currentPosition[0]} ${rover.currentPosition[1]} ${rover.currentDirection}`;
}
