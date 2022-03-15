# jjj_shop_web

> 1.0.0

## Build Setup

```bash
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

安装所有依赖项：yarn或yarn install
安装一个且只有一个版本的软件包： yarn install --flat
强制重新下载所有软件包： yarn install --force
只安装生产依赖关系： yarn install --production


## jsconfig.json配置Webpack别名，识别@
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"],
}
```
