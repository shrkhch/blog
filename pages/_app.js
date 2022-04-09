import '../styles/global.css'
import '../styles/HoliTheme.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { useRouter } from "next/router";
import React, { useEffect } from 'react'

import { existsGaId, pageview } from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return(
    <>
      <Layout>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
