export const INSTRUCTIONS = ["L", "R", "M"] as const;
export type Instruction = (typeof INSTRUCTIONS)[number];
export const DIRECTIONS = ["N", "S", "E", "W"] as const;
export type Direction = (typeof DIRECTIONS)[number];

export const directionLookupTable: { [key: string]: Direction } = {
  NL: "W", // Current dir:N,Instruction:L, resulting dir:W
  NR: "E",
  SL: "E",
  SR: "W",
  ER: "S",
  EL: "N",
  WR: "N",
  WL: "S",
};

export function isDirection(input: string): input is Direction {
  return DIRECTIONS.includes(input as Direction);
}
