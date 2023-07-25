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

## 自动批量检测链接是否能够打开

场景：当你接手的一个网站历史悠久，但发现 SEO 权重非常的一般，那有可能是因为坏链太多，导致搜索引擎判断这个网站的站点地图有很多不可靠，最终影响到网站权重。

当你列出了 sitemap 文件后，这里面的链接总不能挨个手动点吧？这时候，你需要一个自动化脚本，能够帮你批量检测网站的链接是否能够打开。

### 前置条件

获取网站的 sitemap 文件，里面会列出这个网站的所有链接。当然，你也可以手动导入 csv 文件，格式大概长这样（其实就是包含完整 URLs 的地址）：

```text
https://estruturarte.com.br/pickup/F1850555
https://ns.hashva.com/mah.php?wqyaesdppr/sj-371792.html
https://classbclass.ir/content.php?pickup/K1178460
https://forexreprogramming.com/pickup/I1752252
https://eglow.mx/pickup/K1221646
```
### 代码

代码需在 Python 环境下运行。

```python
import csv
import requests
from tqdm import tqdm

urls_file = 'output_10.csv' # 填写你的文件路径
result_file = 'result/output-10-result.csv' # 填写检测结果的存放路径

with open(urls_file, 'r') as f:
    reader = csv.reader(f)
    urls = [row[0] for row in reader]

results = []

for url in tqdm(urls):
    try:
        response = requests.get(url, timeout=5)
        if response.status_code == 200:
            result = 'success'
        else:
            result = 'fail'
    except requests.Timeout:
        result = 'timeout'
    except:
        result = 'error'

    results.append([url, result])

with open(result_file, 'w') as f:
    writer = csv.writer(f)
    writer.writerow(['URL', 'Result'])
    writer.writerows(results)
```

