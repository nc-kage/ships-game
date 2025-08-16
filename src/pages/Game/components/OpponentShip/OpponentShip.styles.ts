import styled from '@emotion/styled';

import { MOBILE_BREAKPOINT } from '@shared/constants/viewport';

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ShipImage = styled.img`
  width: 10rem;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    width: 5rem;
  }
`;
