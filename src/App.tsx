import React, { useEffect, useState } from 'react';
import '@/styles/index.css';
import '@/styles/style.scss';
import BoardComponent from './components/BoardComponent';
import { Board } from '@/models/Board';

const App = (): JSX.Element => {
  const [board, setBoard] = useState(new Board());

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};

export default App;
