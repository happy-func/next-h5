import React, { useEffect, useState } from 'react';
import style from '@/styles/pc.module.scss';
import Qrcode from 'qrcode.react';
import qs from 'qs';
import {getQueryVariable} from "../utils";

function TestPage() {
    const [path, setPath] = useState('');
    useEffect(() => {
        const url = getQueryVariable('url');
        const BaseUrl = decodeURIComponent(url).split('?')[0];
        const paramsObj = qs.parse(decodeURIComponent(url).split('?')[1]);
        paramsObj.v_m = 'pc';
        setPath(BaseUrl + '?' + qs.stringify(paramsObj));
    }, []);
    return (
        <div className={style.pageWrap}>
            <div className={style.pageMain}>
                {!!path && (
                    <iframe
                        src={path}
                        frameBorder="no"
                        marginWidth={0}
                        marginHeight={0}
                        scrolling="no"
                        title="nextjs learn"
                        className={style.innerBox}
                    />
                )}
                <div className={style.qrcodeWrap}>
                    <div className={style.qrcodeBox}>
                        <Qrcode value={path} size={180} style={{width: '100%',height: '100%'}}/>
                    </div>
                    <div className={style.qcodeDesc}>手机扫码使用体验更佳</div>
                </div>
            </div>
        </div>
    )
}
export default TestPage;
