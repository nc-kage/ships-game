import { AppConfig } from '@shared/types/appConfig';

export type AppConfigContextValue = {
  appConfig: AppConfig | null;
  isLoading: boolean;
  error?: string;
};
