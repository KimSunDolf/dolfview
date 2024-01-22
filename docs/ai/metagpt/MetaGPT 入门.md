---
id: start
slug: ai/metagpt/start
title: MetaGPT 课程入门笔记
description: 本文介绍了如何安装 MetaGPT 并完成简单的环境初始化。
last_update:
  date: 2024-01-15 08:38:03
---

## 背景

本文是非常火热的 AI Agent 开源项目[《MetaGPT智能体开发入门》](https://deepwisdom.feishu.cn/docx/RJmTdvZuPozAxFxEpFxcbiPwnQf)的学习笔记。

- [MetaGPT 代码仓库](https://github.com/geekan/MetaGPT)

> 没错，我报名了他们家的免费公开课！（自豪

<img alt="connect-with-notion-2" src="https://resource.offshoreview.xyz/new-docu/a66e0a1fa044088be2638f52667883ba.png" width="200px" />

## MetaGPT 是什么？

AI Agent 想必是 2024 最火热的 AI 应用领域，谁不想要一个不吃不喝光听这个使唤的超级员工呢？给出需求，然后坐等结果。老板卷我，我就去卷 AI！反正都是结果导向谁怕谁？~~（只是谁最终是老板还不一定~~

虽然先这样有了 ChatGPT，但是不代表它会自动帮你干活，它的劣势在于只会对你的一句话进行回应，你需求什么，它给你什么。而 AI Agent 就不一样了，你给它一句话需求，比如说我想要设计出一个 2048 小游戏，它就会哼哧哼哧进行脑补，然后寻求最佳路径进行实现。

可以说，AI Agent 智能体才能在最大程度解放打工人。那么应该如何实现呢？MetaGPT 横空出世，你可以把它当成是一个工具箱，里面内置并写好了一些实现逻辑，你再也不用纠结应该怎么样设计才能让 GPT 自动开始干活，

相当于你走进了一家店里，然后使唤 MetaGPT 这个服务员，然后服务员和后厨里的 ChatGPT 说一声，做好之后 MetaGPT 就会给你端过来你需要的菜品。

MetaGPT 只是**中间件、中间件、中间件**！它不是一个 AI 产品，你最终还是要在厨房里配置好 LLM（大模型）的！！所以现在让我们开始学习和折腾吧。

## 第一期必修课文

工欲善其事必先利其器，第一件事就是熟悉和了解你的工具。MetaGPT 的每节课都有课文，以下是第一节导读课：

- [MetaGPT 智能体开发入门](https://deepwisdom.feishu.cn/docx/UBoydfLRXodYjdxPKeyc9QWhnvW)

本节导读课比较简单，大致介绍了什么是 MetaGPT 以及系统的组成单位以及学习规划。

## 课程阅读笔记

建议带着以下目的去阅读并学习整个课程：

- 我要掌握**智能体概念**以及能够**阅读相关智能体源代码**
- 我要基于 Metagpt 实现比 GPTs（OpenAI 官方出的 AI 应用商店） 更加丰富的工作流编排

在阅读导读课的时候，我是很开心的，因为我本身就是一个重度信息收集者，我每天都需要接触和处理大量信息，其实很依赖推荐机制。作为一名科技内容工作者，我对信息的获取渠道十分依赖，如果我能够以来 MetaGPT 开发出高质量的信息订阅智能体，那么我的学习速度一定会更加高效，同时对内容质量的把控一定会更加符合我的预期。

### 订阅智能体的三要素

打造一个订阅智能体需要以下三个单位：Role、Trigger、Callback，即智能体本身、触发器、数据回调。

- **Role**

  这一个步骤要实现一个 Watcher 的角色，帮我们关注并分析热门的开源项目，当有相关信息时进行推送。

- **Trigger**

  指定 Watcher 在什么时间或什么条件下触发。

- **Callback**

  清洗和整理由 Watcher 收集到的信息，然后发送至微信或 Discord。

### 实现效果

![](https://resource.offshoreview.xyz/new-docu/8b0ee49ff2281f779de9861a608438ec.png)

## 安装笔记

好了，工具和概念都熟悉了，现在是时候开始动手折腾了！点击右下角的“下一篇”阅读安装笔记。
