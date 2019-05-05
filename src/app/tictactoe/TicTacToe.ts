import { Board } from "./Board";
import { Player } from "./players/Player";

export enum TicTacToeGameStatus {
  IN_PROGRESS,
  WINNING,
  TIE
}

export interface TicTacToeGameState {
  status: TicTacToeGameStatus;
  board: Player[];
  player: Player;
  winner: Player;
}

export class TicTacToe {
  private board: Board;
  private players: Player[];
  private playing: Player;
  private cache: TicTacToeGameState;

  public constructor(players: Player[]) {
    this.players = [...players];
    this.board = new Board();

    this.playing = this.players[0];
  }

  /**
   * Returns the entire game state, see TicTacToeGameState interface.
   *
   * @returns A TicTacToeGameState object.
   */
  public get state(): TicTacToeGameState {
    if (!this.cache) {
      const status = this.status;
      this.cache = {
        status,
        board: this.board.getBoard(),
        player: this.playing,
        winner:
          status === TicTacToeGameStatus.WINNING ? this.getNextPlayer() : null
      };
    }
    return this.cache;
  }

  /**
   * Makes a move on the board. If the move is invalide the state wont change.
   *
   * @param position The position the player was to move.
   * @returns Boolean if state has changed.
   */
  public move(position: number): boolean {
    if (
      this.state.status === TicTacToeGameStatus.IN_PROGRESS &&
      this.board.move(position, this.playing)
    ) {
      this.playing = this.getNextPlayer();
      this.cache = null;
      return true;
    }
    return false;
  }

  /**
   * Returns game status.
   *
   * @returns The TicTacToeGameStatus status.
   */
  private get status(): TicTacToeGameStatus {
    if (this.board.getMoves() < 3) {
      return TicTacToeGameStatus.IN_PROGRESS;
    }

    if (this.board.hasWinner()) {
      return TicTacToeGameStatus.WINNING;
    }

    if (this.board.getMoves() === 9) {
      return TicTacToeGameStatus.TIE;
    }

    return TicTacToeGameStatus.IN_PROGRESS;
  }

  /**
   * Returns the next player.
   *
   * @returns A Player.
   */
  private getNextPlayer(): Player {
    return this.players[0] === this.playing ? this.players[1] : this.players[0];
  }

  /**
   * Clones a game, and returns and instance copy.
   *
   * @returns A complete TicTacToe clone.
   */
  public clone(): TicTacToe {
    const game = new TicTacToe(this.players);
    game.cache = this.cache;
    game.playing = this.playing;
    game.board = this.board.clone();

    return game;
  }
}
