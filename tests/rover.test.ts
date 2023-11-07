import { Instruction, Direction, Rover } from "../src/rover_types";
import {
  setRoverPosition,
  getCurrentRoverPosition,
  moveRover,
} from "../src/rover_types";
import { Position } from "../src/plateau";
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
    const myPosition: Position = [1, 2];
    const myDir: Direction = "N";
    const myInstruction = "LM";
    //Act
    setRoverPosition(myPosition, myDir, myRover);
    const finalPos: string = moveRover(myInstruction, myRover);
    //Assert
    expect(finalPos).toEqual("0 2 W");
  });
});
