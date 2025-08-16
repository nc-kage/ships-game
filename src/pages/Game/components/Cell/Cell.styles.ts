import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';

import { CellState } from '@pages/Game/types';
import { MOBILE_BREAKPOINT } from '@shared/constants/viewport';
import { ABSOLUTE_FULL_CONTENT, ABSOLUTE_FULL } from '@shared/styles/position';

export const Container = styled.div`
  position: relative;

  [data-touch='false'] &:hover[data-state='${CellState.Unknown}'] {
    background-color: ${grey[200]};
    cursor: pointer;
  }

  &[data-state='${CellState.Hit}']::after,
  &[data-state='${CellState.Miss}']::after {
    ${ABSOLUTE_FULL_CONTENT}
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  &[data-state='${CellState.Hit}']::after {
    background-image: url('/media/hit.png');
  }

  &[data-state='${CellState.Miss}']::after {
    background-image: url('/media/miss.png');
  }

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    &[data-state='${CellState.Hit}']::after {
      background-image: url('/media/hit_small.png');
    }

    &[data-state='${CellState.Miss}']::after {
      background-image: url('/media/miss_small.png');
    }
  }
`;

export const CellButton = styled(Button)`
  ${ABSOLUTE_FULL}
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  overflow: hidden;
  min-width: 0;
`;
