import styled from '@emotion/styled';
import { grey, amber } from '@mui/material/colors';

import WrapperShared from '@shared/components/Wrapper';
import { ABSOLUTE_FULL_CONTENT } from '@shared/styles/position';
import { MOBILE_BREAKPOINT } from '@shared/constants/viewport';

import { GRID_SIZE } from './constants';

export const Wrapper = styled(WrapperShared)`
  padding: 5rem 1rem 0 1rem;
  gap: 3rem;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    flex-direction: column;
    padding: 1rem 1rem 0 1rem;
  }
`;

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${GRID_SIZE}, 1fr);
  grid-template-rows: repeat(${GRID_SIZE}, 1fr);
  border: 1px solid ${grey[900]};
  width: 100%;
  max-width: 40rem;
  aspect-ratio: 1 / 1;
  box-shadow: -0.125rem -0.125rem 0px ${amber[300]}, 0.125rem 0.125rem 0px ${amber[300]},
    0.125rem -0.125rem 0px ${amber[300]}, -0.125rem 0.125rem 0px ${amber[300]};

  &::after {
    ${ABSOLUTE_FULL_CONTENT}
    pointer-events: none;
    background-image: linear-gradient(to right, ${grey[900]} 1px, transparent 1px),
      linear-gradient(to bottom, ${grey[900]} 1px, transparent 1px);
    background-size: calc(100% / 10) calc(100% / 10);
    background-repeat: repeat;
  }
`;
