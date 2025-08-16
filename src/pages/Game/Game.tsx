import Fallback from '@shared/components/Fallback';

import Cell from './components/Cell';
import * as Styled from './Game.styles';
import { useGame } from './useGame';
import { OpponentShips } from './components/OpponentShips';

export const Game = () => {
  const { positions, error, onReset } = useGame();

  return (
    <Fallback isLoading={false} error={error} onRefresh={onReset}>
      <Styled.Wrapper>
        <OpponentShips />
        <Styled.Grid>
          {positions.map((position) => (
            <Cell key={position} position={position} />
          ))}
        </Styled.Grid>
      </Styled.Wrapper>
    </Fallback>
  );
};
