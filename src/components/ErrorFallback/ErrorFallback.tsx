import type { FC } from 'react';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return (
    <div>
      <h2>エラーが発生しました。</h2>
      <pre>{error.message}</pre>
    </div>
  );
};
