---

title: .gitignore文件 使用git过滤文件

meta:
  - name: description
    content: node的初步体验
  - name: keywords
	content: node的初步体验
	
created: 2019/07/26

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css
  - gulp
  - node
  - mongodb

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例
在使用git的时候，项目目录下的.gitignore文件的作用是告诉git哪些文件不需要添加到版本管理中。 
以下列出常见的规则：

.git/               过滤掉整个.git文件夹
node_modules/  过滤掉整个node_modules文件夹
*.css                 过滤所有.css后缀的文件；
css/common.css :   过滤掉具体的文件


设置好 文件 .gitignore文件后，直接使用  git  add . 就可以把所有的文件添加上了。


例如

*.iml
.idea/
.ipr
.iws
*~
~*
*.diff
*.patch
*.bak
.DS_Store
Thumbs.db
.svn/
*.swp
.nojekyll
.project
.settings/
node_modules/


## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


