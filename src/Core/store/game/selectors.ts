import { ShipType } from '@shared/types/game';
import { CellState } from '@pages/Game/types';

import { GameState } from './types';

export const getOpponentCellState = (position: number) => (state: GameState) => {
  return state.opponentBoard.cells[position];
};

export const getOpponentShipPositions = (shipType: ShipType) => (state: GameState) => {
  return state.opponentBoard.ships?.[shipType];
};

export const getActionsCount = () => (state: GameState) => {
  return state.actionsCount;
};

export const checkOpponentShipIsOnPosition =
  (position: number) =>
  (state: GameState): boolean => {
    return Object.values(state.opponentBoard.ships ?? {}).some((ships) =>
      ships.some((ship) => ship.includes(position))
    );
  };

export const getDestroyedOpponentShipsCount = (shipType: ShipType) => (state: GameState) => {
  const ships = state.opponentBoard.ships?.[shipType] ?? [];
  return ships.reduce((acc, ship) => {
    return (
      acc + Number(ship.every((position) => state.opponentBoard.cells[position] === CellState.Hit))
    );
  }, 0);
};

export const checkOpponentShipsAreDestroyed = () => (state: GameState) => {
  if (!state.opponentBoard.ships) {
    return false;
  }
  return Object.keys(state.opponentBoard.ships ?? {}).every((shipType) => {
    const shipsCount = getOpponentShipPositions(shipType as ShipType)(state)?.length ?? 0;
    return shipsCount > 0
      ? getDestroyedOpponentShipsCount(shipType as ShipType)(state) === shipsCount
      : false;
  });
};
