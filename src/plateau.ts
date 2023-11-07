//plateau has a starting tuple (0,0 by default)
//plateau has a max tuple (maxX,maxY) based on user input

export type Grid = [number, number];
export type Plateau = {
  startingGrid: Grid;
  maxGrid: Grid;
};
export function setPlateauMaxBoundary(grid: Grid, plateau: Plateau) {
  plateau.maxGrid = grid;
  //plateau.startingGrid = [0, 0];
  console.log(plateau.maxGrid);
}
