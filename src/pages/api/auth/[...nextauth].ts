import jwt from 'jsonwebtoken';
import NextAuth, {
  type NextAuthOptions,
  type Session,
  type User,
} from 'next-auth';
import type { JWT } from 'next-auth/jwt/types';
import GithubProvider from 'next-auth/providers/github';

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
      session.appToken = jwt.sign(
        { id: token.sub },
        String(process.env.NEXTAUTH_SECRET)
      );

      return session;
    },
  },
};
export default NextAuth(authOptions);
