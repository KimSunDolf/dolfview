---
id: windows
slug: /tutorial/windows
title: Windows 教程
last_update:
  date: 2023/05/23
---

# Windows 教程

![](https://pan.createvoyage.com/f/RDF5/macos.png)

## 前言

Windows 采用的魔法上网方式为通过 Clash 协议实现上网。Clash 又称猫猫头协议，是一种基于 SOCKS5 的代理协议，其特点是可以通过配置文件实现代理规则的自定义，从而实现更加灵活的代理规则。

## 1. 提供邮箱注册飞鸟集

在微信中添加 admilk47 并提供邮箱，飞鸟集将会发送激活邮件到您的邮箱中；或者直接点击[此链接](https://www.offshoreview.xyz/auth/register)进行注册。

在邮箱中查收飞鸟集激活验证码。只有已激活试用 / 购买的账户才能够获取到节点配置，并且需要将配置导入至 Clash 后才能成功魔法上网，仅仅下载软件是不够的。

验证邮件长这样子 👇：

![](https://pan.createvoyage.com/f/VjHg/verify-email.png)

## 2. 下载软件

首先需要提前下载好 clash 软件。

- 点击[下载链接](https://pan.createvoyage.com/f/jESR/clash-for-windows.exe)。

下载完成后双击打开并安装在本地。

## 3. 获取订阅链接

访问[飞鸟集官网](https://www.offshoreview.xyz)并在首页中获取订阅链接。

![](https://pan.createvoyage.com/f/XBSO/subscribe.png)

或者通过邮箱查收此订阅链接。订阅链接的格式长这个样子 👇：

![](https://pan.createvoyage.com/f/YJTA/subscribe-url.png)

## 4.转换订阅链接

Clash 客户端无法识别常规的订阅链接，需要投喂专门的符合 Clash 协议的订阅链接才能识别，因此需要将订阅链接进行格式转换。现在前往 [Clash 转码网站](https://clash.offshoreview.xyz)进行转换。

在转换网页中选择使用基础模式，粘贴订阅链接后点击”生成订阅链接“按钮，最后点击”一键导入 Clash“ 按钮即可。

![](https://pan.createvoyage.com/f/ZxUQ/clash-1.png)

## 5. 打开并使用 Clash

导入完成后，在 Profiles 那一栏中检查是否选中了导入后的配置。下方红色进度条的意思是剩余流量还剩多少。选中这个带有进度条的配置（左侧出现绿条意味着已选中）。

![](https://pan.createvoyage.com/f/1lcq/clash-2.png)

确认选中配置后，前往 General 页，打开 system proxy 按钮就可以开始使用了。

![](https://pan.createvoyage.com/f/2Bf8/clash-3.png)

## 6. 配置代理规则（进阶使用）

访问国内应用不想走代理浪费流浪？想要调整所使用的节点？没问题，你可以在”Proxies”那一栏中进行调整。

推荐直接使用 Rule 规则。没有特殊情况下慎用 Global 全局模式，全局模式意味着即使你访问国内应用时也会强制走海外流量。

![](https://pan.createvoyage.com/f/4Oil/clash-5.png)

如果你想要灵活调整访问部分网站时是否走海外流量，那么你可以在 Profiles 一栏中进行调整。

![](https://pan.createvoyage.com/f/5Ds6/clash-6.png)

参考文件配置，添加你想要访问的网站。

![](https://pan.createvoyage.com/f/65ty/clash-7.png)
