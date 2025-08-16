import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { checkOpponentShipsAreDestroyed, useGameStore, useSetters } from '@core/store/game';
import { useAppConfig } from '@core/contexts/AppConfigContext';
import { positionShip } from '@shared/utils/positionShip';
import { ErrorName } from '@shared/types/error';
import { ROUTES } from '@core/constants/routing';

import { CellState } from './types';
import { GRID_SIZE } from './constants';

export const useGame = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { appConfig } = useAppConfig();
  const { setOpponentCells, setOpponentShips, resetActionsCount } = useSetters();
  const isOpponentShipsDestroyed = useGameStore(checkOpponentShipsAreDestroyed());

  const positions = useMemo(() => Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => i), []);

  const handleReset = useCallback(() => {
    resetActionsCount();
    const ships = positionShip(appConfig!.positionShipStrategy, appConfig!.gameShipsCount);
    if (ships) {
      setOpponentShips(ships);
    } else {
      setError(ErrorName.Unknown);
    }
  }, [appConfig]);

  useEffect(() => {
    setOpponentCells(positions.map(() => CellState.Unknown));
  }, [positions]);

  useEffect(() => {
    handleReset();
  }, [handleReset]);

  useEffect(() => {
    if (isOpponentShipsDestroyed) {
      navigate(ROUTES.RESULT);
    }
  }, [isOpponentShipsDestroyed]);

  return {
    error,
    positions,
    onReset: handleReset,
  };
};
