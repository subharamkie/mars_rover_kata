//plateau has a starting tuple (0,0 by default)

import { Direction } from "./types";

//plateau has a max tuple (maxX,maxY) based on user input
export type Position = [x: number, y: number];
export type Plateau = {
  startingGrid: Position;
  maxGrid: Position;
  occupied: Position[];
};
export function setPlateauMaxBoundary(coordinates: Position): Plateau {
  const myPlateau: Plateau = {
    maxGrid: coordinates,
    startingGrid: [0, 0], //set to 0,0 by default
    occupied: [],
  };
  return myPlateau;
}

export function addPlateauOccupiedPosition(
  plateau: Plateau,
  position: Position
) {
  plateau.occupied.push(position);
}

export function deletePlateauOccupiedPosition(
  plateau: Plateau,
  position: Position
) {
  plateau.occupied.splice(
    plateau.occupied.findIndex((item) => item === position),
    1
  );
}

export function isOccupied(plateau: Plateau, position: Position): boolean {
  return plateau.occupied.includes(position);
}

export function checkPlateauBoundary(
  position: Position,
  plateau: Plateau,
  currentDirection: Direction
): boolean {
  switch (currentDirection) {
    case "N":
      //check for y boundary
      return position[1] < plateau.maxGrid[1];
    case "S":
      //check for y boundary
      return position[1] > plateau.startingGrid[1];
    case "E":
      //check for x boundary
      return position[0] < plateau.maxGrid[0];
    case "W":
      //check for x boundary
      return position[0] > plateau.startingGrid[0];
    default:
      return false;
  }
}
