import { FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';

import { getAppConfig } from '@core/api/appConfig';
import { ErrorName } from '@shared/types/error';
import Fallback from '@shared/components/Fallback';
import { AppConfig } from '@shared/types/appConfig';

import { AppConfigContext } from './AppConfigContext';

export const AppConfigContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appConfig, setAppConfig] = useState<AppConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchConfig = useCallback(async () => {
    setError('');
    setIsLoading(true);
    try {
      const response = await getAppConfig();
      const config = await response.json();
      setAppConfig(config);
    } catch (err: unknown) {
      setError((err as Error)?.message ?? ErrorName.Unknown);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  const value = useMemo(() => ({ appConfig, isLoading, error }), [appConfig, isLoading, error]);

  return (
    <AppConfigContext.Provider value={value}>
      <Fallback onRefresh={fetchConfig} error={error} isLoading={isLoading}>
        {children}
      </Fallback>
    </AppConfigContext.Provider>
  );
};
