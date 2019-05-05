import { Player } from "./Player";
import { TicTacToe, TicTacToeGameStatus } from "../TicTacToe";
export class ComputerPlayer extends Player {
  constructor(name: string, avatar: string) {
    super(name, avatar);
  }

  public getMove(game: TicTacToe): number {
    const tree = this.search(new Node(game, null, null));

    return this.minMax(tree, true).result.action;
  }

  private minMax(parent: Node, isMax: boolean): Node {
    const children = Array.from(parent.children);

    for (const child of children) {
      if (child.score === null) {
        this.minMax(child, !isMax);
      }
      if (isMax) {
        if (child.score > parent.score || parent.score === null) {
          parent.score = child.score;
          parent.result = child;
        }
      } else {
        if (child.score < parent.score || parent.score === null) {
          parent.score = child.score;
          parent.result = child;
        }
      }
    }

    return parent;
  }

  /**
   * Populates the tree with possible moves and marks the ends with a score.
   *
   * @param node A node.
   */
  private search(node: Node): Node {
    const { board, status, winner } = node.game.state;

    if (status !== TicTacToeGameStatus.IN_PROGRESS) {
      if (status === TicTacToeGameStatus.WINNING) {
        if (winner === this) {
          node.score = 100;
        } else {
          node.score = -100;
        }
        return;
      }
      node.score = 0;
      return;
    }

    this.getPossibleActions(board).forEach(action => {
      const clone = node.game.clone();
      clone.move(action);

      const child = new Node(clone, node, action);
      node.children.add(child);

      this.search(child);
    });

    return node;
  }

  private getPossibleActions(board: Player[]): number[] {
    return board
      .map((player, index) => (!player ? index : -1))
      .filter(isAvailable => isAvailable !== -1);
  }
}

class Node {
  public children = new Set<Node>();
  public score: number = null;
  public result: Node = null;
  constructor(
    public game: TicTacToe,
    public parent: Node,
    public action: number
  ) {}
}
