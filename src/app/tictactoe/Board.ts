import { Player } from "./players/Player";

export class Board {
  private array: Player[];
  private numMoves: number;

  public constructor() {
    this.numMoves = 0;
    this.array = new Array(9).fill(null);
  }

  /**
   * Sets a move on the board.
   *
   * @param position Which position to set.
   * @param player Which player is setting the move.
   */
  public setMove(position: number, player: Player): boolean {
    if (this.array[position] !== null) {
      return false;
    }

    this.array = [...this.array];
    this.array[position] = player;

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
    return this.array;
  }

  /**
   * Checks if the board has a winner.
   * I know it doesn't look pretty but it fullfills the requirements. #softwareengineering
   */
  public hasWinner(): boolean {
    //Horizontal Check
    if (
      this.array[0] !== null &&
      this.array[0] === this.array[1] &&
      this.array[0] === this.array[2]
    )
      return true;
    if (
      this.array[3] !== null &&
      this.array[3] === this.array[4] &&
      this.array[3] === this.array[5]
    )
      return true;
    if (
      this.array[6] !== null &&
      this.array[6] === this.array[7] &&
      this.array[6] === this.array[8]
    )
      return true;

    //Vertical Check
    if (
      this.array[0] !== null &&
      this.array[0] === this.array[3] &&
      this.array[0] === this.array[6]
    )
      return true;
    if (
      this.array[1] !== null &&
      this.array[1] === this.array[4] &&
      this.array[1] === this.array[7]
    )
      return true;
    if (
      this.array[2] !== null &&
      this.array[2] === this.array[5] &&
      this.array[2] === this.array[8]
    )
      return true;

    //Diagonal Check
    if (
      this.array[0] !== null &&
      this.array[0] === this.array[4] &&
      this.array[0] === this.array[8]
    )
      return true;
    if (
      this.array[2] !== null &&
      this.array[2] === this.array[4] &&
      this.array[2] === this.array[6]
    )
      return true;

    return false;
  }

  /**
   * Clones the board.
   */
  public clone() {
    const board = new Board();
    board.array = this.getBoardArrayState();
    board.numMoves = this.numMoves;
    return board;
  }
}
