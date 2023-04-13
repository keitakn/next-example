import jwt from 'jsonwebtoken';
import NextAuth, {
  type NextAuthOptions,
  type Session,
  type User,
} from 'next-auth';
import type { JWT } from 'next-auth/jwt/types';
import GithubProvider from 'next-auth/providers/github';
import { isOidcProvider } from '@/features';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId:
        process.env.GITHUB_OIDC_CLIENT_ID != null
          ? process.env.GITHUB_OIDC_CLIENT_ID
          : '',
      clientSecret:
        process.env.GITHUB_OIDC_CLIENT_SECRET != null
          ? process.env.GITHUB_OIDC_CLIENT_SECRET
          : '',
    }),
  ],
  callbacks: {
    session: async ({
      session,
      token,
    }: {
      session: Session;
      user: User;
      token: JWT;
      // eslint-disable-next-line @typescript-eslint/require-await
    }) => {
      if (token.sub != null && token.provider != null) {
        session.appToken = jwt.sign(
          {
            sub: token.sub,
            provider: token.provider,
            exp: token.exp,
            jti: token.jti,
          },
          String(process.env.APP_TOKEN_SECRET_KEY)
        );
      }

      return session;
    },
    // eslint-disable-next-line @typescript-eslint/require-await
    jwt: async ({ token, account }) => {
      if (account) {
        if (isOidcProvider(account.provider)) {
          token.provider = account.provider;
        }

        if (account.access_token != null) {
          token.accessToken = account.access_token;
        }
      }

      return token;
    },
  },
};
export default NextAuth(authOptions);
