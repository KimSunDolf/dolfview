---
slug: notion-dify
title: How to Build an Notion AI Assistant Based on Your Own Notes?
date: 2023-06-26 20:51:20
tags: [Dify,ai,notion]
authors: Dolf
---

## Intro

Notion is a powerful tool for knowledge managements. Its flexibility and extensibility make it a great personal knowledge library and common workspace. Many people use it to store their knowledge and collaborate with others, exchanging ideas and creating new knowledge.

However, this knowledge is still static, and users have to search for the information they need and read through it to find the answers they want. This process is not very efficient nor smart.

Have you ever dreamed of having an AI assistant that is based on your Notion library? It would not only help you review your knowledge base but also communicate like a senior butler, even answering other people's questions as if you were a master of your own library.


## How to Make Your Notion AI Assistant Come True?

Now, you can make it come true with [Dify](https://dify.ai/). Dify is an open-source LLMOps (Large Language Models Ops) platform.

Large Language Models like ChatGPT and Claude have used their impressive abilities to reshape the world. The key to their powerful learning ability is robust training data. Luckily, they are intelligent enough to learn from the content you provide, making the process of learning from your personal Notion library a reality.

Without Dify, you might need to familiarize yourself with langchain, which provides an abstraction that simplifies the process of composing these pieces.

Dify is an easy-to-use LLMOps platform designed to empower more individuals to create sustainable, AI-native applications. With visual orchestration for various application types, Dify offers ready-to-use applications that can assist you in utilizing data to construct your own AI assistant.


## How to Use Dify to Build your Own AI Assistant?

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

<img alt="connect-with-notion-2" src="https://pan.createvoyage.com/f/866UY/connect-with-notion-2.png" width="500px" />

Check the permission needed by Dify, and then click the "Select pages" button.

<img alt="connect-with-notion-3" src="https://pan.createvoyage.com/f/9Q1U2/connect-with-notion-3.png" width="500px" />

Select the pages you want to sync with Dify, and then click the "Allow access" button.

<img alt="connect-with-notion-4" src="https://pan.createvoyage.com/f/0V8Hm/connect-with-notion-4.png" width="500px" />

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

## Using API To Integrate With Your Project

Each AI application baked by Dify can be accessed via API. This approach allows developers to directly tap into the robust functionalities of large language models (LLMs) within frontend applications, offering a truely "Backend-as-a-Service" (BaaS) experience.

With effortless API integration, you can conveniently invoke your Notion AI application without the need for intricate configurations.

Click the "API Reference" button on the page of Overview page. You can see it as your App's API document.

![using-api-1](https://pan.wsyfin.com/f/wp0Cy/using-api-1.png)

### 1. Generate API Secret Key

For sercurity reason, it's recommened to generate an API secret key to access your AI application.

![using-api-2](https://pan.wsyfin.com/f/xk2Fx/using-api-2.png)

### 2. Retrieve Conversation ID

After chatting with your AI application, you can retrieve the session ID from the "Logs & Ann." pages.

![using-api-3](https://pan.wsyfin.com/f/yPXHL/using-api-3.png)

### 3. Invoke API

You can run the example request code on the API document to invoke your AI application in terminal.

Remember to replace `YOUR SECRET KEY` and `conversation_id` on your code.

> You can input empty `conversation_id` at the first time, and replace it after you receive response contained `conversation_id`.

```bash
curl --location --request POST 'https://api.dify.ai/v1/chat-messages' \
--header 'Authorization: Bearer ENTER-YOUR-SECRET-KEY' \
--header 'Content-Type: application/json' \
--data-raw '{
    "inputs": {},
    "query": "eh",
    "response_mode": "streaming",
    "conversation_id": "",
    "user": "abc-123"
}'
```

Sending request in terminal and you will get a successful response.

![using-api-4](https://pan.wsyfin.com/f/zpnI4/using-api-4.png)

If you want to continue this chat, go to replace the `conversation_id` of the request code to the `conversation_id` you get from the response.

And you can check all the conversation history on the "Logs & Ann." page.

![using-api-5](https://pan.wsyfin.com/f/ADQSE/using-api-5.png)

## Sync with notion periodically

If your Notion's pages have updated, you can sync with Dify periodically to keep your AI assistant up-to-date. Your AI assistant will learn from the new content and answer the new questions.

![create-app-5](https://pan.createvoyage.com/f/pQBFA/create-app-5.png)

## Summary

In this tutorial, you have learned not only how to import your Notion data into Dify, but also use API to integrate with your project. Do not hesitate to contact us if you have any questions.
