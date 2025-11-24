import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css';
import { Routes, Route } from 'react-router-dom';

import { AppConfigContextProvider } from '@core/contexts/AppConfigContext';
import { ROUTES } from '@core/constants/routing';
import Game from '@pages/Game';
import NotFound from '@pages/NotFound';
import Result from '@pages/Result';
import Root from '@pages/Root';
import { IS_TOUCH_DEVICE } from '@shared/constants/device';

import * as Styled from './App.styles';

const App = () => {
  return (
    <Styled.Wrapper data-touch={IS_TOUCH_DEVICE}>
      <AppConfigContextProvider>
        <Routes>
          <Route index element={<Root />} />
          <Route path={ROUTES.GAME} element={<Game />} />
          <Route path={ROUTES.RESULT} element={<Result />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppConfigContextProvider>
    </Styled.Wrapper>
  );
};

export default App;
