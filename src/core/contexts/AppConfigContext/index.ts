import { useContext } from 'react';

import { AppConfigContext } from './AppConfigContext';

export { AppConfigContextProvider } from './AppConfigContextProvider';

export const useAppConfig = () => useContext(AppConfigContext);
