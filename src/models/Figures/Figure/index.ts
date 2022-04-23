import { ColorsFigure } from '@/models/Colors';
import Icon from '@/icons/black-king.svg';
import { Cell } from '@/models/Cell';
import { FigureNames } from '@/models/Figures/Figure/interfaces';

export class Figure {
  color: ColorsFigure;
  icon: typeof Icon | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: ColorsFigure, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.icon = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false;
    } else if (target.figure?.name === FigureNames.KING) {
      return false;
    }
    return true;
  }

  moveFigure(target: Cell) {}
}
