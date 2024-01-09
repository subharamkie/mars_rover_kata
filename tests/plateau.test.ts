import { createEmptyPlateau } from "../src/plateau";
import { Plateau } from "../src/plateau";

describe("Plateau tests", () => {
  it("Check if plateau is created with given boundary", () => {
    const myPlateau: Plateau = createEmptyPlateau([5, 5]);
    expect(myPlateau.bottomLeftCorner).toEqual([0, 0]);
    expect(myPlateau.topRightCorner).toEqual([5, 5]);
    expect(myPlateau.occupied).toEqual([]);
  });
});
