import { Board } from '@/models/Board';

export interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}
