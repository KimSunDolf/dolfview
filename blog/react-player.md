---
slug: react-player
title: 如何在 Docusaurus 中引用 react-player 控件？
date: 2023-07-16 23:49:16
tags: [Docusaurus, React]
authors: Dolf
---

## 介绍

在 Docusaurus 框架中的 md 文件插入视频有许多方式。不过我最喜欢的还是使用 ReactPlayer 组件。这个组件可以直接引用视频文件。

> 原方法源自 Stackoverflow，点击访问[原文链接](https://stackoverflow.com/questions/69179910/docusaurus-2-inclusion-of-a-video-file-in-a-markdown-file)。

<!-- truncate -->

## 什么是 React-player 控件？

ReactPlayer 是一个 React 组件，可以在 React 应用程序中轻松嵌入视频。它支持 YouTube，Vimeo 和 Dailymotion，SoundCloud 和文件（mp4，ogg，webm）。它支持渐进式下载，以便在加载时播放大型文件。

它的主要特征包括:

- 支持多种格式:支持 Youtube, Facebook, Twitch, SoundCloud, Streamable, Vimeo 等主流视频站点的链接,也支持 HLS、DASH 格式的视频流。
- 简单易用:只需要传入视频链接或流地址就可以播放,使用非常简单。
- 响应式设计:可以设置 wrapper 来适应不同大小的播放器。
- 灵活配置:可以配置自动播放、循环播放、是否显示控制栏等。
- 轻量级:体积小,可以很方便集成到 React 项目中。
- 良好文档:提供详细的[英文文档](https://www.npmjs.com/package/react-player)和示例代码。
- 开源免费:发布在 Github上,采用 MIT 开源协议。

## 前置操作

先在项目中安装插件：`npm install react-player`。然后在 css 文件中添加以下代码：

```css
// 引入 ReactPlayer
.react-player {
  width: 100% !important;
  height: auto !important;
}
```

## 开始使用

在需要引用视频的文档的头部插入命令：`import ReactPlayer from 'react-player'`，这一般在 `---` 下面。

例如：

```md
---
title: xxxx
description: xxxx
---

import ReactPlayer from 'react-player'

## Introduction

Your words.
```

然后在文档中插入代码 `<ReactPlayer playing controls url='video.mp4' />` 就可以啦。

:::secondary
记得把 `video.mp4` 替换为你的真实视频路径。
:::
