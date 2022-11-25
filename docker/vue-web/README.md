## Docker部署
1.创建镜像

```
docker build -t vue-web .
```

- `vue-web`为自定义镜像名称。

2.启动镜像

```
docker run -d -p 18080:18080 -v D:/front/jackal-vue2-new/docker/vue-web/dist/:/usr/share/nginx/html/ --name vueWeb vue-web
```

- `-v`将本地目录挂载到容器目录，那么在本地更新前端内容即可立即生效。
- `vueWeb`为自定义容器名。
- `D:/front/jackal-vue2-new/docker/vue-web/dist/`为打包目录，可根据实际情况修改。

3.常用操作

- 停止容器: `docker stop vueWeb`
- 启动容器: `docker start vueWeb`
- 重启容器: `docker restart vueWeb`
- 删除容器: `docker rm vueWeb`
- 删除镜像: `docker rmi vue-web`
