import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { CellState } from '@pages/Game/types';

import { GameState } from './types';
import { getEmptyBoard } from './utils';

export const useGameStore = create<GameState>()(
  immer((set) => ({
    actionsCount: 0,
    opponentBoard: getEmptyBoard(),
    incrementActionsCount: () => {
      set((state) => {
        state.actionsCount += 1;
      });
    },
    resetActionsCount: () => {
      set((state) => {
        state.actionsCount = 0;
      });
    },
    resetBoard: () => {
      set((state) => {
        state.opponentBoard = getEmptyBoard();
      });
    },
    setOpponentCells: (cells: CellState[]) => {
      set((state) => {
        state.opponentBoard.cells = cells.reduce((acc, cell, i) => {
          acc[i] = cell;
          return acc;
        }, {} as GameState['opponentBoard']['cells']);
      });
    },
    updateOpponentCell: (position: number, cellState: CellState) => {
      set((state) => {
        state.opponentBoard.cells[position] = cellState;
      });
    },
    setOpponentShips: (ships: GameState['opponentBoard']['ships']) => {
      set((state) => {
        state.opponentBoard.ships = ships;
      });
    },
  }))
);
