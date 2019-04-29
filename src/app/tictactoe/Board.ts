import { Player } from "./players/Player";

export class Board {
  private boardArray: Player[];
  private numMoves: number;

  public constructor() {
    this.numMoves = 0;
    this.boardArray = new Array(9).fill(null);
  }

  /**
   * Sets a move on the board.
   *
   * @param position Which position to set.
   * @param player Which player is setting the move.
   */
  public setMove(position: number, player: Player): boolean {
    if (this.boardArray[position] !== null) {
      return false;
    }

    this.boardArray[position] = player;
    this.numMoves++;
    return true;
  }

  /**
   * Gets the total number of moves that was placed on the board.
   */
  public getNumberOfMoves(): number {
    return this.numMoves;
  }

  /**
   * Gets the board state in numeric form.
   */
  public getBoardArrayState(): Player[] {
    return [...this.boardArray];
  }

  /**
   * Checks if the board has
   */
  public hasWinner(): boolean {
    //Horizontal Check
    if (
      this.boardArray[0] !== null &&
      this.boardArray[0] === this.boardArray[1] &&
      this.boardArray[0] === this.boardArray[2]
    )
      return true;
    if (
      this.boardArray[3] !== null &&
      this.boardArray[3] === this.boardArray[4] &&
      this.boardArray[3] === this.boardArray[5]
    )
      return true;
    if (
      this.boardArray[6] !== null &&
      this.boardArray[6] === this.boardArray[7] &&
      this.boardArray[6] === this.boardArray[8]
    )
      return true;

    //Vertical Check
    if (
      this.boardArray[0] !== null &&
      this.boardArray[0] === this.boardArray[3] &&
      this.boardArray[0] === this.boardArray[6]
    )
      return true;
    if (
      this.boardArray[1] !== null &&
      this.boardArray[1] === this.boardArray[4] &&
      this.boardArray[1] === this.boardArray[7]
    )
      return true;
    if (
      this.boardArray[2] !== null &&
      this.boardArray[2] === this.boardArray[5] &&
      this.boardArray[2] === this.boardArray[8]
    )
      return true;

    //Diagonal Check
    if (
      this.boardArray[0] !== null &&
      this.boardArray[0] === this.boardArray[4] &&
      this.boardArray[0] === this.boardArray[8]
    )
      return true;
    if (
      this.boardArray[2] !== null &&
      this.boardArray[2] === this.boardArray[4] &&
      this.boardArray[2] === this.boardArray[6]
    )
      return true;

    return false;
  }
}
