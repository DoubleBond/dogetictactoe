import { Board } from "./Board";
import { Player } from "./players/Player";

export class TicTacToe {
  public board: Board;
  public players: Player[];
  public player_turn: number;

  public constructor(player_1: Player, player_2: Player) {
    this.players = [player_1, player_2];
    this.board = new Board();

    this.player_turn = 0;
  }

  public getCurrentPlayer() {
    return this.players[this.player_turn];
  }

  public newGame() {
    this.player_turn = ++this.player_turn % 2;
    this.board = new Board();
  }

  public getGameStatus() {
    if (this.board.num_moves < 3) return -2;
    if (this.board.checkWinner()) return this.player_turn;
    if (this.board.num_moves == 9) return -1;
    return -2;
  }

  public nextPlayer() {
    this.player_turn = ++this.player_turn % 2;
  }

  public makeMove(position: number) {
    return this.board.setMove(position, this.player_turn);
  }
}
