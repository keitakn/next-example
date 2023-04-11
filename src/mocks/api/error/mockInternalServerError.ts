import {
  type ResponseResolver,
  type MockedRequest,
  type restContext,
} from 'msw';
import { httpStatusCode } from '@/features';
export const mockInternalServerError: ResponseResolver<
  MockedRequest,
  typeof restContext
> = async (req, res, ctx) =>
  await res(
    ctx.status(httpStatusCode.internalServerError),
    ctx.json({
      code: httpStatusCode.internalServerError,
      message: 'Internal Server Error',
    })
  );
