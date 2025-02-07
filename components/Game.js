import { useState } from 'react';
import Board from './Board';

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;
  
    function handlePlay(nextSquares) {
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    function jumpTo(nextMove) {
      setCurrentMove(nextMove);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Voltar para jogada nº' + move;
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
  
  