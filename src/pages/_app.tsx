import React, { useEffect } from "react";
import Head from "next/head";
import '@/styles/globals.scss';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/theme';
import {PROJ_TITLE} from "@/constant";

function MyApp({Component, pageProps}) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <>
    <Head>
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <link rel="icon" href="/favicon.ico"/>
      <title>{pageProps.pageTitle || PROJ_TITLE}</title>
      <script dangerouslySetInnerHTML={{
        __html: `
          (function () {
            function IsPC() {
              var userAgentInfo = navigator.userAgent;
              var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
              var flag = true;
              for (var v = 0; v < Agents.length; v++) {
                  if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
              }
              return flag;
            }
            function getQueryVariable(variable) {
              var query = window.location.search.substring(1);
              var vars = query.split("&");
              for (var i=0;i<vars.length;i++) {
                  var pair = vars[i].split("=");
                  if(pair[0] == variable){return pair[1];}
              }
              return(false);
            }
            if (IsPC() && getQueryVariable('v_m') !== 'pc') {
              window.location.href = window.location.origin + "/pc-guid?v_m=pc&url=" + encodeURIComponent(window.location.href);
            }
            if (IsPC() && getQueryVariable('v_m') === 'pc' && !getQueryVariable('url')) {
              window.addEventListener('load', function(){
               document.getElementById('__next').classList.add('pc-mode');
              })
            }
          })();
        `
      }}/>
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
