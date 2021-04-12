import React, { useEffect, useState } from 'react';
import style from '@/styles/pc.module.scss';
import Qrcode from 'qrcode.react';
import qs from 'qs';
import { useRouter } from 'next/router'
import { PROJ_TITLE } from "@/constant";

function PCGuid() {
    const [path, setPath] = useState('');
    const { query } = useRouter();
    const { url } = query;
    useEffect(() => {
        if (url) {
            const BaseUrl = decodeURIComponent(url as string).split('?')[0];
            const paramsObj = qs.parse(decodeURIComponent(url as string).split('?')[1]);
            paramsObj.v_m = 'pc';
            setPath(BaseUrl + '?' + qs.stringify(paramsObj));
        }
    }, [url]);
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
                        title={PROJ_TITLE}
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
export default PCGuid;
