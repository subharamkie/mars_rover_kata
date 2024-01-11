import {
  createEmptyRover,
  getCurrentRoverPosition,
  getNewPosition,
  setRoverPlateau,
} from "../src/rover";
import { Direction, Plateau, Position, Rover } from "../src/types";
import { setRoverPositionOnPlateau, moveRover } from "../src/rover";
import { createEmptyPlateau } from "../src/plateau";
import { expect, beforeEach, describe, it } from "@jest/globals";

describe("Rover functions test", () => {
  it("create empty rover having position as [0,0] & direction empty", () => {
    const myRover: Rover = createEmptyRover();
    expect(myRover.currentDirection).toEqual("");
  });
  it("set rover position on plateau", () => {
    const myRover: Rover = createEmptyRover();
    expect(() =>
      setRoverPositionOnPlateau([2, 2] as Position, "N", myRover)
    ).toThrow(Error);
  });

  it("set rover's plateau test", () => {
    const myRover = createEmptyRover();
    const newPlateau = createEmptyPlateau([4, 4]);
    setRoverPlateau(newPlateau, myRover);
    expect(myRover.plateau).toEqual(newPlateau);
  });
  it("get Rover's current position", () => {
    const myRover: Rover = createEmptyRover();
    const newPlateau = createEmptyPlateau([4, 4]);
    setRoverPlateau(newPlateau, myRover);
    setRoverPositionOnPlateau([2, 2] as Position, "N", myRover);
    expect(getCurrentRoverPosition(myRover)).toEqual([2, 2]);
  });

  it("Check if getNewPosition returns correct value", () => {
    const myRover: Rover = createEmptyRover();
    const newPlateau = createEmptyPlateau([4, 4]);
    setRoverPlateau(newPlateau, myRover);
    setRoverPositionOnPlateau([2, 2] as Position, "N", myRover);
    expect(
      getNewPosition(myRover.currentPosition, myRover.currentDirection)
    ).toEqual([2, 3]);
  });
  it("Find the final position of Rover", () => {
    //Arrange
    const myRover: Rover = createEmptyRover();
    const newPlateau = createEmptyPlateau([5, 5]);
    setRoverPlateau(newPlateau, myRover);
    setRoverPositionOnPlateau([3, 3] as Position, "E", myRover);
    const myInstruction = "MMRMMRMRRM";

    //Act
    const finalPos: string = moveRover(myInstruction, myRover);
    //Assert
    expect(finalPos).toEqual("5 1 E");
  });
});
