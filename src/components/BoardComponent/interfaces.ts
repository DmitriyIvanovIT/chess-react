import { Board } from '@/models/Board';
import { Player } from '@/models/Player';

export interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}
