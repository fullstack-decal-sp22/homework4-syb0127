import React, {useState} from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

    const [player, setPlayer] = useState(true);
    const statusX = 'Next player: X';
    const statusO = 'Next player: O';
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    function renderPlayer() {
      if (player) {
        //setPlayer(true);
        return statusX;
      }
      //setPlayer(false);
      return statusO;
    }

    function editArray(i) {
      const copy = squares.slice();
      if (copy[i] != null) {
        return;
      }
      copy[i] = currentPlayer();
      setPlayer(!player);
      setSquares(copy);
      if (calculateWinner(copy)) {
        
        return;
      }
  }

    function renderSquare(i) {
      return <Square value ={squares[i]} edit = {() => editArray(i)}/>;
    }

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return "Winner : " + squares[a];
        }
      }
      return null;
    }

    function handleOnclick() {
      //if (calculateWinner(squares) {

      //}

    }

    function currentPlayer() {
      if (player) {
        return "X";
      }
      return "O";
    }

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
          <div className="status">{calculateWinner(squares) ? calculateWinner(squares):currentPlayer()}</div>

        </div>
    )
}

export default Board;