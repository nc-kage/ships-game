import { createContext } from 'react';

import { AppConfigContextValue } from './types';

export const AppConfigContext = createContext<AppConfigContextValue>({
  appConfig: null,
  isLoading: true,
});
