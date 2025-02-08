import { useState } from 'react';
import Board from './Board';

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [historyByOrder, setHistoryByOrder] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
  
    function handlePlay(nextSquares, index) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      const nextHistoryByOrder = [...historyByOrder.slice(0, currentMove + 1), nextSquares[index]];
    
      setHistory(nextHistory);
      setHistoryByOrder(nextHistoryByOrder);
      setCurrentMove(nextHistory.length - 1);
    }
    
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = historyByOrder.slice(0, currentMove).map((square, move) => {
      let description;
      let row = parseInt((parseInt(square.slice(-1))/3));
      let col;
      if((parseInt(square.slice(-1))/3) - parseInt((parseInt(square.slice(-1))/3)) > 0.5){
        col = 3;
      } else if ((parseInt(square.slice(-1))/3) - parseInt((parseInt(square.slice(-1))/3)) < 0.5 && (parseInt(square.slice(-1))/3) - parseInt((parseInt(square.slice(-1))/3)) > 0.2){
        col = 2;
      } else {
        col = 1;
      }
      if (move > 0) {
        description = `Voltar para a jogada ${move} (linha ${row+1}, coluna ${col})`;
      } else {
        description = 'Voltar para o começo';
      }
      return (
          <button key={move} className='btn btn-success' onClick={() => jumpTo(move)}>{description}</button>
      )
    });
  
    return (
      <div className='container text-center mt-4'>
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="game">
              <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className='col-auto'>
            <div className="game-info">
              {moves}
            </div>
          </div>
        </div>
      </div>
    );
  
  }
  
  