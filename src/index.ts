import { clear, print, askQuestion } from "./ui/console";
import { createEmptyPlateau, isPositionInPlateau } from "./plateau";
import * as RoverObj from "./rover";
import { isDirection, Rover, Plateau, Position } from "./types";

let roverPlateau: Plateau = {} as Plateau;
const myRover: Rover = {} as Rover;

export function beginInput(): void {
  clear(false);
  print("--------------------------");
  print("| Welcome to Mars! |");
  print("--------------------------");

  askQuestion(
    `What's your plateau size? Enter in form of "number number" `,
    startMission
  );
}

function startMission(input: string): void {
  if (input) {
    const numbers = input.split(" ").map(Number);
    if (numbers.length === 2) {
      const pos = checkInputIsNumber(input);
      if (pos) {
        roverPlateau = createEmptyPlateau(pos);
        if (roverPlateau) {
          print("--------------------------");
          print("******* Your plateau is set *******");
          askQuestion(
            `Where's the Rover in the plateau? Enter in form of "number number N|S|E|W" `,
            parseRoverInput
          );
        }
      }
    } else {
      throw new Error(
        "Wrong input.Please provide correct input in the given format"
      );
    }
  } else {
    throw new Error(
      "Wrong input.Please provide correct input in the given format"
    );
  }
  return;
}

function parseRoverInput(input: string): void {
  //  check if rover position is a number and direction is one of N|S|E|W
  const inputSplit = input.split(" ");
  if (inputSplit.length === 3) {
    //look for numbers in first 2 indices if length is 3,if not throw error
    const position: Position = checkInputIsNumber(input.substring(0, 3));
    //check if position is within boundary and direction is valid
    if (
      position &&
      isDirection(inputSplit[2]) &&
      isPositionInPlateau(position, roverPlateau)
    ) {
      RoverObj.setRoverPlateau(roverPlateau, myRover);
      RoverObj.setRoverPositionOnPlateau(position, inputSplit[2], myRover);

      askQuestion(
        `What's the instruction for the Rover? Enter in form of "LMR..." `,
        parseInstruction
      );
    } else {
      throw new Error(
        "Rover position must be within boundary. Please try again with the correct input"
      );
    }
  } else {
    throw new Error("Wrong input. Please try again with the correct input");
  }
  return;
}
function checkInputIsNumber(input: string): Position {
  const inputSplit = input.split(" ");
  const tempVar1 = parseInt(inputSplit[0]);
  const tempVar2 = parseInt(inputSplit[1]);
  if (isNaN(tempVar1) || isNaN(tempVar2)) {
    throw new Error("Wrong input. Please try again with the correct input");
  }
  if (tempVar1 < 0 || tempVar2 < 0) {
    throw new Error("Wrong input. Please try again with the correct input");
  }
  return [tempVar1, tempVar2];
}
function parseInstruction(input: string) {
  if (input !== "") {
    print(
      "**** The Rover has moved to " +
        RoverObj.moveRover(input, myRover) +
        " ****"
    );
  }
  return endMission();
}
export function endMission(): void {
  print("***************************************");
  askQuestion("Press ENTER to restart! ", beginInput);
}

beginInput();
