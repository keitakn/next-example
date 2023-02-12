import type { FetchGitHubAccount } from '@/features';

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

  const response = await fetch(
    `https://api.github.com/users/${dto.name}`,
    options
  );

  const responseBody = (await response.json()) as GitHubFetchUserResponse;

  return {
    name: responseBody.login,
    avatarUrl: responseBody.avatar_url,
  };
};
