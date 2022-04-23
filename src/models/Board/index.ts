import { Cell } from '@/models/Cell';
import { Colors, ColorsFigure } from '@/models/Colors';
import { Queen } from '@/models/Figures/Figure/Queen';
import { Pawn } from '@/models/Figures/Figure/Pawn';
import { King } from '@/models/Figures/Figure/King';
import { Bishop } from '@/models/Figures/Figure/Bishop';
import { Knight } from '@/models/Figures/Figure/Knight';
import { Rook } from '@/models/Figures/Figure/Rook';

export class Board {
  cells: Cell[][] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null));
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null));
        }
      }
      this.cells.push(row);
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    return newBoard;
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target);
      }
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(ColorsFigure.BLACK, this.getCell(i, 1));
      new Pawn(ColorsFigure.WHITE, this.getCell(i, 6));
    }
  }

  private addKings() {
    new King(ColorsFigure.WHITE, this.getCell(4, 7));
    new King(ColorsFigure.BLACK, this.getCell(4, 0));
  }

  private addQueens() {
    new Queen(ColorsFigure.WHITE, this.getCell(3, 7));
    new Queen(ColorsFigure.BLACK, this.getCell(3, 0));
  }

  private addKnights() {
    new Knight(ColorsFigure.WHITE, this.getCell(0, 7));
    new Knight(ColorsFigure.BLACK, this.getCell(0, 0));
    new Knight(ColorsFigure.WHITE, this.getCell(7, 7));
    new Knight(ColorsFigure.BLACK, this.getCell(7, 0));
  }

  private addBishops() {
    new Bishop(ColorsFigure.WHITE, this.getCell(2, 7));
    new Bishop(ColorsFigure.BLACK, this.getCell(2, 0));
    new Bishop(ColorsFigure.WHITE, this.getCell(5, 7));
    new Bishop(ColorsFigure.BLACK, this.getCell(5, 0));
  }

  private addRooks() {
    new Rook(ColorsFigure.WHITE, this.getCell(1, 7));
    new Rook(ColorsFigure.BLACK, this.getCell(1, 0));
    new Rook(ColorsFigure.WHITE, this.getCell(6, 7));
    new Rook(ColorsFigure.BLACK, this.getCell(6, 0));
  }

  public addFigures() {
    this.addPawns();
    this.addBishops();
    this.addKings();
    this.addKnights();
    this.addQueens();
    this.addRooks();
  }
}
