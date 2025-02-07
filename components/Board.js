import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }){

  function handleClick(i){
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const copySquares = squares.slice();
    if(xIsNext){
      copySquares[i] = 'X';
    } else{
      copySquares[i] = 'O';
    }
    
    onPlay(copySquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    if(!xIsNext){
      status = "Ganhador: X";
    } else {
      status = "Ganhador: O";
    }
  }
  if(!winner && winner !== null){
    status = "Deu velha!"
  }else if(winner === null){
    status = "Próximo jogador: " + (xIsNext ? "X" : "O")
  }

  return (
    <>
      <div className="card text-white bg-secondary" style={{fontSize: "1.3rem", padding: "0.5rem", marginTop: "0"}}>{status}</div>
      <div className="board">
        {Array.from({ length: 3 }).map((_, i) => (
          <div className="board-row" key={i}>
            {Array.from({ length: 3 }).map((_, j) => (
              <Square key={i * 3 + j} value={squares[i * 3 + j]} index={i * 3 + j} onSquareClick={() => handleClick(i * 3 + j)} winner={winner} lineWinner={lineWinner} xIsNext={xIsNext}/>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

let lineWinner = null; 

function calculateWinner(squares) {
  const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        lineWinner = lines[i];  
        return true;
      }
  }

  if (!squares.includes(null)) {
      return false;
  }
  return null;
}