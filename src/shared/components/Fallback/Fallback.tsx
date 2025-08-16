import { FC } from 'react';
import { Alert, Button, CircularProgress } from '@mui/material';

import { FallbackPropsType } from './Fallback.types.d';
import * as Styled from './Fallback.styles';

export const Fallback: FC<FallbackPropsType> = ({ isLoading, error, onRefresh, children }) => {
  if (isLoading) {
    return (
      <Styled.Container>
        <CircularProgress />
      </Styled.Container>
    );
  }

  return error ? (
    <Styled.Container>
      <Alert severity="error">Something went wrong...</Alert>
      {onRefresh && (
        <Button variant="contained" onClick={onRefresh}>
          Refresh
        </Button>
      )}
    </Styled.Container>
  ) : (
    children
  );
};
