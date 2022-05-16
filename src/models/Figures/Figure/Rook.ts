import { Figure } from '@/models/Figures/Figure/index';
import { ColorsFigure } from '@/models/Colors';
import { Cell } from '@/models/Cell';
import BlackIcon from '@/icons/black-knight.svg';
import WhiteIcon from '@/icons/white-knight.svg';
import { FigureNames } from '@/models/Figures/Figure/interfaces';

export class Rook extends Figure {
  constructor(color: ColorsFigure, cell: Cell) {
    super(color, cell);

    this.icon = color === ColorsFigure.BLACK ? BlackIcon : WhiteIcon;
    this.name = FigureNames.ROOK;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    if (this.cell.isEmptyVertical(target)) return true;

    if (this.cell.isEmptyHorizontal(target)) return true;

    return false;
  }
}
