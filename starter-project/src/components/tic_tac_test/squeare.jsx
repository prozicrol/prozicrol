import {useState} from 'react'
import CoolButton from '../button'

function Square({value, onSquareClick }) {
    return <button className="square" onClick={onSquareClick}>{value}</button>;
  }

function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;
    status = !winner && !squares.some(e => e == null) ? 'Draw' : status

    function drawBoard(){
      let table = [];
      for (let i = 0; i < 3; i++) {
        let row = [];
        for (let y = 0; y < 3; y++) {
          row.push(<Square value={squares[y + i * 3]} onSquareClick={() => handleClick(y + i * 3)} />)
          
        }
        table.push(<div className="board-row">{row}</div>)
      }
      return table;
    }

    return (
        <>
            <div className="status">{status}</div>
            {drawBoard()}
        </>
      );
}

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function ReloadGame(){
    setCurrentMove(0);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move)=>{
    return (
      <li key={move}>
        {move > 0 ? ( <button onClick={() => jumpTo(move)}>{`Go to move # ${move}`}</button> ) : ( <span>Go to game start</span> )}
      </li>
    );

  })



  return (
    <div className='game'>
      <div className='game.board'>
          <CoolButton clickEvent={ReloadGame} text='Reload' />
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ul>{moves}</ul>
      </div>
    </div>
  )
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
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

