//plateau has a starting tuple (0,0 by default)

import { Direction, Plateau, Position } from "./types";

//plateau has a max tuple (maxX,maxY) based on user input

export function createEmptyPlateau(coordinates: Position): Plateau {
  //assert here that plateau cant be [0,0]
  if (coordinates[0] > 0 && coordinates[1] > 0) {
    const myPlateau: Plateau = {
      topRightCorner: coordinates,
      bottomLeftCorner: [0, 0], //set to 0,0 by default
      occupied: [],
    };
    return myPlateau;
  } else {
    console.log("here");
    throw new Error("Plateau coordinates have to be positive");
  }
}

export function addPlateauOccupiedPosition(
  plateau: Plateau,
  position: Position
) {
  if (isPositionInPlateau(position, plateau)) {
    plateau.occupied.push(position);
    return plateau;
  } else {
    throw new Error("Invalid position");
  }
}

export function deletePlateauOccupiedPosition(
  plateau: Plateau,
  position: Position
) {
  const index = plateau.occupied.findIndex((item) =>
    item.every((value, i) => value === position[i])
  );

  if (index !== -1) {
    plateau.occupied.splice(index, 1);
    return plateau;
  }
  throw new Error("Position is empty");
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
