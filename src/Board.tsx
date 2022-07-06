import React from "react";
import Square from "./Square";

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = (props) => {
  const renderSquare = (index: number) => {
    return (
      <Square
        value={props.squares[index]}
        callback={() => props.onClick(index)}/>
    );
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
