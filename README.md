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

## Docker部署
1.创建镜像

```
docker build -t vue-app .
```

- `vue-app`为自定义镜像名称。

2.启动镜像

```
docker run -d -p 18080:18080 -v D:/front/jackal-vue2-new/dist/:/usr/share/nginx/html/ --name vueApp vue-app
```

- `-v`将本地目录挂载到容器目录，那么在本地更新前端内容即可立即生效。
- `vueApp`为自定义容器名。

3.常用操作

- 停止容器: `docker stop vueApp`
- 启动容器: `docker start vueApp`
- 重启容器: `docker restart vueApp`
- 删除容器: `docker rm vueApp`
- 删除镜像: `docker rmi vue-app`
