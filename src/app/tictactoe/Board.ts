export class Board {
  public board_array: number[];
  public num_moves: number;

  public constructor() {
    this.num_moves = 0;
    this.board_array = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  }

  public setMove(position: number, player_index: number): boolean {
    if (this.board_array[position] != -1) return false;

    this.board_array[position] = player_index;
    this.num_moves++;
    return true;
  }

  /**
   * O(1), for the win.
   */
  public checkWinner() {
    //Horizontal Check
    if (
      this.board_array[0] !== -1 &&
      this.board_array[0] == this.board_array[1] &&
      this.board_array[0] == this.board_array[2]
    )
      return true;
    if (
      this.board_array[3] !== -1 &&
      this.board_array[3] == this.board_array[4] &&
      this.board_array[3] == this.board_array[5]
    )
      return true;
    if (
      this.board_array[6] !== -1 &&
      this.board_array[6] == this.board_array[7] &&
      this.board_array[6] == this.board_array[8]
    )
      return true;

    //Vertical Check
    if (
      this.board_array[0] !== -1 &&
      this.board_array[0] == this.board_array[3] &&
      this.board_array[0] == this.board_array[6]
    )
      return true;
    if (
      this.board_array[1] !== -1 &&
      this.board_array[1] == this.board_array[4] &&
      this.board_array[1] == this.board_array[7]
    )
      return true;
    if (
      this.board_array[2] !== -1 &&
      this.board_array[2] == this.board_array[5] &&
      this.board_array[2] == this.board_array[8]
    )
      return true;

    //Diagonal Check
    if (
      this.board_array[0] !== -1 &&
      this.board_array[0] == this.board_array[4] &&
      this.board_array[0] == this.board_array[8]
    )
      return true;
    if (
      this.board_array[2] !== -1 &&
      this.board_array[2] == this.board_array[4] &&
      this.board_array[2] == this.board_array[6]
    )
      return true;

    return false;
  }
}
