import Head from "next/head";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>{pageProps.pageTitle || 'NEXT_LEARN'}</title>
          <link rel="shortcut icon" href="/favicon.ico"/>
          <meta/>
      </Head>
      <Component {...pageProps} />
    </>
}
export default MyApp
