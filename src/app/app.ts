import angular from "angular";

import { TicTacToe, HumanPlayer } from "./tictactoe";

const game = new TicTacToe(new HumanPlayer("Cate"), new HumanPlayer("Doge"));
const app = angular.module("TicTacToeApp", []);

app.controller("TicTacToeController", function($scope) {
  $scope.board = game.board;
  $scope.game_state = game.getGameStatus();
  $scope.current_player = game.getCurrentPlayer();

  $scope.newGame = function() {
    game.newGame();
    $scope.board = game.board;
    $scope.game_state = game.getGameStatus();
    $scope.current_player = game.getCurrentPlayer();
  };

  $scope.setMove = function(position) {
    if ($scope.game_state != 2 && game.makeMove(position)) {
      $scope.game_state = game.getGameStatus();
      console.log($scope.board.num_moves);
      if ($scope.game_state == -2) {
        game.nextPlayer();
      }
      $scope.current_player = game.getCurrentPlayer();
    }
  };
});
