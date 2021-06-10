import React, { useEffect } from "react";
import { useRouter } from 'next/router';
import Head from "next/head";

/*
* head 头部单独注入依赖示范
* */
export default function TestPage(){
    const { query } = useRouter();
    const { id } = query;
    useEffect(() => {
        console.log(id, query)
    }, [id]);
    return (
      <div>
          <Head>
              <script src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js"></script>
          </Head>
      </div>
    );
}
