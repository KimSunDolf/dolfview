---
id: how-to-transfer-chatgpt-api-service
slug: /ai/how-to-transfer-chatgpt-api-service
title: 三步搭建 ChatGPT API 中转代理
description: 调用 GPT API 会面临各种网络问题。本文将记录如何搭建起一个能够中转 ChatGPT API 服务，希望能够帮助你更爽的进行调用。
last_update:
  date: 2023-07-26 19:51:26
---

## 背景

ChatGPT 是最近非常罕见的一个“双向封锁”的超级应用，即它自身不面向中国用户提供服务，如果要用的爽你得搞定海外信用卡、海外手机号、海外 IP，并且它自己几乎是要在刚发布的时候就上了“功夫网（GFW）”的黑名单，网页版的使用非常不方便。

但 ChatGPT 还提供了 API 服务，这就意味着我们可以通过 API 来调用它的服务，搞定一个 API Key 就万事大吉可以使用了。并且对于各位懂哥而言，基于 API 封装下就可以当成自己的产品了。

虽然只需要获取到一个 API Key 就可以调用 GPT 服务，但是由于网络影响，它的 API 服务在国内的调用非常的不稳定，甚至有时候会出现完全无法调用的情况。万事万物都可以找代理，做中介。API 本身也不例外。不过我搜了一圈下来，合适的教程并不多，唯一一个比较好的是在 Github 项目里，于是萌发出写一个更友好教程的想法。

> 原文地址：[Github](https://github.com/SnowfallC/chatgpt-api-worker-proxy)。

## 代理原理

本文中谈到的方法主要是先将域名托管至 Cloudflare，然后使用 Cloudflare 的 Workers 服务来进行中转。这样做的好处是：

- Cloudflare Workers 本质上是一个后端函数服务，无需购置服务器就能够接受和处理请求
- Cloudflare 有非常多的节点，在全球任何一个地方请求都可以获得不错的网络体验
- Cloudflare Workers 服务每日可以免费调用一万次，完全够了
- Cloudflare Workers 服务支持自定义域名，可以让你的 API 代理地址看起来更专业（网站引流）

## 前置条件

- 自己的域名
- Cloudflare 账号
- 一点点耐心和动手能力

## 1. 将域名托管至 Cloudflare

点击 [Cloudflare](https://www.cloudflare.com/)，注册一个账号，然后将自己的域名托管至 Cloudflare。这个步骤比较简单，按照 Cloudflare 的页面提示照做即可，不再赘述。

![](https://one-du.offshoreview.xyz/new-docu/a754271ef79fc8facc3ad5c6d03b2b23.png)

## 2. 创建 Workers

> 以下 Cloudflare 简称为 CF。

回到 CF 首页，点击“创建 Worker”。CF 居然没有提供自定义选项，必须选择它的模板，所以可以先直接选择 Hello Word 模板，然后再编辑里面的代码。

![](https://one-du.offshoreview.xyz/new-docu/04af59a6ee6821eb651b12c59fb4ab5b.png)

进去后直接点击“部署”按钮。

![](https://one-du.offshoreview.xyz/new-docu/d909f62f4b69e2a485b5cfd4a906404d.png)

### 修改 Workers 代码

创建完成后需要进去修改代码，修改这部分代码：

![](https://one-du.offshoreview.xyz/new-docu/4990fd9d9e218672d622d1064f4e45c4.png)

修改为以下代码：

```js
const TELEGRAPH_URL = 'https://api.openai.com';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  url.host = TELEGRAPH_URL.replace(/^https?:\/\//, '');
  const modifiedRequest = new Request(url.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: 'follow'
  });
  const response = await fetch(modifiedRequest);
  const modifiedResponse = new Response(response.body, response);
  modifiedResponse.headers.set('Access-Control-Allow-Origin', '*');
  return modifiedResponse;
}
```

修改完之后不着急发送请求，直接点击右上角的“保存并部署”按钮。然后顺便重命名下这个 Workers。

![](https://one-du.offshoreview.xyz/new-docu/14d7b3417003801f0e13bf9bc4e3b6e9.png)

![](https://one-du.offshoreview.xyz/new-docu/9a261cc93b580f6ff918e3dd1a689fa1.png)

## 3. 绑定域名

Workers 创建好之后，前往你刚刚添加的那个域名。点击左侧菜单栏中的 “Workers 路由”，然后点击“添加路由”。

![](https://one-du.offshoreview.xyz/new-docu/424c34d137d74a7bee4dc7697e9974a6.png)

现在为你的代理链接想一个名字，比如说我这里想要以 `gptapi.wsyfin.com` 网址作为我的代理链接，那么我就在路由中输入 `gptapi.wsyfin.com/*`，然后选择刚刚创建的 Workers，点击“保存”按钮。

![](https://one-du.offshoreview.xyz/new-docu/b888d6f8d8018de1021856e2ba83939e.png)

最后再在 DNS 中添加这个地址，A 类型，内容写为 `2.2.2.2`，打开小云朵，点击保存即可。

![](https://one-du.offshoreview.xyz/new-docu/5d52630bd6e7182f7845097a3bc57d15.png)

## 验证请求是否成功

现在你可以使用你的域名来请求 GPT API 了，比如说我这里使用 `https://gptapi.wsyfin.com/v1/chat/completions` 来请求 GPT API，如果返回了以下内容，那么就说明你的代理已经搭建成功了。

![](https://one-du.offshoreview.xyz/new-docu/a6b26c74430aaee4ee5d8aa517650970.png)

等等，这是个报错信息呀！但是这个报错说明已经能够正确连接到 GPT 的官方 API 服务地址了，但是还需要输入一个 API Key 才能够让 GPT 解答我们的问题。现在在终端里输以下个命令，把 `Bearer` 后面的 `sk-xxxx` 替换成自己的 API Key 就可以正确得到返回结果啦。


```bash
curl --location 'https://gptapi.wsyfin.com/v1/chat/completions' \
--header 'Authorization: Bearer sk-********' \
--header 'Content-Type: application/json' \
--data '{
   "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "鲁迅为什么暴打周树人？"}]
 }'
```

来欣赏下 GPT3.5 是怎么糊弄我们的 🔽：

![](https://one-du.offshoreview.xyz/new-docu/a5871325bd34bab6a8bf02f566a7a666.png)


