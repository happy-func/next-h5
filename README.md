# NextJs实现h5兼容Pc端预览

>使用

```bash
yarn    # or npm install
#   开发
yarn dev
#   打包
yarn build
#   启动服务
yarn start
```

>   开发
>>  项目默认配置750像素的设计稿,可直接在样式表中依据设计稿使用`px`单位,会自动转译为`rem`.也可使用`vw`作为视图单位开发,将不做转译.详参[`postcss.config.js`](https://github.com/cuth/postcss-pxtorem/)
>>
>>  项目默认`html`字体大小,配置在`global.scss`文件,如需定制可自行修改
>>
>>  项目默认移除浏览器滚动条,避免滚动条宽度影响页面布局,配置在`global.scss`文件,如需定制可自行修改

>   实现思路
>>  在入口文件`server.js`判断当前访问是否属于PC环境,如果不属于正常返回页面,否则重定向到`/pc`路径下,并将原访问路径和参数一并带过去.在`/pages/pc.tsx`文件中,配置了`iframe`作为真实访问路径的加载窗口,凭借iframe的特性,也使上文中我们提到的使用`vw`作为视图单位的开发思路得以实现.同时,我们默认为`PC`页面添加了二维码浮窗,地址为原始访问地址,方便用户扫码访问以此提供更佳的访问体验.
