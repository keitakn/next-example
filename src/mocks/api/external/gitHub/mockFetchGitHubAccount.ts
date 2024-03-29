import {
  type ResponseResolver,
  type MockedRequest,
  type restContext,
} from 'msw';

import { httpStatusCode } from '@/features';
export const mockFetchGitHubAccount: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) =>
  await res(
    ctx.status(httpStatusCode.ok),
    ctx.json({
      login: 'keitakn',
      avatar_url: 'https://avatars.githubusercontent.com/u/11032365?v=4',
    })
  );
