---
id: setting-up-clash-front-end-dashboard
slug: /clash/setting-up-clash-front-end-dashboard
title: 搭建 Clash 订阅转换平台
last_update:
  date: 2023-06-14 20:48:11
---


:::tip
如果你想直接使用 Clash 转码平台，不想知道这里的门道，那不妨直接点击[此处](https://clash.offshoreview.xyz)开始使用。
:::

## [前言](#preface)

网上有太多使用复杂的宝塔面板进行搭建 Clash 前端的教程，但它们基本都是要求通过宝塔面板来进行搭建。但是，这样的教程对于新手来说，虽然可以跟着走，但是依然不够「快」。如果你还不知道何为 Clash，那么请阅读[《什么是 Clash？》](/clash/introduction)

:::caution
国内版宝塔还要求输入手机号。
:::


而且，这其实是不符合第一性原理的，我的目的很明确，为什么要额外安装一个我并不需要的服务？

现在我们有了强大的 [Vercel 平台](https://vercel.com/dashboard)，对付一些简单的 Web 服务应用绰绰有余了。我们可以直接通过 GitHub 仓库一键进行部署，仅需要配置一个域名用于前端、拉取一个容器搞定后端就可以了，关键它也是持久免费的。

## 前置条件

- GitHub 账号
- VPS
- 在 VPS 上部署 [Nginx Proxy Manager](https://nginxproxymanager.com/)
- 前端域名
- 后端域名


## 开始动手

那么要搭建一个转换平台需要几步呢？

1. 搭建前端页面
2. 部署后端服务
3. 配置域名

Clash 转换平台主要由前端页面和后端服务构成。前端页面主要由 [sub-web](https://github.com/CareyWang/sub-web) 提供，后端服务可以直接采用 Docker 形式，更加便捷。

## 1. 搭建前端页面

来，找到市面上一切转换平台的幕后源头项目，大名鼎鼎的：[CareyWang/sub-web](https://github.com/CareyWang/sub-web)，然后轻轻地点一下右上角的 Fork 按钮，也就是“叉子”的意思，把它“夹”到自己的盘子里！（哈哈，这里的 Fork 是动词形式，专业一点叫分叉，也就是复制一份到自己的仓库里）

![](https://assets.offshoreview.xyz/zfile/new-docu/docu-work/clash-dashboard-01.png)

### 修改配置代码

我们需要将自己的域名与一些额外的配置写入至配置文件代码中，这样才能将“公共”的开源项目变成“你自己”的应用。现在在 Github 找到 `/sub-web/src/views/Subconverter.vue` 文件，点击右上角的编辑按钮开始进行修改。

![](https://resource.offshoreview.xyz/new-docu/85e3f58710dbbb035c0dfc57398a072d.png)

将位于 298 行的 `backendOptions:` 中的 `url` 修改为你的已解析域名。你可以按照下图进行修改，要记住保留 `/sub?` 后缀。

![](https://resource.offshoreview.xyz/new-docu/4e88e2bee76e92d37881241e183071ac.png)

然后在 299 行的 `remoteConfig` 中添加以下参数，这会扩充你的前端可选转换配置。

```vue
{
            label: "ACL4SSR",
            options: [
              {
                label: "ACL4SSR_Online 默认版 分组比较全 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"
              },
              {
                label: "ACL4SSR_Online_AdblockPlus 更多去广告 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"
              },
              {
                label: "ACL4SSR_Online_NoAuto 无自动测速 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Online_NoReject 无广告拦截规则 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"
              },
              {
                label: "ACL4SSR_Online_Mini 精简版 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"
              },
              {
                label: "ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"
              },
              {
                label: "ACL4SSR_Online_Full 全分组 重度用户使用 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"
              },
              {
                label: "ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"
              },
              {
                label: "ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量 (与 Github 同步)",
                value:
                  "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"
              },
              {
                label: "ACL4SSR 本地 默认版 分组比较全",
                value: "config/ACL4SSR.ini"
              },
              {
                label: "ACL4SSR_Mini 本地 精简版",
                value: "config/ACL4SSR_Mini.ini"
              },
              {
                label: "ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",
                value: "config/ACL4SSR_Mini_NoAuto.ini"
              },
              {
                label: "ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",
                value: "config/ACL4SSR_Mini_Fallback.ini"
              },
              {
                label: "ACL4SSR_BackCN 本地 回国",
                value: "config/ACL4SSR_BackCN.ini"
              },
              {
                label: "ACL4SSR_NoApple 本地 无苹果分流",
                value: "config/ACL4SSR_NoApple.ini"
              },
              {
                label: "ACL4SSR_NoAuto 本地 无自动测速 ",
                value: "config/ACL4SSR_NoAuto.ini"
              },
              {
                label: "ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",
                value: "config/ACL4SSR_NoAuto_NoApple.ini"
              },
              {
                label: "ACL4SSR_NoMicrosoft 本地 无微软分流",
                value: "config/ACL4SSR_NoMicrosoft.ini"
              },
              {
                label: "ACL4SSR_WithGFW 本地 GFW 列表",
                value: "config/ACL4SSR_WithGFW.ini"
              }
            ]
          },
```

如果不想用使用默认的后端转换地址，那么可以把 `const defaultBackend` 后的参数改为自己的域名。例如：

```vue
const defaultBackend = "https://your-domin.xyz" + '/sub?'
```

### 提交代码

修改完成后记得在 Github 上进行提交。

![](https://resource.offshoreview.xyz/new-docu/430fe484a7c546537f257e96cd1eb8b3.png)

## 2. 发布至 Vercel

这一步非常简单了。访问 [Vercel 平台](https://vercel.com/new)，然后 Import 刚刚修改好的 Clash 仓库。

![](https://resource.offshoreview.xyz/new-docu/a3c98cc21a670a62eb0ed693b59bd153.png)

然后点击 Deploy。稍等片刻，不出意外的话它会报错。

![](https://resource.offshoreview.xyz/new-docu/ab8f4909f7f151be753cd5e8b989b5d6.png)

这是因为 Vercel 默认的 Node 版本号 ≥ 20 ，而本项目并不需要这么高的 Node 版本，所以需要进入项目中的设置进行修改。在 Setting → General 中的 Node.js Version 处进行切换。

![](https://resource.offshoreview.xyz/new-docu/ddc1e11c0f4654507aaa43b5bdbd61fb.png)

部署完成后，Vercel 会默认给你分配一个免费的域名。不过还是建议你去 Domins 绑定前端域名，这一步需要跳转到域名管理后台中进行操作，把域名指向 Vercel 给你的地址就可以了。

![](https://resource.offshoreview.xyz/new-docu/52b07bd15e5b8c773f9cdc8f388385a5.png)

## 3. 部署后端应用

在 VPS 中拉取以下 Docker 镜像：

```bash
docker run -d --restart=always -p 25500:25500 tindy2013/subconverter:latest
```

等待镜像安装结束后，使用以下命令验证镜像是否正在提供服务：

```bash
curl http://localhost:25500/version
```

若返回 `subconverter vx.x.x backend` 则说明服务正在运行。

## 4. 将后端域名指向服务端口

登录你的 Nginx Proxy Manager（NPM）后台页面，然后添加 `Proxy`，把你的后端域名填写进来。IP 处不要填写 `127.0.0.1`，而是要写成 VPS 的公网 IP + 端口号，例如 `214.124.214.25`，Forward Port 端口号填写 25500。

![](https://resource.offshoreview.xyz/new-docu/5b3ca6b08e24031be5a65b98eab9f03d.png)

顺便开启 SSL 证书。

![](https://resource.offshoreview.xyz/new-docu/a6784ed8120b6bc444e7bfaaf3d9cc19.png)

绑定完成后，访问你的后端域名，如果出现的页面并非 Nginx 的报错提醒，那么意味着你已经成功搭建后端了。

![](https://resource.offshoreview.xyz/new-docu/836a3b5a7e7f65aeed44b11f39b6ac89.png)

至此，你就可以愉快的使用自己的 Clash 订阅转码平台了。
