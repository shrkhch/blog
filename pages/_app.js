import '../styles/global.css'
import '../styles/HoliTheme.css'
import Link from 'next/link'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
