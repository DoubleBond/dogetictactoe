import m from "mithril";

import {
  TicTacToeState,
  TicTacToe,
  HumanPlayer,
  TicTacToeGameState,
  ComputerPlayer
} from "./tictactoe";
import { BoardComponent } from "./board.component";

export class GameComponent {
  private state: TicTacToeState;
  private game: TicTacToe;

  oninit() {
    this.setNewGame();

    document.addEventListener("keydown", event => {
      if (event.code === "Escape") {
        this.setNewGame();
        m.redraw();
      }
    });
  }

  setNewGame() {
    this.game = new TicTacToe(
      new HumanPlayer("Cate", require("../assets/cate.jpg")),
      new ComputerPlayer()
    );
    this.state = this.game.getState();
  }

  setMove(position: number) {
    if (
      this.gameState === TicTacToeGameState.IN_PROGRESS &&
      this.game.makeMove(position)
    ) {
      this.state = this.game.getState();
    }
    if (
      this.gameState === TicTacToeGameState.IN_PROGRESS &&
      this.player instanceof ComputerPlayer
    ) {
      this.game.makeMove(this.player.getMove(this.game));
      this.state = this.game.getState();
    }
  }

  get gameState() {
    return this.state.state;
  }

  get player() {
    return this.state.player;
  }

  get isTie() {
    return this.gameState === TicTacToeGameState.TIE;
  }

  get hasWinning() {
    return this.gameState === TicTacToeGameState.WINNING;
  }

  get isInProgress() {
    return this.gameState === TicTacToeGameState.IN_PROGRESS;
  }

  view() {
    return m("div", { id: "wrapper" }, [
      m("div", { class: "container" }, [
        m("div", [
          this.isInProgress
            ? m("h2", `Can you beat Doge? Much try.`)
            : undefined,
          this.hasWinning
            ? m("h2", `Wow. Much ${this.state.winner.name}. Such lost.`)
            : undefined,
          this.isTie ? m("h2", `Such tie. Much wow!`) : undefined,
          m(
            "button",
            { class: "btn", onclick: this.setNewGame.bind(this) },
            `New Game? (Esc)`
          )
        ]),
        m(BoardComponent, {
          board: this.state.board,
          onclick: this.setMove.bind(this)
        })
      ])
    ]);
  }
}
