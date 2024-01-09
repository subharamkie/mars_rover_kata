//plateau has a starting tuple (0,0 by default)

import { Direction } from "./types";

//plateau has a max tuple (maxX,maxY) based on user input
export type Position = [x: number, y: number];
export type Plateau = {
  bottomLeftCorner: Position;
  topRightCorner: Position;
  occupied: Position[];
};

export function createEmptyPlateau(coordinates: Position): Plateau {
  const myPlateau: Plateau = {
    topRightCorner: coordinates,
    bottomLeftCorner: [0, 0], //set to 0,0 by default
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
      return position[1] < plateau.topRightCorner[1];
    case "S":
      //check for y boundary
      return position[1] > plateau.bottomLeftCorner[1];
    case "E":
      //check for x boundary
      return position[0] < plateau.topRightCorner[0];
    case "W":
      //check for x boundary
      return position[0] > plateau.bottomLeftCorner[0];
    default:
      return false;
  }
}

export function isPositionInPlateau(position: Position, plateau: Plateau) {
  return (
    position[0] >= plateau.bottomLeftCorner[0] &&
    position[0] <= plateau.topRightCorner[0] &&
    position[1] >= plateau.bottomLeftCorner[1] &&
    position[1] <= plateau.topRightCorner[1]
  );
}
