import { FC } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css';

import * as Styled from './App.style';

const App: FC = () => {
  return <Styled.Wrapper>{'App'}</Styled.Wrapper>;
};

export default App;
