import { Cell } from '@/models/Cell';
import { ColorsFigure } from '@/models/Colors';
import { Figure } from '@/models/Figures/Figure/index';
import BlackIcon from '@/icons/black-bishop.svg';
import WhiteIcon from '@/icons/white-bishop.svg';
import { FigureNames } from '@/models/Figures/Figure/interfaces';

export class Bishop extends Figure {
  constructor(color: ColorsFigure, cell: Cell) {
    super(color, cell);

    this.icon = color === ColorsFigure.BLACK ? BlackIcon : WhiteIcon;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    if (this.cell.isEmptyDiagonal(target)) return true;

    return false;
  }
}
