import m from "mithril";

import {
  TicTacToeGameState,
  TicTacToe,
  HumanPlayer,
  TicTacToeGameStatus,
  ComputerPlayer,
  Player
} from "./tictactoe";
import { BoardComponent } from "./board.component";

export class GameComponent {
  private game: TicTacToe;

  oninit() {
    this.newGame();

    document.addEventListener("keydown", event => {
      if (event.code === "Escape") {
        this.newGame();
        m.redraw();
      }
    });
  }

  newGame() {
    this.game = new TicTacToe([
      new HumanPlayer("Cate", require("../assets/cate.jpg")),
      new ComputerPlayer("Doge", require("../assets/doge.jpg"))
    ]);
  }

  setMove(position: number): void {
    this.game.move(position);
    if (
      this.status === TicTacToeGameStatus.IN_PROGRESS &&
      this.player instanceof ComputerPlayer
    ) {
      this.game.move(this.player.getMove(this.game));
    }
  }

  get state() {
    return this.game.state;
  }

  get status() {
    return this.state.status;
  }

  get player() {
    return this.state.player;
  }

  get isTie() {
    return this.status === TicTacToeGameStatus.TIE;
  }

  get winner(): Player {
    return this.status === TicTacToeGameStatus.WINNING
      ? this.state.winner
      : null;
  }

  get isInProgress() {
    return this.status === TicTacToeGameStatus.IN_PROGRESS;
  }

  view() {
    return m("div", { id: "wrapper" }, [
      m("div", { class: "container" }, [
        m("div", [
          this.isInProgress && m("h2", `Can you beat Doge? Much try.`),
          this.winner && m("h2", `Wow. Much ${this.winner.name}. Such lost.`),
          this.isTie && m("h2", `Such tie. Much wow!`)
        ]),
        m(BoardComponent, {
          board: this.state.board,
          onclick: this.setMove.bind(this)
        }),
        m(
          "div",
          m(
            "button",
            {
              class: "btn",
              style: `color: ${!this.isInProgress && "#fff"}`,
              onclick: this.newGame.bind(this)
            },
            `New Game? (Esc)`
          )
        )
      ])
    ]);
  }
}
