---
slug: notion-dify
title: How to Build an Notion AI Assistant Based on Your Own Notes?
date: 2023-07-07 22:42:03
tags: [Dify,ai,notion]
authors: Dolf
---

![notion-cover](https://pan.wsyfin.com/f/YEJfA/notion-cover.png)

## Intro

Notion is a powerful tool for managing knowledge. Its flexibility and extensibility make it an excellent personal knowledge library and shared workspace. Many people use it to store their knowledge and work in collaboration with others, facilitating the exchange of ideas and the creation of new knowledge.

![notion-library](https://pan.wsyfin.com/f/xG2Hx/notion-library.png)

However, this knowledge remains static, as users must search for the information they need and read through it to find the answers they're seeking. This process is neither particularly efficient nor intelligent.

Have you ever dreamed of having an AI assistant based on your Notion library? This assistant would not only assist you in reviewing your knowledge base, but also engage in the communication like a seasoned butler, even answering other people's questions as if you were the master of your personal Notion library.

![notes-ai.png](https://pan.wsyfin.com/f/wj0Hy/notes-ai.png)

<!-- truncate -->

## How to Make Your Notion AI Assistant Come True?

Now, you can make this dream come true through [Dify](https://dify.ai/). Dify is an open-source LLMOps (Large Language Models Ops) platform.

Large Language Models like ChatGPT and Claude, have been using their impressive abilities to reshape the world. Their powerful learning aptitude primarily attributable to robust training data. Luckily, they've evolved to be sufficiently intelligent to learn from the content you provide, thus making the process of ideating from your personal Notion library, a reality.

![ai-learning](https://pan.wsyfin.com/f/r0Rf2/ai-learning.webp)

Without Dify, you might need to acquaint yourself with langchain, an abstraction that streamlines the process of assembling these pieces.

## How to Use Dify to Build Your Personal Notion AI Assistant?

The process to train a Notion AI assistant is relatively straightforward. Just follow these steps:

1. Login to Dify.
2. Create a new datasets.
3. Connect with Notion and your datasets.
4. Start training.
5. Create your own AI application.

### 1. Login to dify

Click [here](https://dify.ai/) to login to Dify. You can conveniently log in using your GitHub or Google account.

> If you're using your GitHub account to login, how about giving this [project](https://github.com/langgenius/dify) a star? It really supports us!

![login-1](https://pan.wsyfin.com/f/ERGcp/login-1.png)

### 2. Create a new datasets

Click the `Datasets` button on the top side bar, followed by the `Create Dataset` button.

![login-2](https://pan.wsyfin.com/f/G6ziA/login-2.png)

### 3. Connect with Notion and Your Datasets

Select "Sync from Notion" and then click the "Connect" button.

![connect-with-notion-1](https://pan.wsyfin.com/f/J6WsK/connect-with-notion-1.png)

Afterward, you'll be redirected to the Notion login page. Log in with your Notion account.

<img alt="connect-with-notion-2" src="https://pan.wsyfin.com/f/KrEi4/connect-with-notion-2.png" width="500px" />

Check the permissions needed by Dify, and then click the "Select pages" button.

<img alt="connect-with-notion-3" src="https://pan.wsyfin.com/f/L91iQ/connect-with-notion-3.png" width="500px" />

Select the pages you want to synchronize with Dify, and press the "Allow access" button.

<img alt="connect-with-notion-4" src="https://pan.wsyfin.com/f/M8Xtz/connect-with-notion-4.png" width="500px" />

### 4. Start training

Specifying the pages for AI need to study, enabling it to comprehend the content within this section of Notion. Then click the "next" button.

![train-1](https://pan.wsyfin.com/f/Nkjuj/train-1.png)

We suggest selecting the "Automatic" and "High Quality" options to train your AI assistant. Then click the "Save & Process" button.

![train-2](https://pan.wsyfin.com/f/OYoCv/train-2.png)

Enjoy your coffee while waiting for the training process to complete.

![train-3](https://pan.wsyfin.com/f/PN9F3/train-3.png)

### 5. Create Your AI application

You must create an AI application and link it with the dataset you've recently created.

Return to the dashboard, and click the "Create new APP" button. It's recommended to use the Chat App directly.

![create-app-1](https://pan.wsyfin.com/f/QWRHo/create-app-1.png)

Select the "Prompt Eng." and link your notion datasets in the "context".

![create-app-2](https://pan.wsyfin.com/f/R6DT5/create-app-2.png)

I recommend adding a 'Pre Prompt' to your AI application. Just like spells are essential to Harry Potter, similarly, certain tools or features can greatly enhance the ability of AI application.

For example, if your Notion notes focus on problem-solving in software development, could write in one of the prompts: 

*I want you to act as an IT Expert in my Notion workspace, using your knowledge of computer science, network infrastructure, Notion notes, and IT security to solve the problems*.

![create-app-6](https://pan.wsyfin.com/f/pgYtA/create-app-6.png)

It's recommended to initially enable the AI to actively furnish the users with a starter sentence, providing a clue as to what they can ask. Furthermore, activating the 'Speech to Text' feature can allow users to interact with your AI assistant using their voice.

![create-app-7](https://pan.wsyfin.com/f/qjjuX/create-app-7.png)

Finally, Click the "Publish" button on the top right of the page. Now you can click the public URL in the "Overview" section to converse with your personalized AI assistant!

![create-app-4](https://pan.wsyfin.com/f/W69cD/create-app-4.png)

## Utilizing API to Integrate With Your Project

Each AI application baked by Dify can be accessed via its API. This method allows developers to tap directly into the robust characteristics of large language models (LLMs) within frontend applications, delivering a true "Backend-as-a-Service" (BaaS) experience.

With effortless API integration, you can conveniently invoke your Notion AI application without the need for intricate configurations.

Click the "API Reference" button on the page of Overview page. You can refer to it as your App's API document.

![using-api-1](https://pan.wsyfin.com/f/wp0Cy/using-api-1.png)

### 1. Generate API Secret Key

For sercurity reason, it's recommened to create new API secret key to access your AI application.

![using-api-2](https://pan.wsyfin.com/f/xk2Fx/using-api-2.png)

### 2. Retrieve Conversation ID

After chatting with your AI application, you can retrieve the session ID from the "Logs & Ann." pages.

![using-api-3](https://pan.wsyfin.com/f/yPXHL/using-api-3.png)

### 3. Invoke API

You can run the example request code on the API document to invoke your AI application in terminal.

Remember to replace `YOUR SECRET KEY` and `conversation_id` on your code.

> For the first time, you can enter an empty `conversation_id`, and replace it after you receive a response containing `conversation_id`.

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

Sending request in terminal and you will receive a successful response.

![using-api-4](https://pan.wsyfin.com/f/zpnI4/using-api-4.png)

If you wish to continue this chat, replace the `conversation_id` in the request code with the `conversation_id` you received from the response.

You can check all the conversation history on the "Logs & Ann." page.

![using-api-5](https://pan.wsyfin.com/f/ADQSE/using-api-5.png)

## Sync with notion periodically

If your Notion's pages have updated, you can sync with Dify periodically to keep your AI assistant up-to-date. Your AI assistant will learn from the new content.

![create-app-5](https://pan.wsyfin.com/f/XDBfO/create-app-5.png)

## Summary

In this tutorial, we have learned not only how to import Your Notion data into Dify, but also know how to use the API to integrate it with your project. 

[Dify](https://dify.ai/) is a user-friendly LLMOps platform targeted to empower more individuals to create sustainable, AI-native applications. With visual orchestration designed for various application types, Dify offers ready-to-use applications that can assist you in utilizing data to craft your distinctive AI assistant. Do not hesitate to contact us if you have any inquiries.
