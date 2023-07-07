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

However, this knowledge remains static, as users must search for the information they need and read through it to find the answers they're seeking. This process is neither particularly efficient nor intelligent.

Have you ever dreamed of having an AI assistant based on your Notion library? This assistant would not only assist you in reviewing your knowledge base, but also engage in the communication like a seasoned butler, even answering other people's questions as if you were the master of your personal Notion library.

<!-- truncate -->

## How to Make Your Notion AI Assistant Come True?

Now, you can make this dream come true through [Dify](https://dify.ai/). Dify is an open-source LLMOps (Large Language Models Operations) platform.

Large Language Models, like ChatGPT and Claude, have been using their impressive abilities to shape the world. Their powerful learning aptitude primarily attributable to robust training data. Luckily, they've evolved to be sufficiently intelligent to learn from the content you provide, thus making the process of ideating from your personal Notion library, a reality.

Without Dify, you might need to acquaint yourself with langchain, an abstraction that streamlines the process of assembling these pieces.

Dify is a user-friendly LLMOps platform targeted to empower more individuals to create sustainable, AI-native applications. With visual orchestration designed for various application types, Dify offers ready-to-use applications that can assist you in utilizing data to craft your distinctive AI assistant.

## How to Use Dify to Build Your Personal AI Assistant?

The process to train a Notion AI assistant is relatively straightforward. Just follow these steps:

1. Login to Dify.
2. Create new datasets.
3. Connect with Notion and your datasets.
4. Initiate training.
5. Create your AI application.

### 1. Login to Dify

Click [here](https://dify.ai/) to login to Dify. You can conveniently log in using your GitHub or Google account.

> If you're using your GitHub account to login, how about giving this [project](https://github.com/langgenius/dify) a star? It really supports us!

![login-1](https://pan.wsyfin.com/f/ERGcp/login-1.png)

### 2. Create New Datasets

Click the `Datasets` button on the top side bar, followed by the `Create Dataset` button.

![login-2](https://pan.wsyfin.com/f/G6ziA/login-2.png)

### 3. Connect with Notion and Your Datasets

Select "Sync from Notion" and then click the "Go to Connect" button.

![connect-with-notion-1](https://pan.wsyfin.com/f/J6WsK/connect-with-notion-1.png)

Afterward, you'll be redirected to the Notion login page. Log in using your Notion account.

<img alt="connect-with-notion-2" src="https://pan.wsyfin.com/f/KrEi4/connect-with-notion-2.png" width="500px" />

Check the permissions needed by Dify, and then click the "Select pages" button.

<img alt="connect-with-notion-3" src="https://pan.wsyfin.com/f/L91iQ/connect-with-notion-3.png" width="500px" />

Select the pages you want to synchronize with Dify, then press the "Allow access" button.

<img alt="connect-with-notion-4" src="https://pan.wsyfin.com/f/M8Xtz/connect-with-notion-4.png" width="500px" />

### 4. Initiate Training

Designate the pages that AI needs to study, enabling it to comprehend the content within this specific section of Notion. Then click the "Study Now" button.

![train-1](https://pan.wsyfin.com/f/Nkjuj/train-1.png)

We suggest selecting the "Automatic" and "High Quality" options to train your AI assistant. Then click the "Save & Process" button. 

![train-2](https://pan.wsyfin.com/f/OYoCv/train-2.png)

Enjoy your coffee while waiting for the training process to complete.

![train-3](https://pan.wsyfin.com/f/PN9F3/train-3.png)

### 5. Create Your AI Application

You must create an AI application and link it with the dataset you've recently created.

Return to the dashboard, and click the "Create new App" button. We recommend directly using the Chat App.

![create-app-1](https://pan.wsyfin.com/f/QWRHo/create-app-1.png)

Select the "Prompt Eng." and include your Notion datasets in "context". 

![create-app-2](https://pan.wsyfin.com/f/R6DT5/create-app-2.png)

We suggest adding a 'Pre Prompt' for your AI application. Like spells are crucial to Harry Potter, certain tools or functionalities can significantly enhance the capabilities of an AI application. 

For instance, if your Notion notes are primarily about resolving issues related to software development, you could incorporate in your prompts: 

*I would like you to act as an IT Expert within my Notion workspace, utilizing your existing knowledge in computer science, network infrastructure, Notion notes, and IT security to rectify problems.*

![create-app-6](https://pan.wsyfin.com/f/pgYtA/create-app-6.png)

We recommend starting by enabling the AI to actively provide the users with an opening statement. It provides a hint as to which questions they can ask. In addition, activating the 'Speech to Text' feature can users allow to interact with your AI assistant through their voice.

![create-app-7](https://pan.wsyfin.com/f/qjjuX/create-app-7.png)

Finally, Click on the "Publish" button located at the upper right of the page. Now, you can go to the public URL in the "Overview" section to converse with your personalized AI assistant!

![create-app-4](https://pan.wsyfin.com/f/W69cD/create-app-4.png)

## Utilizing API to Integrate With Your Project

Each AI application created with Dify can be accessed via its API. This method allows developers to tap directly into the robust characteristics of large language models (LLMs) within frontend applications, delivering a true "Backend-as-a-Service" (BaaS) experience. 

With effortless API integration, you can conveniently invoke your Notion AI application without the necessity for complicated configurations.

Click the "API Reference" button on the Overview page. You can refer to it as your App's API document.

![using-api-1](https://pan.wsyfin.com/f/wp0Cy/using-api-1.png)

### 1. Generate API Secret Key

For security reasons, we recommend generating an API secret key to access your AI application.

![using-api-2](https://pan.wsyfin.com/f/xk2Fx/using-api-2.png)

### 2. Retrieve Conversation ID

After chatting with your AI application, you can retrieve the session ID from the "Logs & Ann." pages.

![using-api-3](https://pan.wsyfin.com/f/yPXHL/using-api-3.png)

### 3. Invoke API

You can run the example request code on the API document to invoke your AI application in the terminal.

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

Enter the request in the terminal, and you will receive a successful response.

![using-api-4](https://pan.wsyfin.com/f/zpnI4/using-api-4.png)

If you wish to continue this chat, replace the `conversation_id` in the request code with the `conversation_id` you received from the response.

You can check all conversation history on the "Logs & Ann." page.

![using-api-5](https://pan.wsyfin.com/f/ADQSE/using-api-5.png)

## Synchronizing with Notion Periodically

If your Notion's pages have updated, you can sync with Dify periodically to keep your AI assistant current. Your AI assistant will learn from the new content and answer updated questions.

![create-app-5](https://pan.wsyfin.com/f/XDBfO/create-app-5.png)

## Summary

In this tutorial, you have learned not only how to import Your Notion data into Dify, but also how to use the API to integrate it with your project. Do not hesitate to contact us if you have any inquiries.
