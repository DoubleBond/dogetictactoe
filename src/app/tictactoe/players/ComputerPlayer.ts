import { Player } from "./Player";
import { Board } from "../Board";

export class ComputerPlayer extends Player {
  constructor(name: string) {
    super(name);
  }

  public getMove(board: Board) {}
}
