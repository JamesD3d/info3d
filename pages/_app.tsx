import '../globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/info3d/service-worker.js')  // ✅ correct path
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#fb923c" />
        <link rel="manifest" href="/info3d/manifest.json" /> {/* ✅ correct path */}
        <link rel="apple-touch-icon" href="/info3d/icon-192.png" /> {/* ✅ correct path */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="info3d" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
