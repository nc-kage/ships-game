import Typography from '@mui/material/Typography';
import Link, { LinkProps } from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

import Wrapper from '@shared/components/Wrapper';
import { ROUTES } from 'src/core/constants/routing';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick: LinkProps['onClick'] = (e) => {
    e.preventDefault();
    navigate(ROUTES.ROOT);
  };

  return (
    <Wrapper>
      <Typography variant="h5">Page not found</Typography>
      <Link onClick={handleClick} href="#">
        Main Page
      </Link>
    </Wrapper>
  );
};
