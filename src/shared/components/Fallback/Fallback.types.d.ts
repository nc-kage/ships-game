import { PropsWithChildren } from 'react';

export type FallbackPropsType = PropsWithChildren & {
  isLoading: boolean;
  error?: string | null;
  onRefresh?: () => void;
};
