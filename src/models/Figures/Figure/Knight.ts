import { Figure } from '@/models/Figures/Figure/index';
import { ColorsFigure } from '@/models/Colors';
import { Cell } from '@/models/Cell';
import BlackIcon from '@/icons/black-knight.svg';
import WhiteIcon from '@/icons/white-knight.svg';
import { FigureNames } from '@/models/Figures/Figure/interfaces';

export class Knight extends Figure {
  constructor(color: ColorsFigure, cell: Cell) {
    super(color, cell);

    this.icon = color === ColorsFigure.BLACK ? BlackIcon : WhiteIcon;
    this.name = FigureNames.KNIGHT;
  }
}
