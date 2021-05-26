import React, { useEffect } from "react";
import Head from "next/head";
import '@/styles/globals.scss';
import {PROJ_TITLE} from "@/constant";
import 'antd-mobile/dist/antd-mobile.css';

const { NEXT_PUBLIC_ENV_BASE_PATH } = process.env;

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
      <script src={`${NEXT_PUBLIC_ENV_BASE_PATH}/lib/fastclick.js`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('addEventListener' in document) {
              document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
              }, false);
            }
            if(!window.Promise) {
              document.writeln('<script src="${NEXT_PUBLIC_ENV_BASE_PATH}/lib/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
            }
          `,
        }}
      />
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
              window.location.href = window.location.origin + "${NEXT_PUBLIC_ENV_BASE_PATH}/pc-guid?v_m=pc&url=" + encodeURIComponent(window.location.href);
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
    <script
      dangerouslySetInnerHTML={{
        __html: `
               window.onresize = function () {
                  getRem(750, 75);
                };
                function getRem(pwidth, prem) {//封装
                    var html = document.getElementsByTagName("html")[0];
                    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
                    html.style.fontSize = oWidth / pwidth * prem + "px";
                }
                getRem(750, 75);
            `,
      }}
    />
    <Component {...pageProps} />
  </>
}

export default MyApp
