import React, { FC } from 'react';
import { LostFigureProps } from '@/components/LostFigures/interfaces';
import LostFigureItem from '@/components/LostFigures/Item';

const LostFigures: FC<LostFigureProps> = ({ title, figures }): JSX.Element => {
  return (
    <div className="p-[30px] ml-[50px] bg-gray-200 h-[50vh] w-[calc(100vw-1100px)]">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex gap-2 flex-wrap">
        {figures.map(figure => (
          <LostFigureItem figure={figure} key={figure.id} />
        ))}
      </div>
    </div>
  );
};

export default LostFigures;
