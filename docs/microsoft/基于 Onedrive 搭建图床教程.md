---
id: onemanagor
slug: /microsoft/onemanagor
title: 搭建 OneManagor + Picgo 图床教程
last_update:
  date: 2024-02-17 11:30:11
---

写博客的时候，一键上传图片到图床是很常见的操作。本文介绍的图床管理方案由 OneDrive + OneManagor + Picgo 组成，可以实现截图后，自动上传到 OneDrive，并直接生成 markdown 格式的图片链接。

并且这个方案不仅还可以上传图片，上传各式各样的文件都是支持的✅。

## 准备工作

开始动手搭建之前需要认识这三样工具，如果你已经熟悉了就可以直接跳过这一部分。

### OneDrive

> 需手动注册账号。

OneDrive 是微软提供的云端硬盘服务，可以用来存储各种文件，包括图片、视频、文档、音乐等。当你拥有了一个 Office E3 开发者账号后，你将会解锁一个 5T 的硬盘，并且这个硬盘所给出的直链是直通微软 CDN 的。

OneDrive 个人普通账户享有 5G 的空间。如果你需要 5T 的云盘空间，请联系微信：admilk47。

### OneManagor

> 需在 VPS 上手动搭建。

有了 OneDrive 微软云盘后，每次传文件登录后台再获取直链是很麻烦的，因此我们可以通过 API + 前端面板的形式，直接自建一个文件直连管理平台。于是 OneManagor 项目应运而生，这是一个由 PHP 写的开源项目。

![](https://assets.offshoreview.xyz/zfile/new-docu/f4c1811c2ed50e3c8f2fd92afdd1d8d9.png)

:::info
点击此处访问 [Github 开源地址](https://github.com/qkqpttgf/OneManager-php)。
:::

### Picgo

> 需在 Github 上下载。

Picgo 是一个开源的图床上传工具，可以将截图上传到图床，并生成 Markdown 格式的图片链接。安装 OneManagor [图床插件](https://github.com/laoxinH/picgo-plugin-onemanager)后，Picgo 就可以读取剪贴板的图片并自动上传，非常方便。

![](https://assets.offshoreview.xyz/zfile/new-docu/42d16797fcd90c81303a846565632b16.png)

:::info
点击此处访问 [Github 开源地址](https://github.com/PicGo)。
:::

## 开始搭建 OneManagor

下载压缩包，并在宝塔面板中解压。

- 下载地址：[OneManager-php-master.zip](https://assets.offshoreview.xyz/zfile/new-docu/b47cbd897a1f4c48ec90a3b315c52bc3.zip)

给予 `.data` 目录下的 ``config.php`` 文件 666 权限。

![](https://assets.offshoreview.xyz/zfile/new-docu/290262befa6603d32f49ada34531a53b.png)

在宝塔网页设置中的 `URL Rewrite` 中写入以下伪静态代码：

```nginx
rewrite ^/(.*) /index.php?/$1 last;
```

然后访问域名即可打开网址，按照网页提示，登录 Onedrive 自动授权。

一切都弄好之后，记得在 OneDrive 盘中开启访客授权。

![](https://assets.offshoreview.xyz/zfile/new-docu/b4fc16487e9c0bbe6affbe3384e33c7e.png)

## 配置 Picgo

先在 Picgo 内安装 OneManagor 插件。

![](https://assets.offshoreview.xyz/zfile/new-docu/b101375fc2080383d78bb1412127ef40.png)

然后在 OneManagor 的选项中填入图床文件夹 URL（你的访客授权里填写的路径）。

![](https://assets.offshoreview.xyz/zfile/new-docu/11aa79832724cb8dd1f905eed9d572eb.png)

然后就大功告成啦，你可以在 Picgo 的设置中选择 OneManagor 作为图床，然后复制图片后，点击自动上传，成功后会出现以下提醒。

![](https://assets.offshoreview.xyz/zfile/new-docu/324ce081f9990e8fae49ca6d2e146545.png)
