import { it } from "node:test";
import { Instruction, Direction, Rover } from "../src/rover_types";
import { setRoverPosition, getCurrentRoverPosition } from "../src/rover_types";
import { Position } from "../src/plateau";

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
