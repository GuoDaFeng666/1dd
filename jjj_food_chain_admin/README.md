# jjj_shop_web

> 1.0.0

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 常见错误
#### 1、提示缺少python2的环境变量，则先安装python2.7并设置好python环境变量后再执行npm install.
#### 2、如果提示node-saas包问题，则执行npm install node-sass --save，如果提示要4.12.0版本的，则执行npm install node-sass@4.12.0 --save。
- node-sass 4.13.0
- sass-loader 7.3.1
- //卸载掉
- npm uninstall sass-loader node-sass
- //执行
- npm install sass-loader@对应版本号 sass@1.26.5  --save-dev
- npm install sass-loader@7.3.1 sass@1.26.5  --save-dev
- 若是还不行就在吧 node-sass和sass-loader删除
- 执行安装sass@1.26.5应该好了
- npm install sass@1.26.5  --save-dev
