import { ShipType } from '@shared/types/game';

export const GRID_SIZE = 10;

export const SHIP_SIZE: Record<ShipType, number> = {
  [ShipType.Carrier]: 5,
  [ShipType.Battleship]: 4,
  [ShipType.Cruiser]: 3,
  [ShipType.Submarine]: 3,
  [ShipType.Destroyer]: 2,
};
