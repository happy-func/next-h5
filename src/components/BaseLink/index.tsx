import React from "react";
import Link from 'next/link';
import qs from 'qs';

interface Props{
  src: string;
}

const genSrc = function (src: string): string {
  // 如果身处iframe
  try {
    if (window && window.self !== window.top) {
      const path = src.split('?')[0];
      const paramsObj = qs.parse(src.split('?')[1]);
      paramsObj.v_m = 'pc';
      return `${path}?${qs.stringify(paramsObj)}`
    }
    return src;
  } catch {
    return src;
  }
}

// 路由跳转基础组件
const BaseLink: React.FC<Props> = function ({ src, children }) {
  return <Link href={genSrc(src)} passHref>
    <a>{children}</a>
  </Link>
}

export default BaseLink;
