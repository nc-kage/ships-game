import { FC } from 'react';

import { ShipType } from '@shared/types/game';

import { OpponentShip } from '../OpponentShip';

import * as Styled from './OpponentShips.styles';

export const OpponentShips: FC = () => {
  const ships = Object.values(ShipType);

  return (
    <Styled.Wrapper>
      {ships.map((ship) => (
        <OpponentShip key={ship} ship={ship} />
      ))}
    </Styled.Wrapper>
  );
};
