//import { afterEach,  } from "node:test";
import { expect, beforeEach, describe, it } from "@jest/globals";

import { executeInstruction, isInstruction } from "../src/instruction";
import * as RoverObj from "../src/rover";
import * as PlateauObj from "../src/plateau";
import { Instruction, Plateau, Rover, isDirection } from "../src/types";

describe("executeInstruction function", () => {
  let rover: Rover;
  let plateau: Plateau;

  beforeEach(() => {
    rover = RoverObj.createEmptyRover();
    plateau = PlateauObj.createEmptyPlateau([5, 5]);
    RoverObj.setRoverPlateau(plateau, rover);
    RoverObj.setRoverPositionOnPlateau([0, 0], "N", rover);
  });

  it("should change direction for R instruction", () => {
    const result = executeInstruction("R", rover);
    expect(result.currentDirection).toEqual("E");
  });

  it("should change direction for L instruction", () => {
    const result = executeInstruction("L", rover);
    expect(result.currentDirection).toEqual("W");
  });

  it("should move within plateau boundaries for M instruction", () => {
    const result = executeInstruction("M", rover);
    expect(result.currentPosition).toEqual([0, 1]);
    expect(result.plateau.occupied).toEqual([[0, 1]]);
  });

  it("should handle moving outside plateau boundaries for M instruction", () => {
    const result = executeInstruction("M", rover);
    expect(result).toEqual(rover);
  });

  it("should handle moving to an occupied position for M instruction", () => {
    rover.plateau.occupied = [...rover.plateau.occupied, [0, 1]];
    const result = executeInstruction("M", rover);

    expect(result).toEqual(rover);
  });

  it("Is istruction with correct input", () => {
    expect(isInstruction("L")).toEqual(true);
  });
  it("Is istruction with correct input", () => {
    expect(isInstruction("D")).toEqual(false);
  });
});
