import type { FC } from 'react';
import { Alert, Button } from '@mantine/core';
import type { FallbackProps } from 'react-error-boundary';

const createDisplayErrorMessage = (error: Error) => {
  if (error.name === 'GitHubAccountNotFoundError') {
    return 'GitHubアカウントは見つかりませんでした。';
  }

  return '予期せぬエラーが発生しました。申し訳ありませんが、しばらく時間が経ってからお試し下さい。';
};

export const ErrorFallback: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <>
      <Alert title="エラーが発生しました。" color="red">
        {createDisplayErrorMessage(error)}
      </Alert>
      <Button onClick={resetErrorBoundary}>もう一度試す</Button>
    </>
  );
};
