import { FC, useCallback } from 'react';

import {
  checkOpponentShipIsOnPosition,
  getOpponentCellState,
  useGameStore,
  useSetters,
} from '@core/store/game';
import { CellState } from '@pages/Game/types';

import { CellPropsType } from './Cell.types';
import * as Styled from './Cell.styles';

export const Cell: FC<CellPropsType> = ({ position }) => {
  const state = useGameStore(getOpponentCellState(position));
  const isOpponentShipCell = useGameStore(checkOpponentShipIsOnPosition(position));

  const { updateOpponentCell, incrementActionsCount } = useSetters();

  const handleClick = useCallback(() => {
    updateOpponentCell(position, isOpponentShipCell ? CellState.Hit : CellState.Miss);
    incrementActionsCount();
  }, [position, isOpponentShipCell]);

  return (
    <Styled.Container data-posiotion={position} data-testid={`cell-${position}`}>
      <Styled.CellButton onClick={handleClick} data-state={state}>
        {state === CellState.Hit && 'X'}
        {state === CellState.Miss && 'O'}
      </Styled.CellButton>
    </Styled.Container>
  );
};
