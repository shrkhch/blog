import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className="bg-yellow-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
