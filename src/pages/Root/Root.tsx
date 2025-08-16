import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Wrapper from '@shared/components/Wrapper';
import { ROUTES } from 'src/core/constants/routing';

export const Root = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.GAME);
  };

  return (
    <Wrapper>
      <Button onClick={handleClick} variant="contained">
        Start game
      </Button>
    </Wrapper>
  );
};
