import * as React from "react";

const Board = ({ board, click }) => {
  return (
    <div className="board">
      {board.map((node, index) => {
        return (
          <div
            key={index}
            className="node"
            style={{
              backgroundImage: `${node ? "url(" + node.avatar + ")" : ""}`,
              cursor: node ? "initial" : null
            }}
            onClick={!node ? () => click(index) : null}
          />
        );
      })}
    </div>
  );
};

export default Board;
