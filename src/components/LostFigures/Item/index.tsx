import React, { FC } from 'react';
import { Figure } from '@/models/Figures/Figure';

const LostFigureItem: FC<{ figure: Figure }> = ({ figure }) => {
  const Figure: keyof JSX.IntrinsicElements = figure.icon;
  return <Figure className="w-12 h-12 relative" />;
};

export default LostFigureItem;
