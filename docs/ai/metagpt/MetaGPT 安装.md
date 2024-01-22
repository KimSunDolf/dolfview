---
id: install
slug: ai/metagpt/install
title: MetaGPT 安装笔记
description: 本文介绍了如何安装 MetaGPT 并完成简单的环境初始化。
last_update:
  date: 2024-01-17 10:30:30
---

## 把代码仓库拉到本地

折腾一个开源项目第一件要做的事情就是要把代码仓库 Fork 到自己的 Github 账号里，然后拉到本地，灰常简单。不知道我在说什么的话，就先去学学 Git。

- 项目地址：[MetaGPT 代码仓库](https://github.com/geekan/MetaGPT)
- 课程文档：[MetaGPT 智能体开发入门](https://deepwisdom.feishu.cn/docx/UBoydfLRXodYjdxPKeyc9QWhnvW)

## 安装并初始化 MetaGPT

MetaGPT 的代码仓库里已经把依赖项都写到了 `requirements.txt` 文件里，我们只需要运行以下命令安装一下就可以了。

> 安装依赖前你需要在本机安装 Python3，安装过程不赘述了。

建议新建一个 python 虚拟环境进行折腾，因为 MetaGPT 中有大量的依赖项，可能对你本地原来的环境造成影响。

```bash
python -m venv your-name-env
```

在你的终端里运行以下命令触发自动安装：

```bash
git clone https://github.com/geekan/MetaGPT.git
cd /your/path/to/MetaGPT
pip install -e .
```

当你在终端里看到一行行跳跃的代码的时候，说明安装过程已经开始了。看着也还是挺解压的呢！

![](https://resource.offshoreview.xyz/new-docu/c7eb8457094147714a4a7fc435bd0b9d.png)

不过安装的时候出现了部分依赖报错，换了几个版本也没法解决，就先这样吧，看看后面有没有问题。

> 更换独立的开发虚拟环境后，该问题解决了。

## 配置环境变量

环境变量是个啥？别急，我们都知道 MetaGPT 只是一个开源框架，真正给我们干活的是厨房里的厨子——ChatGPT 或 Claude 这样的 AI 大模型。因此环境变量说的就是把召唤他们的命令或者秘钥填写至项目里，方便后续召唤他们干活。

现在新建 `config` 文件夹，复制 `config.yaml` 文件，基于此文件新建一个 `key.yaml` 文件。然后在其中填写对应的配置。

同时你还需要运行以下命令：

```bash
export OPENAI_API_KEY="sk-..."  填入你自己的OpenAI API key
export OPENAI_API_MODEL="intended model" 选择你要使用的模型，例如：gpt-4, gpt-3.5-turbo
export OPENAI_API_BASE="https://gptapi.wsyfin.com/v1" # 面向国内的网络环境，如果你的机子在美国就可以注释掉这一行了。
```

安装完成后，运行以下命令测试一下：

```bash
cd /your/path/to/MetaGPT/metagpt

python startup.py --idea "write a cli blackjack game"
```

如果一切顺利，你应该看到服务正在运行，不断地打印各个步骤。
