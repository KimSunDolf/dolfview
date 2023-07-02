---
slug: notion-dify
title: How to build an Notion AI assistant based on your own notes?
date: 2023-06-26 20:51:20
tags: [Dify,ai,notion]
authors: Dolf
---

## Intro

Notion is a powerful tool for knowledge management. It's flexibility and extensibility make it a great personal knowledge library and common workspace. Lots of people are using it to store their knowledge and collaborate with others, exchanging ideas and creating new knowledge.

But those knowledge are still static, and you have to search for the knowledge you need, and you have to read them to get the answer you want. It's not very efficient, and it's not very smart.

Did you even dream of having an AI assistant that is based on your own Notion library, not only help you review your knowledge base, and talk like a senior butler, even answer others questions just like a master of your own library?

## How to make it come true?

Now, you can make it come true with [Dify](https://dify.ai/). Dify is an Open source LLMOps(Large Language Models Ops) platform 

Large Language Models like ChatGPT and Claude have use its shakening abailty to impress the world. The key to their powerful learning abality is training data. Lucily, they are smart enough to learn from the content you provided, which make the process of learning from personal notion library come true.

Without Dify, you might need to learn how to use langchain, which provides an abstraction that simplifies the process of composing these pieces. 

Dify is an easy-to-use LLMOps platform designed to empower more people to create sustainable, AI-native applications. With visual orchestration for various application types, Dify offers out-of-the-box, ready-to-use applications that can help you use data to build your own AI assistant.

## How to use Dify to build your own AI assistant?

The process of trainging Notion AI assistant is very simple. You just need to follow the steps below:

1. Login to Dify.
2. Create a new datasets.
3. Connect with Notion and datasets.
4. Start training
5. Create your own AI application

### 1. Login to dify

Click [here](https://dify.ai/) to login to Dify. You can use your GitHub account and Google account to login directly.

> If you are using GitHub account to login, how about getting this [project](https://github.com/langgenius/dify) a star? It really help us a lot!

![](https://pan.createvoyage.com/f/59ns6/login-1.png)

### 2. Create a new datasets

Click the `Datasets` button on the top side bar, and then click the `Create Dataset` button.

![login-2](https://pan.createvoyage.com/f/6R8Hy/login-2.png)

### 3. Connect with Notion and datasets

Select "Sync from Notion" and click the "Go to Connect" button.

![connect-with-notion-1](https://pan.createvoyage.com/f/7L6hZ/connect-with-notion-1.png)

Then, you will be redirected to the Notion login page. Login with your Notion account.

![connect-with-notion-2](https://pan.createvoyage.com/f/866UY/connect-with-notion-2.png)

Check the permission needed by Dify, and then click the "Select pages" button.

![connect-with-notion-3](https://pan.createvoyage.com/f/9Q1U2/connect-with-notion-3.png)

Select the pages you want to sync with Dify, and then click the "Allow access" button.

![connect-with-notion-4](https://pan.createvoyage.com/f/0V8Hm/connect-with-notion-4.png)

### 4. Start training

Specifying the pages for AI need to study, enabling it to comprehend the content within this section of Notion. Then Click the "Allow access" button.

![train-1](https://pan.createvoyage.com/f/gLnuG/train-1.png)

It's recommended to select "Automatic" and "High Quality" way to train your AI assistant. Then click the "Save & Process" button.

![train-2](https://pan.createvoyage.com/f/jq8TR/train-2.png)

Have a coffee time and wait the training process to finish.

![train-3](https://pan.createvoyage.com/f/kZoF5/train-3.png)

### 5. Create your own AI application

You need to create an AI application and then connect with the datasets you just created.

Return to the dashboard, and click the "Create new APP" button. It's recommended to use Chat App directly.

![create-app-1](https://pan.createvoyage.com/f/l5vCX/create-app-1.png)

Select the "Prompt Eng." and add your notion datasets in the "context".

![create-app-2](https://pan.createvoyage.com/f/mQ7tW/create-app-2.png)

It's recommended to add "Pre Prompt" to help users to know what they can ask. Finally, Click the "Publish" button on the top right of the page.

![create-app-3](https://pan.createvoyage.com/f/nrNfm/create-app-3.png)

Now you can click the public URL at the "Overview" to chat with your own AI assistant!

![create-app-4](https://pan.createvoyage.com/f/oQ7Cv/create-app-4.png)

## Sync with notion periodically

If your Notion's pages have updated, you can sync with Dify periodically to keep your AI assistant up-to-date. Your AI assistant will learn from the new content and answer the new questions.

![create-app-5](https://pan.createvoyage.com/f/pQBFA/create-app-5.png)

## 提纲

1. 概述 Dify 可以导入 Notion 数据
2. 这件事对于用户自己的价值，以及对于 Dify 的价值
3. 如何导入？
4. 后续同步 Notion 数据
5. 开始问答（结果验证）


题目备选：
1. 将你的 Notion 数据投喂给 GPT，打造个人 Notion 知识库的 AI 助手。
2. Notion + AI：最懂你的个人知识库人工智能。