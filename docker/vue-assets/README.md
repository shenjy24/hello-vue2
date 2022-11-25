## Docker部署
1.创建镜像

```
docker build -t vue-assets .
```

- `vue-assets`为自定义镜像名称。

2.启动镜像

```
docker run -d -p 28080:28080 -v D:/front/jackal-vue2-new/docker/vue-assets/assets/:/usr/share/nginx/assets/ --name vueAssets vue-assets
```

- `-v`将本地目录挂载到容器目录，那么在本地更新前端内容即可立即生效。
- `vueApp`为自定义容器名。
- `D:/front/jackal-vue2-new/docker/vue-assets/assets/`为放置静态资源目录，可根据实际情况修改。

3.常用操作

- 停止容器: `docker stop vueAssets`
- 启动容器: `docker start vueAssets`
- 重启容器: `docker restart vueAssets`
- 删除容器: `docker rm vueAssets`
- 删除镜像: `docker rmi vue-assets`
