---
id: scripts-by-gpt
slug: /ai
title: 自动化脚本
last_update:
  date: 2023/05/24
---

本文将记录在工作的过程中由 AI 给出的自动化脚本，希望能够帮助你解决类似的场景问题。如果你有额外的需求，欢迎联系我。

> 微信：admilk47

## 自动删除附带多余前缀的文件

场景：文件夹中夹杂了非常多的异常文件，它们统一带了一个 `._` 前缀，例如：

![](https://pan.createvoyage.com/f/318S2/1.png)

咨询 ChatGPT 后，我得到一个非常好用的 Python 脚本，效果如下：

![](https://pan.createvoyage.com/f/4xOtl/2.png)

仅需一秒，它就干掉了所有混乱的文件，只留下了我需要的文件。爽！

### 代码

代码需在 Python 环境下运行。

```python
import os
import re

# 准备正则表达式模式，用于匹配含有 "._" 前缀的文件名
pattern = re.compile(r'^\._')

# 列出目标文件夹下所有的文件和子文件夹
root_dir = './'
for dirpath, dirnames, filenames in os.walk(root_dir):
    # 遍历当前目录下所有文件
    for filename in filenames:
        # 组装路径
        path = os.path.join(dirpath, filename)
        
        # 如果文件名带有 "._" 前缀，就删除该文件
        if re.match(pattern, filename):
            os.remove(path)
            print(f"{path} 已删除")

```