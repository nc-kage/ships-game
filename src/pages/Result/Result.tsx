import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import { ROUTES } from '@core/constants/routing';
import { getActionsCount, useGameStore, useSetters } from '@core/store/game';

import * as Styled from './Result.styles';

export const Result = () => {
  const navigate = useNavigate();
  const actionsCount = useGameStore(getActionsCount());
  const { resetBoard } = useSetters();

  const handleClick = () => {
    resetBoard();
    navigate(ROUTES.GAME);
  };

  useLayoutEffect(() => {
    if (!actionsCount) {
      navigate(ROUTES.ROOT);
    }
  }, [actionsCount]);

  return (
    <Styled.Wrapper>
      <Typography variant="h5">You have won in {actionsCount} steps</Typography>
      <Button onClick={handleClick} variant="contained">
        New Game
      </Button>
    </Styled.Wrapper>
  );
};
