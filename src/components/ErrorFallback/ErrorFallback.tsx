import type { FC } from 'react';
import { Alert, Button } from '@mantine/core';
import Link from 'next/link';
import type { FallbackProps } from 'react-error-boundary';

export const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return (
    <>
      <Alert title="エラーが発生しました。" color="red">
        {error.message}
      </Alert>
      <Button>
        <Link href="/" prefetch={false}>
          元のページに戻る
        </Link>
      </Button>
    </>
  );
};
