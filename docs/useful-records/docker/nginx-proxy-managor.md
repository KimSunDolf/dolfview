---
id: nginx-proxy-managor
slug: /useful-records/docker/nginx-proxy-managor
title: Nginx Proxy Manager
last_update:
  date: 2023/04/22
---

Nginx Proxy Manager 是一款好用的反向代理工具。如何理解？就是它是一个 Web 管理面板，可以为机子上的任何端口中的服务分配一个域名，访问域名 = 访问端口服务。

Nginx Proxy Manager 又简称为 NPM，对于 Docker 项目特别有用，我们会多次用到它。

## 前置条件

VPS 一台

预装 Docker：`docker version > /dev/null || curl -fsSL get.docker.com | bash`

预装 Docker compose：`apt install docker-compose`

少许 Linux 基础知识（大脑无法运行安装命令）

## 安装

在任意目录下创建 `docker-compose.yml` 文件并填写以下内容：

```yml
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
```

然后运行安装命令：

```bash
docker-compose up -d

# If using docker-compose-plugin
docker compose up -d
```

然后访问地址：http://127.0.0.1:81/ 

进去后修改账号和密码。默认账号 / 密码：

```text
Email:    admin@example.com
Password: changeme
```

