import { Board } from "./Board";
import { Player } from "./players/Player";

export enum TicTacToeGameState {
  IN_PROGRESS,
  WINNING,
  TIE
}

export interface TicTacToeState {
  state: TicTacToeGameState;
  board: Player[];
  player: Player;
  winner: Player;
}

export class TicTacToe {
  private board: Board;
  private players: Player[];
  private playerState: number;

  public constructor(playerOne: Player, playerTwo: Player) {
    this.players = [playerOne, playerTwo];
    this.board = new Board();

    this.playerState = 0;
  }

  /**
   * Returns the entire game state, see TicTacToeState interface.
   */
  public getState(): TicTacToeState {
    const state = this.getGameState();
    return {
      state,
      board: this.board.getBoardArrayState(),
      player: this.getCurrentPlayer(),
      winner:
        state === TicTacToeGameState.WINNING
          ? this.players[(this.playerState + 1) % 2]
          : null
    };
  }

  /**
   * Makes a move a board. If the move is invalide the state wont change.
   *
   * @param position The position the player was to move.
   */
  public makeMove(position: number) {
    if (this.board.setMove(position, this.getCurrentPlayer())) {
      this.nextPlayer();
      return true;
    }
    return false;
  }

  private getCurrentPlayer() {
    return this.players[this.playerState];
  }

  private getGameState(): TicTacToeGameState {
    if (this.board.getNumberOfMoves() < 3) {
      return TicTacToeGameState.IN_PROGRESS;
    }

    if (this.board.hasWinner()) {
      return TicTacToeGameState.WINNING;
    }

    if (this.board.getNumberOfMoves() == 9) {
      return TicTacToeGameState.TIE;
    }

    return TicTacToeGameState.IN_PROGRESS;
  }

  private nextPlayer() {
    this.playerState = ++this.playerState % 2;
  }
}
