import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>{pageProps.pageTitle || 'NEXT_LEARN'}</title>
      </Head>
      <Component {...pageProps} />
    </>
}
export default MyApp
