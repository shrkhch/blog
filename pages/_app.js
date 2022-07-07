import '../styles/global.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }) => {
  return(
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
