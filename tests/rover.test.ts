import { Rover } from "../src/rover";
import { Direction } from "../src/types";
import { setRoverPosition, moveRover } from "../src/rover";
import { Plateau, Position, setPlateauMaxBoundary } from "../src/plateau";
/*
describe("Set current position of rover", () => {
  it("check if position is set", () => {
    //Arrange
    const myRover = {} as Rover;
    const myPosition: Position = [1, 2];
    const myDir: Direction = "N";
    //Act
    setRoverPosition(myPosition, myDir, myRover);
    //Assert
    expect(getCurrentRoverPosition(myRover)).toEqual(myPosition);
  });
});
*/
describe("Move Rover from instruction set", () => {
  it("Find the final position of Rover", () => {
    //Arrange
    const myRover = {} as Rover;
    const myPosition: Position = [3, 3];
    const myDir: Direction = "E";
    const myInstruction = "MMRMMRMRRM";
    //const myPlateau = setPlateauMaxBoundary([5, 5]);
    const myPlateau: Plateau = {
      startingGrid: [0, 0],
      maxGrid: [5, 5],
      occupied: [],
    };
    myRover.plateau = myPlateau;
    //Act
    setRoverPosition(myPosition, myDir, myRover);
    const finalPos: string = moveRover(myInstruction, myRover);
    //Assert
    expect(finalPos).toEqual("5 1 E");
  });
});
