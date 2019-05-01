import { Component } from "angular-ts-decorators";
import {
  TicTacToeState,
  TicTacToe,
  HumanPlayer,
  TicTacToeGameState,
  ComputerPlayer
} from "./tictactoe";

@Component({
  selector: "game",
  template: `
    <div id="element">
      <div class="container" style="margin-top: 60px">
        <div>
          <h2 data-ng-if="$ctrl.isInProgress">
            It's {{ $ctrl.player.name }} turn.
          </h2>
          <h2 data-ng-if="$ctrl.hasWinning">
            {{ $ctrl.state.winner.name }} has WON!!!
          </h2>
          <h2 data-ng-if="$ctrl.isTie">It's a tie</h2>
          <button
            class="btn"
            data-ng-if="$ctrl.hasWinning || $ctrl.isTie"
            data-ng-click="$ctrl.setNewGame()"
          >
            New Game?
          </button>
        </div>
        <board
          data-board="$ctrl.state.board"
          data-on-click="$ctrl.setMove(index)"
        ></board>
      </div>
    </div>
  `
})
export class GameComponent implements angular.IController {
  private state: TicTacToeState;
  private game: TicTacToe;

  $onInit() {
    this.setNewGame();
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
}
