---
id: multi-ssh
slug: /useful-records/multi-ssh
title: 如何在同一个机器上新建多个 SSH 并与 Github 连接
---

## 问题说明

当你存在多个 Github 账号时（个人/工作），而本机上又只有一个 SSH 密钥对时。例如在早期的时候为了拉取公司项目，先生成了一个 SSH 密钥对，然后将它添加到了公司 Github 账号里。后面想重新拉回个人账号下的代码仓库时，想将同一个 SSH 密钥提交到个人的 Github 账号里，却发现它会报这个提示：`Key is already in use`。

![](https://r2.offshoreview.xyz/2024/09/25b5f6fa9c131f041572b5f62b94d5c0.png)

## 原因与解决办法

这是因为 Github 会检查 SSH 密钥是否已经存在至某个 Github 账号内，如果存在的话，就不会再添加了。所以我们可以在本地生成多个 SSH Key，然后分别添加到不同的 Github 账号里。

### 1. 生成多个 SSH Key

打开终端（Mac/Linux）或 Git Bash（Windows）。运行以下命令，替换 your_email@example.com 为你的 GitHub 邮箱，key_name 为你想给这个 key 起的名字：

```bash
ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/key_name
```

例如：

```bash
ssh-keygen -t ed25519 -C "work@example.com" -f ~/.ssh/github_work
ssh-keygen -t ed25519 -C "personal@example.com" -f ~/.ssh/github_personal
```

### 2. 配置 SSH 配置文件

运行以下命令创建或编辑 `~/.ssh/config` 文件：

```bash
nano ~/.ssh/config
```

添加以下内容，为每个 key 创建一个 Host：

```bash
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_work

Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/github_personal
```

保存并关闭文件。

### 3. 将 SSH key 添加到 SSH agent

启动 SSH agent：

`eval "$(ssh-agent -s)"`

添加你的 SSH key 到 SSH agent：

```bash
ssh-add ~/.ssh/github_work
ssh-add ~/.ssh/github_personal
```

### 4. 添加 SSH key 到 GitHub 账户

对于每个 GitHub 账户：

复制公钥内容：
`cat ~/.ssh/github_work.pub`
# 或
`cat ~/.ssh/github_personal.pub`

登录到对应的 GitHub 账户。

点击右上角的头像，选择 "Settings"。

在左侧菜单中，点击 "SSH and GPG keys"。

点击 "New SSH key" 或 "Add SSH key"。

在 "Title" 字段中，为你的 key 添加一个描述性名称。

将复制的公钥内容粘贴到 "Key" 字段。

点击 "Add SSH key"。

### 5. 测试连接

测试每个 SSH 连接：

`ssh -T github-work`

`ssh -T github-personal`

如果成功，你会看到一条欢迎消息。

然后你就可以用新增的 Github SSH key 来拉取代码了。
