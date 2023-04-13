# next-example

[![ci](https://github.com/keitakn/next-example/actions/workflows/ci.yml/badge.svg)](https://github.com/keitakn/next-example/actions/workflows/ci.yml)
[![chromatic](https://github.com/keitakn/next-example/actions/workflows/chromatic.yml/badge.svg)](https://github.com/keitakn/next-example/actions/workflows/chromatic.yml)

Next.js の検証用サンプルプロジェクト、長期メンテナンスは行わない予定。このプロジェクトでは app ディレクトリは使わない。

## Getting Started

以下の環境変数が必要なので `.env` に追加。

```
GITHUB_OIDC_CLIENT_ID=GitHubのOAuth AppのクライントIDを指定
GITHUB_OIDC_CLIENT_SECRET=GitHubのOAuth Appのクライントシークレットを指定
NEXTAUTH_URL=NextAuth.js に必要な設定、アプリケーションのURLを設定する
NEXTAUTH_SECRET=NextAuth.js に必要な設定。JWTの検証の際に利用する秘密鍵になるので十分に強固な値を設定する
NEXT_PUBLIC_APP_URL=NEXTAUTH_URLと同じ値を設定
APP_TOKEN_SECRET_KEY=appToken（JWT形式）の検証の際に利用する秘密鍵になるので十分に強固な値を設定する
```
