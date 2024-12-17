import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button
      className="w-20 h-20 bg-white border-2 border-gray-300 text-4xl font-bold 
    hover:bg-gray-100 transition-colors duration-200 
    focus:outline-none"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

//  props to pass the value each square should have from the parent component (Board) to its child (Square).
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (isNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setIsNext(!isNext);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-500">
      <div className="text-2xl font-bold mb-4 text-gray-700">
        Next Player: {isNext ? 'X' : 'O'}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
