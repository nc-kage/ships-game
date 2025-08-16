import { ShipType } from './game';

export type GameShipsCount = Record<ShipType, number>;

export type AppConfig = {
  gameShipsCount: GameShipsCount;
  positionShipStrategy: string;
};
