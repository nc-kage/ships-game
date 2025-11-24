import { useGameStore } from './useGameStore';

export * from './useGameStore';
export * from './selectors';
export type { GameState } from './types';

export const useSetters = () => {
  return {
    setOpponentCells: useGameStore((state) => state.setOpponentCells),
    updateOpponentCell: useGameStore((state) => state.updateOpponentCell),
    setOpponentShips: useGameStore((state) => state.setOpponentShips),
    incrementActionsCount: useGameStore((state) => state.incrementActionsCount),
    resetActionsCount: useGameStore((state) => state.resetActionsCount),
    resetBoard: useGameStore((state) => state.resetBoard),
  };
};
