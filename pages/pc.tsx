import React from 'react';
import style from '../styles/pc.module.scss';

function TestPage({ pathname}) {
    return <div className={style.pageMain}>
        <iframe
            src={pathname}
            frameBorder="no"
            marginWidth={0}
            marginHeight={0}
            scrolling="no"
            title="博物馆"
            className={style.innerBox}
        />
    </div>
}
TestPage.getInitialProps = async function({ query }) {
    const { pathname } = query;
    return {
        pageTitle: '测试页面',
        pathname,
    }
}
export default TestPage;
