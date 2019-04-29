import { Component, Input, Output } from "angular-ts-decorators";
import { Player } from "./tictactoe";

@Component({
  selector: "board",
  template: `
    <div class="board">
      <div
        class="node"
        data-ng-repeat="node in $ctrl.board track by $index"
        data-ng-click="$ctrl.select($index)"
        data-ng-style="{backgroundImage: node ? 'url(' + node.avatar + ')' : ''}"
      ></div>
    </div>
  `
})
export class BoardComponent {
  @Input()
  public board: Player[];

  @Output()
  private onClick: ({ index: number }) => void;

  select(index: number) {
    this.onClick({ index });
  }
}
