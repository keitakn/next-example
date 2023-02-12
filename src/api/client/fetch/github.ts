import type { FetchGitHubAccount, GitHubAccount } from '@/features';

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

  const responseBody = (await response.json()) as GitHubAccount;

  return responseBody;
};
