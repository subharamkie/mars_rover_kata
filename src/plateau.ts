//plateau has a starting tuple (0,0 by default)
//plateau has a max tuple (maxX,maxY) based on user input
export type Position = [x: number, y: number];
export type Grid = {
  position: Position;
  //isOccupied: boolean;
};
export type Plateau = {
  startingGrid: Position;
  maxGrid: Position;
};
export function setPlateauMaxBoundary(coordinates: Position, plateau: Plateau) {
  plateau.maxGrid = coordinates;
  plateau.startingGrid = [0, 0]; //set to 0,0 by default
  console.log(plateau.maxGrid);
}
