---
id: how-to-transfer-chatgpt-api-service
slug: /ai/how-to-transfer-chatgpt-api-service
title: 如何中转 ChatGPT API 服务
description: 调用 GPT API 会面临各种网络问题。本文将记录如何搭建起一个能够中转 ChatGPT API 服务，希望能够帮助你更爽的进行调用。
last_update:
  date: 2023-07-26 19:51:26
---

## 背景

ChatGPT 是最近非常罕见的一个“双向封锁”的应用，即它自身不面向中国用户提供服务，而它自己几乎是要在刚发布的时候就上了“功夫网（GFW）”的黑名单。网页版的使用非常不方便，于是就有人盯上了它的 API 服务。（没办法，实在是太好用了，基于 API 封装下就可以当成自己的产品了）这也使得它的 API 服务在国内的调用非常的不稳定，甚至有时候会出现完全无法调用的情况。

万事万物都可以找代理，做中介。API 本身也不例外。不过我搜了一圈下来，合适的教程并不多，唯一一个比较好的是在 Github 项目里，于是萌发出写一个更友好的教程。

## 前置条件

- 自己的域名
- Cloudflare 账号或其它 Serverless 服务
- 一点点耐心和动手能力

## 将域名托管至 Cloudflare

点击 [Cloudflare](https://www.cloudflare.com/)，注册一个账号，然后将自己的域名托管至 Cloudflare。这个步骤比较简单，不再赘述。



