import { FC } from 'react';

import * as Styled from './Wrapper.styles';
import { WrapperPropsType } from './Wrapper.types';

export const Wrapper: FC<WrapperPropsType> = ({ children, className }) => {
  return <Styled.Wrapper className={className}>{children}</Styled.Wrapper>;
};
