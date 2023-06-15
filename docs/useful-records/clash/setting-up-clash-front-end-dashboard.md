---
id: setting-up-clash-front-end-dashboard
slug: /clash/setting-up-clash-front-end-dashboard
title: 搭建 Clash 订阅转换前端
last_update:
  date: 2023-06-14 20:48:11
---

## 什么是 Clash 订阅链接？

Clash 是一个非常强大的代理工具，代理规则也更加的强大，兼容业内主流协议。可以说，All in Clash，并且 Clash 作为开源软件，席卷几乎所有平台：安卓、iOS、macOS，甚至 Linux 都能够兼容。但常规的链接并不能够直接在 Clash 上运行，因此我们需要一个转换平台。虽然市面上已经有许许多多公共的转换平台，不过为了确保数据安全，我们还是需要自己搭建一个转换平台。

## 框架构成

Clash 转换平台主要由前端页面和后端服务构成。前端页面主要由 [sub-web](https://github.com/CareyWang/sub-web) 提供，后端服务可以直接采用 Docker 形式，更加便捷。


## 前置条件

业内常用的 Clash 订阅转换前端为



