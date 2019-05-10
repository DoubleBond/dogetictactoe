import * as React from "react";
import {
  TicTacToeGameState,
  TicTacToe,
  HumanPlayer,
  TicTacToeGameStatus,
  ComputerPlayer,
  Player
} from "./tictactoe";
import Board from "./board";

class Game extends React.Component {
  private game: TicTacToe;

  public state: TicTacToeGameState;

  componentWillMount() {
    this.newGame();

    document.addEventListener("keydown", event => {
      if (event.code === "Escape") {
        this.newGame();
      }
    });
  }

  newGame() {
    this.game = new TicTacToe([
      new HumanPlayer("Cate", require("../assets/cate.jpg")),
      new ComputerPlayer("Doge", require("../assets/doge.jpg"))
    ]);
    this.setState(this.game.state);
  }

  setMove(position: number): void {
    if (!this.isInProgress) {
      return;
    }
    if (
      this.game.move(position) &&
      this.game.state.player instanceof ComputerPlayer
    ) {
      if (this.game.state.status === TicTacToeGameStatus.IN_PROGRESS) {
        this.game.move(this.game.state.player.getMove(this.game));
      }
      this.setState(this.game.state);
    }
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

  render() {
    return (
      <div id="wrapper">
        <div className="container">
          <div>
            {this.isInProgress && <h2> Can you beat Doge? Much try.</h2>}
            {this.winner && <h2>Wow. Much {this.winner.name}. Such lost.</h2>}
            {this.isTie && <h2>Such tie. Much wow!</h2>}
          </div>
          <Board board={this.state.board} click={this.setMove.bind(this)} />
          <div>
            <button
              className="btn"
              style={{
                color: !this.isInProgress && "#fff"
              }}
              onClick={this.newGame.bind(this)}
            >
              New Game? (Esc)
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
