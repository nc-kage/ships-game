import { ShipType } from '@shared/types/game';

export const SHIP_IMAGE: Record<ShipType, string> = {
  [ShipType.Carrier]: '/media/carrier.png',
  [ShipType.Battleship]: '/media/battleship.png',
  [ShipType.Cruiser]: '/media/cruiser.png',
  [ShipType.Submarine]: '/media/submarine.png',
  [ShipType.Destroyer]: '/media/destroyer.png',
};
