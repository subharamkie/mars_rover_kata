import { Plateau, Grid, Position } from "./plateau";
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
  currentPosition: Grid;
  currentDirection: Direction;
};
//set rover position
export function setRoverPosition(
  position: Position,
  direction: Direction,
  rover: Rover
): void {
  rover.currentPosition = { position: position };
  rover.currentDirection = direction;
}
export function getCurrentRoverPosition(myRover: Rover): Position {
  console.log(myRover.currentPosition.position);
  return myRover.currentPosition.position;
}
export function moveRover(instruction: string, rover: Rover): string {
  //need to parse input
  //split the string into an array
  const instructionArray = instruction.split("");
  let i: Instruction;
  instructionArray.forEach((element) => {
    if (isInstruction(element)) {
      i = element as Instruction;
      rover = executeInstruction(i, rover);
    }
  });
  console.log(
    `${rover.currentPosition.position[0]} ${rover.currentPosition.position[1]} ${rover.currentDirection}`
  );
  return `${rover.currentPosition.position[0]} ${rover.currentPosition.position[1]} ${rover.currentDirection}`;
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
          newPos = [
            rover.currentPosition.position[0] + 1,
            rover.currentPosition.position[1],
          ];

          rover.currentPosition.position = newPos;
          break;
        case "W": //x-1,y
          newPos = [
            rover.currentPosition.position[0] - 1,
            rover.currentPosition.position[1],
          ];

          rover.currentPosition.position = newPos;
          break;
        case "N": //x,y+1
          newPos = [
            rover.currentPosition.position[0],
            rover.currentPosition.position[1] + 1,
          ];

          rover.currentPosition.position = newPos;
          break;
        case "S": //x,y-1
          newPos = [
            rover.currentPosition.position[0],
            rover.currentPosition.position[1] - 1,
          ];

          rover.currentPosition.position = newPos;
          break;
      }
      break;
  }
  return rover;
}

function isInstruction(input: string): input is Instruction {
  return INSTRUCTIONS.includes(input as Instruction);
}
