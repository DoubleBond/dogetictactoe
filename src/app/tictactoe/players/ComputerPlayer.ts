import { Player } from "./Player";
import { Board } from "../Board";

export class ComputerPlayer extends Player {
  constructor(name: string) {
    super(name, require("../../../assets/doge.jpg"));
  }

  public getMove(board: Board): number {}
}
