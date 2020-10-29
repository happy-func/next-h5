import React from 'react';
import style from '@/styles/pc.module.scss';
import Qrcode from 'qrcode.react';

function TestPage({ pathname}) {
    return (
        <div className={style.pageWrap}>
            <div className={style.pageMain}>
                <iframe
                    src={pathname}
                    frameBorder="no"
                    marginWidth={0}
                    marginHeight={0}
                    scrolling="no"
                    title="nextjs learn"
                    className={style.innerBox}
                />
                <div className={style.qrcodeWrap}>
                    <div className={style.qrcodeBox}>
                        <Qrcode value={pathname} size={180} style={{width: '100%',height: '100%'}}/>
                    </div>
                    <div className={style.qcodeDesc}>手机扫码使用体验更佳</div>
                </div>
            </div>
        </div>
    )
}
TestPage.getInitialProps = async function({ query }) {
    const { pathname } = query;
    return {
        pageTitle: '手机扫码使用体验更佳',
        pathname,
    }
}
export default TestPage;
