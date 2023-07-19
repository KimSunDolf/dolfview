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

![](https://one.offshoreview.xyz/docu-work/507f38b1be34e557b5fe52be586b5b64.png)

咨询 ChatGPT 后，我得到一个非常好用的 Python 脚本，效果如下：

![](https://one.offshoreview.xyz/docu-work/6157a9d891966574bf59f956043096a2.png)

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

## 自动提取静态网站下的所有链接 URL

如果你现在打包出了一个静态网站项目，但是不清楚里面的所有 URL 是否都能够正常打开，那么不妨使用下面的代码将所有的 URL 提取出来，然后使用工具进行批量检测。

> 我现在改用 [claude.ai](https://claude.ai) 来为我写脚本，这是一款可以媲美 GPT4 效果并且还免费的 AI 服务。

### 代码

```py
import xml.etree.ElementTree as ET
import os

# 查找并读取sitemap.xml文件
sitemap_path = os.path.join('build', 'sitemap.xml')  
tree = ET.parse(sitemap_path)
root = tree.getroot()

# 提取所有url元素 
urls = []
for url in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
    urls.append(url.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text)

# 将URL写入文件
with open('redirect.md', 'w') as f:
    f.write('# Redirects\n')
    for url in urls:
        f.write(f'- [{url}]({url})\n')

print('Extracted URLs saved to redirect.md')
```

提取出的链接统一为：`![]()` 格式。如果你想要仅保留链接，可以使用下面的代码进行替换：

```py
import re

with open('your-file.md') as f:
  content = f.read()

# 使用正则表达式匹配[]内的URL
pattern = r'\[(.*?)\]' 
urls = re.findall(pattern, content)

# 把URL写入新文件
with open('done.md', 'w') as f:
  for url in urls:
    f.write(url + '\n')
    
print('URLs extracted to old-urls.txt')
```