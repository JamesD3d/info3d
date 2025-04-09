import '../styles.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#fb923c" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
