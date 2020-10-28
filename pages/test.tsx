import React from 'react';

function TestPage({ noceStr, pathname}) {
    return <div>
        {noceStr}
        <iframe
            src={pathname}
            frameBorder="no"
            marginWidth={0}
            marginHeight={0}
            scrolling="no"
            title="博物馆"
        />
    </div>
}
TestPage.getInitialProps = async function({ query }) {
    const { pathname,mode } = query;
    console.log('pathname-----------'+pathname+'<<<<<<<<<<<<>>>>>>>>>>'+mode)
    return {
        pageTitle: '测试页面',
        noceStr: Math.random().toString(16).slice(2,14),
        pathname,
    }
}
export default TestPage;
