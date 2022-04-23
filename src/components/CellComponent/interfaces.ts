import { Cell } from '@/models/Cell';

export interface CellProps {
  cell: Cell;
  selected: boolean;
  onClick: (cell: Cell) => void;
}
