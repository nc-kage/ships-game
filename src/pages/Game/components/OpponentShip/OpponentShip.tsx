import { FC } from 'react';
import { Typography } from '@mui/material';

import {
  getDestroyedOpponentShipsCount,
  getOpponentShipPositions,
  useGameStore,
} from '@core/store/game';

import { OpponentShipProps } from './OpponentShip.types';
import { SHIP_IMAGE } from './constats';
import * as Styled from './OpponentShip.styles';

export const OpponentShip: FC<OpponentShipProps> = ({ ship }) => {
  const ships = useGameStore(getOpponentShipPositions(ship));
  const destroyed = useGameStore(getDestroyedOpponentShipsCount(ship));
  const isAllDestroyed = destroyed === (ships?.length ?? 0);

  return (
    <Styled.Wrapper data-testid={`ship-${ship}`}>
      <Styled.ShipImage alt={ship} src={SHIP_IMAGE[ship]} />
      <Typography color={isAllDestroyed ? 'error' : 'text.secondary'}>
        {destroyed}/{ships?.length ?? 0}
      </Typography>
    </Styled.Wrapper>
  );
};
