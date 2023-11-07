import { Plateau, Grid, Position } from "./plateau";
export const INSTRUCTIONS = ["L", "R", "M"] as const;
export type Instruction = (typeof INSTRUCTIONS)[number];

export const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type Direction = (typeof DIRECTIONS)[number];

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
  rover.currentPosition = { position: position, isOccupied: true };
  rover.currentDirection = direction;
}
export function getCurrentRoverPosition(myRover: Rover): Position {
  console.log(myRover.currentPosition.position);
  console.log(myRover.currentPosition.isOccupied);

  return myRover.currentPosition.position;
}
//used to get the value to know where to move for L|R
const directionLookupTable = {
  NL: "W", // Current dir:N,Instruction:L, resulting dir:W
  NR: "E",
  SL: "E",
  SR: "W",
  ER: "S",
  EL: "N",
  WR: "N",
  WL: "S",
};
