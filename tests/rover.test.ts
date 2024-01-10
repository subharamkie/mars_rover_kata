import {
  createEmptyRover,
  getCurrentRoverPosition,
  setRoverPlateau,
} from "../src/rover";
import { Direction, Plateau, Position, Rover } from "../src/types";
import { setRoverPosition, moveRover } from "../src/rover";
import { createEmptyPlateau } from "../src/plateau";
import { it } from "node:test";
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

describe("Rover functions test", () => {
  it("create empty rover having position as [0,0] & direction empty", () => {
    const myRover: Rover = createEmptyRover();
    expect(myRover.currentDirection).toEqual("");
  });
  it("set rover position", () => {
    const myRover: Rover = createEmptyRover();
    setRoverPosition([2, 2] as Position, "N", myRover);
    expect(myRover.currentDirection).toEqual("N");
    expect(myRover.currentPosition).toEqual([2, 2]);
  });

  it("set rover plateau test", () => {
    const myRover = createEmptyRover();
    const newPlateau = createEmptyPlateau([4, 4]);
    setRoverPlateau(newPlateau, myRover);
    expect(myRover.plateau).toEqual(newPlateau);
  });
  it("get currect position", () => {
    const myRover: Rover = createEmptyRover();
    setRoverPosition([2, 2] as Position, "N", myRover);
    expect(getCurrentRoverPosition(myRover)).toEqual([2, 2]);
  });
});
describe("Move Rover from instruction set", () => {
  it("Find the final position of Rover", () => {
    //Arrange
    const myRover = {} as Rover;
    const myPosition: Position = [3, 3];
    const myDir: Direction = "E";
    const myInstruction = "MMRMMRMRRM";
    //const myPlateau = createEmptyPlateau([5, 5]);
    const myPlateau: Plateau = {
      bottomLeftCorner: [0, 0],
      topRightCorner: [5, 5],
      occupied: [],
    };
    setRoverPosition(myPosition, myDir, myRover);
    setRoverPlateau(myPlateau, myRover);
    //myRover.plateau = myPlateau;
    //Act
    const finalPos: string = moveRover(myInstruction, myRover);
    //Assert
    expect(finalPos).toEqual("5 1 E");
  });
});
