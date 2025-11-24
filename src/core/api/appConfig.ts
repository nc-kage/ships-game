import { APP_CONFIG } from '@core/constants/endpoints';

export const getAppConfig = async () => fetch(APP_CONFIG);
