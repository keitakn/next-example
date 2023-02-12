import type { FetchGitHubAccount } from '@/features';
import {
  FetchGitHubAccountError,
  GitHubAccountNotFoundError,
  httpStatusCode,
} from '@/features';

// https://api.github.com/users/USERNAME のResponseBody
// 必要な項目だけ定義している
type GitHubFetchUserResponse = {
  login: string;
  avatar_url: string;
};

export const fetchGitHubAccount: FetchGitHubAccount = async (dto) => {
  const headers: HeadersInit =
    dto.accessToken != null
      ? {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${dto.accessToken}`,
        }
      : { Accept: 'application/vnd.github+json' };

  const options: RequestInit = {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers,
  };

  // 検証の為 `error` という名前で検索するとエラーが発生するようにする
  if (dto.name === 'error') {
    throw new FetchGitHubAccountError();
  }

  const response = await fetch(
    `https://api.github.com/users/${dto.name}`,
    options
  );

  if (response.status !== httpStatusCode.ok) {
    if (httpStatusCode.notFound) {
      throw new GitHubAccountNotFoundError();
    }
  }

  const responseBody = (await response.json()) as GitHubFetchUserResponse;

  return {
    name: responseBody.login,
    avatarUrl: responseBody.avatar_url,
  };
};
