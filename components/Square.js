export default function Square( {value, index, onSquareClick, winner, lineWinner, xIsNext} ){

  let color = "green";
  if(value === "O"){
    color = "indigo";
  }

  if(winner === true && lineWinner.includes(index)){
    return (
      <button className={`square-winner blink-${color}`} onClick={onSquareClick} style={{color: color}}>
        {value}
      </button>
    );
    
  }
  else if(winner === false){
    return (
      <button className={`square-winner blink-${color}`} onClick={onSquareClick} style={{color: color}}>
        {value}
      </button>
    );
  } else {
    return (
      <button 
        className="square" onClick={onSquareClick} style={{color: color}}>
          {value}
      </button>
    );
  }
    
  }