import { ShipType } from '@shared/types/game';

import { GameState } from './types';

export const getEmptyBoard = (): GameState['opponentBoard'] => ({
  cells: {},
  ships: Object.keys(ShipType).reduce(
    (acc, key) =>
      ({
        ...acc,
        [key as ShipType]: [],
      } as GameState['opponentBoard']['ships']),
    {} as GameState['opponentBoard']['ships']
  ),
});
