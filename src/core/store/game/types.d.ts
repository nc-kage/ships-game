import { positionShip } from '@shared/utils/positionShip';

import { CellState } from '../../../pages/Game/types';

type BoardType = {
  cells: Record<number, CellState>;
  ships: ReturnType<typeof positionShip>;
};

export type GameState = {
  actionsCount: number;
  opponentBoard: BoardType;
  resetBoard: () => void;
  setOpponentCells: (cells: CellState[]) => void;
  updateOpponentCell: (position: number, cellState: CellState) => void;
  setOpponentShips: (ships: BoardType['ships']) => void;
  incrementActionsCount: () => void;
  resetActionsCount: () => void;
};
