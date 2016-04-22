class TicTacToe{
    public board: Board;
    public players: Player[];
    public player_turn: number;

    public constructor (player_1: Player, player_2: Player){
        this.players = [player_1, player_2];
        this.board = new Board();

        this.player_turn = 0;
    }

    public getCurrentPlayer(){
        return this.players[this.player_turn];
    }

    public newGame(){
        this.player_turn = ++this.player_turn % 2;
        this.board = new Board();
    }

    public getGameStatus(){
        if(this.board.num_moves < 3)
            return -2;
        if(this.board.checkWinner())
            return this.player_turn;
        if(this.board.num_moves == 9)
            return -1;
        return -2;
    }

    public nextPlayer(){
        this.player_turn = ++this.player_turn % 2;
    }

    public makeMove(position: number){
        return this.board.setMove(position, this.player_turn)
    }
}

class Board{
    public board_array: number [];
    public num_moves: number;

    public constructor(){
        this.num_moves = 0;
        this.board_array = [
            -1, -1, -1,
            -1, -1, -1,
            -1, -1, -1
        ];
    }

    public setMove(position: number, player_index: number): boolean{
        if(this.board_array[position] != -1)
            return false;

        this.board_array[position] = player_index;
        this.num_moves++;
        return true;
    }

    public checkWinner(){
        //Horizontal Check
        if(this.board_array[0] !== -1 && this.board_array[0] == this.board_array[1] && this.board_array[0] == this.board_array[2])
            return true;
        if(this.board_array[3] !== -1 && this.board_array[3] == this.board_array[4] && this.board_array[3] == this.board_array[5])
            return true;
        if(this.board_array[6] !== -1 && this.board_array[6] == this.board_array[7] && this.board_array[6] == this.board_array[8])
            return true;

        //Vertical Check
        if(this.board_array[0] !== -1 && this.board_array[0] == this.board_array[3] && this.board_array[0] == this.board_array[6])
            return true;
        if(this.board_array[1] !== -1 && this.board_array[1] == this.board_array[4] && this.board_array[1] == this.board_array[7])
            return true;
        if(this.board_array[2] !== -1 && this.board_array[2] == this.board_array[5] && this.board_array[2] == this.board_array[8])
            return true;

        //Diagonal Check
        if(this.board_array[0] !== -1 && this.board_array[0] == this.board_array[4] && this.board_array[0] == this.board_array[8])
            return true;
        if(this.board_array[2] !== -1 && this.board_array[2] == this.board_array[4] && this.board_array[2] == this.board_array[6])
            return true;

        return false;
    }
}

abstract class Player{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    isHuman(){
        return typeof this == "HumanPlayer";
    }
}

class HumanPlayer extends Player{
    constructor(name: string) {
        super(name);
    }
}
class ComputerPlayer extends Player{

    constructor(name: string) {
        super(name);
    }

    public getMove(board: Board){

    }

}