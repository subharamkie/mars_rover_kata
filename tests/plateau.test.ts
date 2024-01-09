import { setPlateauMaxBoundary } from "../src/plateau";
import { Plateau } from "../src/plateau";
describe("Set the bounding box for the plateau", () => {
  it("Set boundary for plateau", () => {
    const test: Plateau = { bottomLeftCorner: [0, 0], topRightCorner: [0, 0] };
    const returnObj: Plateau = {
      bottomLeftCorner: [0, 0],
      topRightCorner: [5, 5],
    };
    expect(setPlateauMaxBoundary([5, 5], test)).toMatchObject(returnObj);
  });
});
