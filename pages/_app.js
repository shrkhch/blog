import '../styles/global.css'
import '../styles/prism-nord.css'
import Link from 'next/link'
import Layout from '../components/Layout'


const MyApp = ({ Component, pageProps }) => {
  return(
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
