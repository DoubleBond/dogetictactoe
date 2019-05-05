import { Player } from "./players/Player";

export class Board {
  private array: Player[];
  private moves: number;

  public constructor() {
    this.moves = 0;
    this.array = new Array(9).fill(null);
  }

  /**
   * Sets a move on the board.
   *
   * @param position Which position to set.
   * @param player Which player is setting the move.
   */
  public move(position: number, player: Player): boolean {
    if (this.array[position] !== null) {
      return false;
    }

    this.array = [...this.array];
    this.array[position] = player;

    this.moves++;
    return true;
  }

  /**
   * Gets the total number of moves that was placed on the board.
   *
   * @returns The total number of moves.
   */
  public getMoves(): number {
    return this.moves;
  }

  /**
   * Gets the 3 by 3 board in a flat single array.
   *
   * @returns The array of players on the board.
   */
  public getBoard(): Player[] {
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
  public clone(): Board {
    const board = new Board();
    board.array = this.getBoard();
    board.moves = this.moves;
    return board;
  }
}
