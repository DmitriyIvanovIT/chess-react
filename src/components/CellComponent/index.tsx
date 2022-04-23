import React, { FC } from 'react';
import { CellProps } from '@/components/CellComponent/interfaces';
import clsx from 'clsx';

const CellComponent: FC<CellProps> = ({ cell, selected, onClick }) => {
  const Figure: keyof JSX.IntrinsicElements = cell.figure?.icon;

  return (
    <div
      className={clsx(
        'w-16 h-16 flex justify-center items-center',
        cell.color,
        selected && 'bg-[#a52a2a]',
        cell.figure && cell.available && 'bg-[#22c022]'
      )}
      onClick={() => onClick(cell)}
    >
      {!cell.figure && cell.available && (
        <div className="w-3 h-3 rounded-full bg-[#22c022]" />
      )}
      {cell.figure?.icon && <Figure className="w-12 h-12 relative" />}
    </div>
  );
};

export default CellComponent;
