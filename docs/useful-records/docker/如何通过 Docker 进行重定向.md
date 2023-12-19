---
id: redirect-docker
slug: /useful-records/docker/redirect-docker
title: 如何轻松使用 Docker 进行重定向？
last_update:
  date: 2023-12-18 21:49:43
---

Docker 真是一个非常牛逼的工具，以至于许多服务都是通过 Docker 占用一个端口号，然后再通过端口映射 + [Nginx Proxy Manager](/docs/useful-records/docker/nginx-proxy-managor) 就可以提供服务了，不需要再折腾复杂的 Nginx 或者宝塔什么之类的平台，一行命令，一行配置就能完事。

不过最近就碰到了一个重定向问题，当 A 服务器上的 4091 端口上的服务已经停止服务，服务迁移到 B 服务器上了应该怎么办？想要将原来的域名直接指代 B 服务器，而 B 服务器上的端口又写了反向代理配置，无法直接修改 A 服务器上的指向配置，必须通过网页重定向来解决，此时应该如何处理？

这时候只需要原 4091 端口上启动一个 Nginx Docker 服务，写好一个重定向的 html 文件就可以了。

## HTML 代码配置

先在 A 服务器上新建立一个文件夹 `redirect`，然后在里面新建一个 `HTML` 代码文件，写好重定向功能。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="3;url=https://your-new-web">
    <title>Redirecting</title>
</head>
<body>
    <p>xxx 因为什么原因要执行跳转，3s 后自动跳转</p>
    <script>
        setTimeout(function() {
            window.location.href = "https://your-new-web";
        }, 3000);
    </script>
</body>
</html>
```

## Docker 配置

然后就在这个 `HTML` 文件中的路径启动一个 Nginx 的 Docker 服务，然后将 HTML 文件挂载进去。命令如下：

```bash
docker run --name redirect-container -v /root/redirect:/usr/share/nginx/html:ro -p 4091:80 -d nginx
```

然后就可以啦，现在尝试访问 `http://a-server-ip:4091`，看看网页是否执行了自动跳转！
