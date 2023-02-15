import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fetchGitHubAccount } from '@/api/client/fetch/gitHub';
import { mockFetchGitHubAccount } from '@/mocks';

const mockHandlers = [
  rest.get('https://api.github.com/users/dummy', mockFetchGitHubAccount),
];

const mockServer = setupServer(...mockHandlers);

describe('src/api/client/fetch/gitHub.ts fetchGitHubAccount TestCases', () => {
  beforeAll(() => {
    mockServer.listen();
  });

  afterEach(() => {
    mockServer.resetHandlers();
  });

  afterAll(() => {
    mockServer.close();
  });

  it('should be able to fetch a GItHubAccount', async () => {
    const fetchedGitHubAccount = await fetchGitHubAccount({
      name: 'dummy',
      accessToken: '',
    });

    const expected = {
      name: 'keitakn',
      avatarUrl: 'https://avatars.githubusercontent.com/u/11032365?v=4',
    };

    expect(fetchedGitHubAccount).toStrictEqual(expected);
  });
});
