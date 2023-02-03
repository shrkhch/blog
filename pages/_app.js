import "styles/global.css";
import "styles/markdown.css";
import "@fontsource/m-plus-rounded-1c";
import Head from "next/head"
import Layout from "components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
