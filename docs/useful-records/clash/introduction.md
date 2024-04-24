---
id: introduction
slug: /clash/introduction
title: 什么是 Clash？
last_update:
  date: 2023-06-20 20:42:04
---

Clash 是一个非常强大的工具，几乎兼容业内的主流协议。可以说，无论你试用的什么协议，**All in Clash**，不需要纠结要下载什么软件，把你手上的配置转码处理后丢给 Clash 就对了。Clash 作为开源软件，几乎席卷所有平台：安卓、iOS、macOS 与 Linux。

无论你乘坐的是什么航班，Clash 都可以能够帮助你办理任何登机手续。（并且界面更加美观）

![](https://assets.offshoreview.xyz/zfile/new-docu/57bfc5a16b70cfd0ae956ca19f6d69e2.png)

## 丰富的功能

Clash 提供了丰富的功能，例如：

- 支持多个代理服务器的配置和管理。
- 支持多个规则文件的导入和管理。
- 支持自定义规则和策略的编写和应用。
- 支持 HTTP 代理的筛选和重定向。
- 支持 DNS 解析的优化和加速。
- 支持开启局域网内代理服务器的共享。

Clash 既可以在终端命令行中使用，也可以在 GUI 用户界面中使用。它还可以轻松地在 Windows、MacOS、Linux 和 Android 等多个平台上使用。

## 什么是 Clash 订阅转码平台？

市面上存在两种订阅类型，一种叫**节点订阅链接**，另一种叫 **Clash 订阅链接**。节点订阅链接只能够被兼容特定协议的软件所识别，同理， Clash 这个工具只认 **Clash 订阅链接**。

常规的**节点订阅链接**并不能够直接在 Clash 上运行，因此需要有一个专门的 Clash 订阅转码平台来做这个事情，大部分**节点订阅链接**都能够转码为 **Clash 订阅链接**。虽然市面上已经有许许多多的转换平台，不过为了确保数据与订阅链接信息安全，最好还是自己搭建一个专用的平台。详细说明请阅读[《搭建 Clash 订阅转换平台》](/docs/clash/setting-up-clash-front-end-dashboard)。

## 如何下载并使用 Clash？

- [Windows 教程](https://help.offshoreview.xyz/windows)
- [macOS 教程](https://help.offshoreview.xyz/macos)
- [安卓教程](https://help.offshoreview.xyz/android)

iOS 上已经有类似 Shadowrocket 和 Surge 这样兼容很多协议的工具了，所以一般不在 iOS 上使用 Clash。并且 iOS 上的 Clash 软件并不多，所以也不用这么费劲折腾。

## 如何马上开始 Clash 转码？

![](https://assets.offshoreview.xyz/zfile/new-docu/110468d6f2310e9978ccef4f0eed7a36.png)

你可以尝试由本站搭建的 [Clash 转码服务](https://clash.offshoreview.xyz/)。不过为了防止信息泄露，我还是建议你自行搭建一个，在 Vercel 前端和 Docker 后端的加持下，搭建门槛已经可以降很多了。

## 转码后的“漏网之鱼”是什么意思？

![](https://assets.offshoreview.xyz/zfile/new-docu/075b63102db8077fce02d34702a372fd.png)

Clash 是一个分流策略工具，国外的网站用国外流量，国内的流量就用本地流量。那么 Clash 本质上也是通过内建一个域名清单数据库来进行分类的，记录着主流的国内外网站，依靠正则匹配浏览器的域名进行分流。不过总有一些小众网站是不在这个数据库里的，那么顾名思义这样的网站就叫做“漏网之鱼”了。你可以选择这些小众网站是走国外流量还是本地直连。

要论我说，那还是推荐你在“漏网之鱼”那选一个国外的节点，毕竟小众网站基本都是国外做的多，国内很少会有人去好好搭建 Web 网站。没错，移动互联网席卷下的 🇨🇳 不存在小众网站土壤。要么都是一些有情怀的程序员搭的，你用国外流量去访问也同样可以打开。
