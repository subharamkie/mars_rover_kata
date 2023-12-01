import { setPlateauMaxBoundary } from "../src/plateau";
import { Plateau } from "../src/plateau";
describe("Set the bounding box for the plateau", () => {
  it("Set boundary for plateau", () => {
    const test: Plateau = { startingGrid: [0, 0], maxGrid: [0, 0] };
    const returnObj: Plateau = { startingGrid: [0, 0], maxGrid: [5, 5] };
    expect(setPlateauMaxBoundary([5, 5], test)).toMatchObject(returnObj);
  });
});
