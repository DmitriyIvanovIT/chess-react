import React, { FC, Fragment, useCallback, useEffect, useState } from 'react';
import CellComponent from '@/components/CellComponent';
import { BoardProps } from '@/components/BoardComponent/interfaces';
import { Cell } from '@/models/Cell';

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  swapPlayer,
  currentPlayer
}): JSX.Element => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const clickCell = useCallback(
    (cell: Cell) => () => {
      if (
        selectedCell &&
        selectedCell !== cell &&
        selectedCell.figure?.canMove(cell)
      ) {
        selectedCell.moveFigure(cell);
        swapPlayer();
        setSelectedCell(null);
        updateBoard();
      } else {
        if (cell.figure?.color === currentPlayer?.color) {
          setSelectedCell(cell);
        }
      }
    },
    [selectedCell, setSelectedCell, currentPlayer]
  );

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  return (
    <div className="w-[640px] h-[640px] flex flex-wrap">
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map(cell => (
            <CellComponent
              cell={cell}
              key={cell.id}
              selected={
                selectedCell?.x === cell.x && selectedCell?.y === cell.y
              }
              onClick={clickCell}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
