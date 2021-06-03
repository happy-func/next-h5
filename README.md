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

##   开发
>  项目默认配置750像素的设计稿,可直接在样式表中依据设计稿使用`px`单位,会自动转译为`rem`.也可使用`vw`作为视图单位开发,将不做转译.详参[postcss.config.js](https://github.com/cuth/postcss-pxtorem/)
>
>>  项目默认`html`字体大小,配置在`pages/_app.tsx`文件,如需定制可自行修改
>
>>>  项目默认移除`PC`浏览器滚动条,避免滚动条宽度影响页面布局,配置在`global.scss`文件,如需定制可自行修改

>>> 路由跳转使用`components/BaseLink`，内部方法封装判断当前是否PC环境加载以确定跳转方式。

##   实现思路
>  在入口文件`pages/_app.tsx`判断当前访问是否属于PC环境,如果不属于正常返回页面,否则重定向到`/pc-guid`路径下,并将原访问路径和参数一并带过去.在`/pages/pc-guid.tsx`文件中,配置了`iframe`作为真实访问路径的加载窗口,凭借iframe的特性,也使上文中我们提到的使用`vw`作为视图单位的开发思路得以实现.同时,我们默认为`PC`页面添加了二维码浮窗,地址为原始访问地址,方便用户扫码访问以此提供更佳的访问体验.

##  是否推荐
>   不推荐此实现方式,h5页面本身的着力点应该是体验性,不再追求传统的`SEO`,以优秀的体验稳住流量,依赖微信等社交工具实现裂变传播.如果需求、业务场景比较简单，可以考虑这一实现方式，否则请使用更加专业的 [uni-app](https://uniapp.dcloud.io/) 来做`h5`业务.
>> 好吧，我收回我之前的话。使用NextJs并不单单是为了SEO，甚至这只是其中最微不足道的一部分，而我们真正在意的问题是，加载速度。NextJs可以避免单页面应用程序的白屏效应，做成真正的静态的多页面应用程序。而React成为了我们模块化开发的最佳工具。这样，我们便同时收获了速度和模块化两种体验。这是uni-app在项目变得越来越庞大的时候所无法比拟的。

## 使用解析
>   [潜行者-基于React的SSR框架NextJs实现h5兼容Pc端](https://www.deepworker.online/article/5f9d40329c55b42d6d7bc520)

![效果预览](https://raw.githubusercontent.com/happy-func/next-h5/main/public/preview.png)
