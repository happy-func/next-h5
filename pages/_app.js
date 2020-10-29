import Head from "next/head";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <title>{pageProps.pageTitle || 'NEXT_LEARN'}</title>
          <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
}
export default MyApp
