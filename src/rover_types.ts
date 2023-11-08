import { Plateau, Position, checkPlateauBoundary } from "./plateau";
export const INSTRUCTIONS = ["L", "R", "M"] as const;
export type Instruction = (typeof INSTRUCTIONS)[number];

export const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type Direction = (typeof DIRECTIONS)[number];

//used to get the value to know where to move for L|R
const directionLookupTable: { [key: string]: Direction } = {
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
  currentPosition: Position;
  currentDirection: Direction;
  plateau: Plateau;
};
//set rover position
export function setRoverPosition(
  position: Position,
  direction: Direction,
  rover: Rover
): void {
  rover.currentPosition = position;
  rover.currentDirection = direction;
}
export function setRoverPlateau(plateau: Plateau, rover: Rover) {
  rover.plateau = plateau;
}
export function getCurrentRoverPosition(myRover: Rover): Position {
  console.log(myRover.currentPosition[0], myRover.currentPosition[1]);
  return myRover.currentPosition;
}
export function moveRover(instruction: string, rover: Rover): string {
  //need to parse input
  //split the string into an array
  const instructionArray = instruction.split("");
  let i: Instruction;
  instructionArray.forEach((element) => {
    console.log("current instruction:" + element);
    if (isInstruction(element)) {
      i = element as Instruction;
      rover = executeInstruction(i, rover);
    }
  });
  console.log(
    `${rover.currentPosition[0]} ${rover.currentPosition[1]} ${rover.currentDirection}`
  );
  return `${rover.currentPosition[0]} ${rover.currentPosition[1]} ${rover.currentDirection}`;
}
function executeInstruction(instruction: Instruction, rover: Rover): Rover {
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
      let newPos: Position;
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
        checkPlateauBoundary(
          rover.currentPosition,
          rover.plateau,
          rover.currentDirection
        )
      ) {
        console.log("new position set");
        rover.currentPosition = newPos;
        console.log(
          `${rover.currentPosition[0]} ${rover.currentPosition[1]} ${rover.currentDirection}`
        );
      }

      break;
  }
  return rover;
}

function isInstruction(input: string): input is Instruction {
  return INSTRUCTIONS.includes(input as Instruction);
}
