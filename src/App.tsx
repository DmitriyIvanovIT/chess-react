import React, { useEffect, useState } from 'react';
import '@/styles/index.css';
import '@/styles/style.scss';
import BoardComponent from './components/BoardComponent';
import { Board } from '@/models/Board';
import { Player } from '@/models/Player';
import { ColorsFigure } from '@/models/Colors';
import LostFigures from '@/components/LostFigures';
import Timer from './components/Timer';

const App = (): JSX.Element => {
  const [board, setBoard] = useState<Board | null>(null);
  const [whitePlayer] = useState(new Player(ColorsFigure.WHITE));
  const [blackPlayer] = useState(new Player(ColorsFigure.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  useEffect(() => {
    setCurrentPlayer(whitePlayer);
  }, []);

  const swapPlayer = () =>
    setCurrentPlayer(
      currentPlayer?.color === ColorsFigure.WHITE ? blackPlayer : whitePlayer
    );

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {board ? (
        <>
          <Timer currentPlayer={currentPlayer} restart={restart} />
          <div className="flex justify-center items-center flex-col font-sans">
            <h3 className="text-center text-2xl font-bold mb-5">
              Ходит
              {currentPlayer?.color === ColorsFigure.WHITE
                ? ' белый '
                : ' черный '}
              игрок
            </h3>
            <BoardComponent
              board={board}
              setBoard={setBoard}
              currentPlayer={currentPlayer}
              swapPlayer={swapPlayer}
            />
          </div>
          <div>
            <LostFigures
              title="Черные фигуры"
              figures={board.lostBlackFigures}
            />

            <LostFigures
              title="Белые фигуры"
              figures={board.lostWhiteFigures}
            />
          </div>
        </>
      ) : (
        <button
          className="bg-blue-600 text-white px-3 py-2 rounded text-2xl"
          onClick={restart}
        >
          {' '}
          Начать игру{' '}
        </button>
      )}
    </div>
  );
};

export default App;
