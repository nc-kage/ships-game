import { GRID_SIZE, SHIP_SIZE } from '@pages/Game/constants';
import { ShipType } from '@shared/types/game';

const getNeighbors = (cell: number): number[] => {
  const neighbors: number[] = [];
  const x = cell % GRID_SIZE;
  const y = Math.floor(cell / GRID_SIZE);

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;

      const newX = x + j;
      const newY = y + i;

      if (newX >= 0 && newX < GRID_SIZE && newY >= 0 && newY < GRID_SIZE) {
        neighbors.push(newY * GRID_SIZE + newX);
      }
    }
  }
  return neighbors;
};

const getShipCoordinates = (
  x: number,
  y: number,
  shipLength: number,
  isHorizontal: boolean
): number[] => {
  const coordinates: number[] = [];
  for (let i = 0; i < shipLength; i++) {
    const currentX = x + (isHorizontal ? i : 0);
    const currentY = y + (isHorizontal ? 0 : i);
    coordinates.push(currentY * GRID_SIZE + currentX);
  }
  return coordinates;
};

const isPlacementValid = (shipCoordinates: number[], occupiedCells: Set<number>): boolean => {
  for (const cell of shipCoordinates) {
    if (occupiedCells.has(cell)) {
      return false;
    }
    const neighbors = getNeighbors(cell);
    for (const neighbor of neighbors) {
      if (occupiedCells.has(neighbor)) {
        return false;
      }
    }
  }
  return true;
};

const createShipPlacement = (shipLength: number, occupiedCells: Set<number>): number[] => {
  let attempts = 0;
  const maxAttempts = 1000;

  while (attempts < maxAttempts) {
    const isHorizontal = Math.random() < 0.5;
    const x = Math.floor(Math.random() * (GRID_SIZE - (isHorizontal ? shipLength : 0)));
    const y = Math.floor(Math.random() * (GRID_SIZE - (isHorizontal ? 0 : shipLength)));

    const shipCoordinates = getShipCoordinates(x, y, shipLength, isHorizontal);

    if (isPlacementValid(shipCoordinates, occupiedCells)) {
      return shipCoordinates;
    }
    attempts++;
  }

  throw new Error(`Could not place ship of length ${shipLength} after ${maxAttempts} attempts.`);
};

const simplePositionShipStrategy = (
  shipCount: Record<ShipType, number>
): Record<ShipType, number[][]> => {
  const shipPositions: Record<ShipType, number[][]> = {
    [ShipType.Carrier]: [],
    [ShipType.Battleship]: [],
    [ShipType.Cruiser]: [],
    [ShipType.Submarine]: [],
    [ShipType.Destroyer]: [],
  };
  const occupiedCells = new Set<number>();

  const shipTypes = Object.keys(shipCount).sort(
    (a, b) => SHIP_SIZE[b as ShipType] - SHIP_SIZE[a as ShipType]
  ) as ShipType[];

  for (const shipType of shipTypes) {
    const shipLength = SHIP_SIZE[shipType];
    const count = shipCount[shipType];

    for (let i = 0; i < count; i++) {
      const shipCoordinates = createShipPlacement(shipLength, occupiedCells);
      shipCoordinates.forEach((cell) => occupiedCells.add(cell));
      shipPositions[shipType].push(shipCoordinates);
    }
  }

  return shipPositions;
};

const strategies: Record<
  string,
  (shipCount: Record<ShipType, number>) => Record<ShipType, number[][]>
> = {
  simple: simplePositionShipStrategy,
};

export const positionShip = (
  strategy: string | undefined,
  shipCount: Record<ShipType, number>
): Record<ShipType, number[][]> | undefined => {
  try {
    return strategies[strategy || 'simple'](shipCount);
  } catch (error) {
    console.error('Error in positionShip:', error);
  }
};
