var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TicTacToe = (function () {
    function TicTacToe(player_1, player_2) {
        this.players = [player_1, player_2];
        this.board = new Board();
        this.player_turn = 0;
    }
    TicTacToe.prototype.getCurrentPlayer = function () {
        return this.players[this.player_turn];
    };
    TicTacToe.prototype.newGame = function () {
        this.player_turn = ++this.player_turn % 2;
        this.board = new Board();
    };
    TicTacToe.prototype.getGameStatus = function () {
        if (this.board.num_moves < 3)
            return -2;
        if (this.board.checkWinner())
            return this.player_turn;
        if (this.board.num_moves == 9)
            return -1;
        return -2;
    };
    TicTacToe.prototype.nextPlayer = function () {
        this.player_turn = ++this.player_turn % 2;
    };
    TicTacToe.prototype.makeMove = function (position) {
        return this.board.setMove(position, this.player_turn);
    };
    return TicTacToe;
})();
var Board = (function () {
    function Board() {
        this.num_moves = 0;
        this.board_array = [
            -1, -1, -1,
            -1, -1, -1,
            -1, -1, -1
        ];
    }
    Board.prototype.setMove = function (position, player_index) {
        if (this.board_array[position] != -1)
            return false;
        this.board_array[position] = player_index;
        this.num_moves++;
        return true;
    };
    Board.prototype.checkWinner = function () {
        //Horizontal Check
        if (this.board_array[0] !== -1 && this.board_array[0] == this.board_array[1] && this.board_array[0] == this.board_array[2])
            return true;
        if (this.board_array[3] !== -1 && this.board_array[3] == this.board_array[4] && this.board_array[3] == this.board_array[5])
            return true;
        if (this.board_array[6] !== -1 && this.board_array[6] == this.board_array[7] && this.board_array[6] == this.board_array[8])
            return true;
        //Vertical Check
        if (this.board_array[0] !== -1 && this.board_array[0] == this.board_array[3] && this.board_array[0] == this.board_array[6])
            return true;
        if (this.board_array[1] !== -1 && this.board_array[1] == this.board_array[4] && this.board_array[1] == this.board_array[7])
            return true;
        if (this.board_array[2] !== -1 && this.board_array[2] == this.board_array[5] && this.board_array[2] == this.board_array[8])
            return true;
        //Diagonal Check
        if (this.board_array[0] !== -1 && this.board_array[0] == this.board_array[4] && this.board_array[0] == this.board_array[8])
            return true;
        if (this.board_array[2] !== -1 && this.board_array[2] == this.board_array[4] && this.board_array[2] == this.board_array[6])
            return true;
        return false;
    };
    return Board;
})();
var Player = (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.isHuman = function () {
        return typeof this == "HumanPlayer";
    };
    return Player;
})();
var HumanPlayer = (function (_super) {
    __extends(HumanPlayer, _super);
    function HumanPlayer(name) {
        _super.call(this, name);
    }
    return HumanPlayer;
})(Player);
var ComputerPlayer = (function (_super) {
    __extends(ComputerPlayer, _super);
    function ComputerPlayer(name) {
        _super.call(this, name);
    }
    ComputerPlayer.prototype.getMove = function (board) {
    };
    return ComputerPlayer;
})(Player);
//# sourceMappingURL=TicTacToe.js.map