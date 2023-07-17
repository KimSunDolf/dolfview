---
slug: react-player
title: 如何引用 react-player？
date: 2023-07-16 23:49:16
tags: [Docusaurus, React]
authors: Dolf
---

## 介绍

在 Docusaurus 框架中的 md 文件插入视频有许多方式。不过我最喜欢的还是使用 ReactPlayer 组件。这个组件可以直接引用视频文件。

> 原方法源自 Stackoverflow，点击访问[原文链接](https://stackoverflow.com/questions/69179910/docusaurus-2-inclusion-of-a-video-file-in-a-markdown-file)。

<!-- truncate -->

## 方法

先在项目中安装插件：`npm install react-player`。

然后在需要引用视频的文档中插入：`import ReactPlayer from 'react-player'`，一般在 `---` 下面。

然后使用 `<ReactPlayer playing controls url='video.mp4' />` 就可以啦。
