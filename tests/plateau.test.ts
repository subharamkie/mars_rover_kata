import {
  createEmptyPlateau,
  deletePlateauOccupiedPosition,
  addPlateauOccupiedPosition,
} from "../src/plateau";
import { Plateau, Position } from "../src/types";
import { expect, describe, it } from "@jest/globals";

describe("Plateau tests", () => {
  it("Check if plateau is created with given boundary", () => {
    const myPlateau: Plateau = createEmptyPlateau([5, 5]);
    expect(myPlateau.bottomLeftCorner).toEqual([0, 0]);
    expect(myPlateau.topRightCorner).toEqual([5, 5]);
    expect(myPlateau.occupied).toEqual([]);
  });
  it("Check if plateau can't be created with 0 area", () => {
    expect(() => createEmptyPlateau([0, 0])).toThrow(Error);
  });
  it("Check if plateau top x coord is not negative,i.e top right corner is not to the left of bottom left corner ", () => {
    expect(() => createEmptyPlateau([-1, 0])).toThrow(
      "Plateau coordinates have to be positive"
    );
  });
  it("Check if plateau top y corrd is not negative,i,e top right corner is not below the bottom left ", () => {
    expect(() => createEmptyPlateau([4, -1])).toThrow(
      "Plateau coordinates have to be positive"
    );
  });

  it("Check if plateau validates removal of occupied position correctly", () => {
    const myPlateau: Plateau = createEmptyPlateau([5, 5]);
    expect(() => deletePlateauOccupiedPosition(myPlateau, [1, 1])).toThrow(
      Error
    );
  });
});

describe("addPlateauOccupiedPosition", () => {
  it("should add a position to the plateau", () => {
    const plateau = createEmptyPlateau([5, 5]);
    const newPosition: Position = [1, 1];
    const newPlateau = addPlateauOccupiedPosition(plateau, newPosition);
    expect(newPlateau.occupied).toContainEqual(newPosition);
  });

  it("should throw an error for an invalid position", () => {
    const plateau = createEmptyPlateau([5, 5]);
    const invalidPosition: Position = [6, 6];
    expect(() => addPlateauOccupiedPosition(plateau, invalidPosition)).toThrow(
      "Invalid position"
    );
  });
});
/////////////////////////////////////////////////
describe("deletePlateauOccupiedPosition", () => {
  it("should delete a position from the plateau", () => {
    const initialPosition: Position = [1, 1];
    const plateau = createEmptyPlateau([5, 5]);
    const plateauWithPosition = addPlateauOccupiedPosition(
      plateau,
      initialPosition
    );

    const newPlateau = deletePlateauOccupiedPosition(
      plateauWithPosition,
      initialPosition
    );
    expect(newPlateau.occupied).not.toContainEqual(initialPosition);
  });

  it("should throw an error if position is not found", () => {
    const plateau = createEmptyPlateau([5, 5]);
    const nonExistingPosition: Position = [2, 2];
    expect(() =>
      deletePlateauOccupiedPosition(plateau, nonExistingPosition)
    ).toThrow("Position is empty");
  });
});
