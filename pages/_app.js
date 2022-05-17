import '../styles/global.css';
import '../styles/prism-nord.css';
import Head from 'next/head';
import Layout from '../components/Layout';


const MyApp = ({ Component, pageProps }) => {
  return(
    <>
      <Head>
        <meta name='description' content='備忘録や何某を記録するブログ'></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
