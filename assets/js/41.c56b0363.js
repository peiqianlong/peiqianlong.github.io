(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{679:function(s,n,a){"use strict";a.r(n);var t=a(15),c=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("h3",{attrs:{id:"项目环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[s._v("#")]),s._v(" 项目环境")]),s._v(" "),a("ul",[a("li",[s._v("前端框架：js+jq+html+css")])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("SASS 教程\nSASS 教程")]),s._v(" "),a("p",[s._v("1-1 SASS 简介\nCSS 不是一个编程语言，可以用它来开发网页样式，但是没有办法用它进行编程。SASS 的\n出现，让 CSS 实现了通过代码编程来实现的方式。\nSO...SASS 是一种 CSS 开发工具，提供了许多便利的写法，让 CSS 的处理实现了可编程\n处理。\nSASS 扩展了 CSS3，增加了规则、变量、混入、选择器、继承等等特性，可以生成风格良好\n的 CSS 样式表文件，易于组织和维护。\n1-2 SASS 安装\nSASS 是 Ruby 语言开发的一个用于动态编程 CSS 文件的框架，但是学习 SASS 跟 Ruby 没\n有任何关系，唯一的联系就是 SASS 的运行以来 Ruby 环境。\nSASS 官网：http://sass-lang.com/\n1-2.1 MAC 安装\nmac 上一般情况已经有 ruby 环境的支持，所以只需要打开终端，输入一下命令进行安装\nSASS 教程\ngem install sass\n备注：安装完成后，使用如下命令进行测试【查看安装版本命令】\nsass -v\n1-2.2 windows 安装\n 安装 ruby\n sass 的依赖环境，必须安装。\n 通过命令提示符黑窗口执行命令进行安装\ngem install sass\n1-3 QUICK START\n1-3.1 入门程序\n 文件结构\n|-- WORKSass/\n|-- css/\n|-- demo01.scss\n 在指定的文件夹中创建 demo01.scss 文本文件\n@charset ”utf-8”; // 设置支持中文注释\nbody{\nbackground-color:#fff;\nfont-size:16px;\n}")]),s._v(" "),a("p",[s._v(" 命令行中，执行如下命令进行编辑\n sass [scss_name]:<targetCss_name>\n sass scss 文件:编译好的目标 css 全路径名称\n 编译结果：在指定的文件夹 css 中生成了指定的 css 样式表文件：demo01.css\n1-3.2 自动编译命令\n watch 命令\n语法")]),s._v(" "),a("blockquote",[a("blockquote",[a("p",[s._v("sass --watch sass:css\nsass --watch 要监听的目录:编译后的 css 文件的位置\n 使用 watch 命令\n开始监听【--watch .:css 命令中，.表示当前目录】\n修改 sass 文件\nSASS 教程\n编写：老木\n命令行监听提示\n目标 css 文件样式\n1-3.3 编译输出格式\n默认情况下，SASS 提供了四种格式的 CSS 输入，默认情况输出是嵌套格式\n格式 描述\nnested 嵌套\ncompact 紧凑——\nexpanded 扩展——完全格式化标准\ncompressed 压缩——一行\n不同格式的展示方式\n 案例 1：嵌套格式——不常用\ndemo02.scss【以下是 sass 中嵌套格式的写法】\ndemo02.css【输出的 css 样式中，会保存这样的嵌套的缩进格式】\nSASS 教程")])])]),s._v(" "),a("p",[s._v(" 案例 2：紧凑格式——常用\n 修改输出样式\n >> sass --watch .:css --style compact\n命令行修改输出格式\n修改格式 demo02.scss\n输出格式 demo02.css\n 案例 3：扩展格式——常用——规范的 CSS 代码格式\n修改输出样式格式")]),s._v(" "),a("blockquote",[a("blockquote",[a("p",[s._v("sass --watch .:css --style expanded\n修改 demo02.scss 文件\n.. .代码同上. ..\n输出 demo02.css 文件格式\nSASS 教程")])])]),s._v(" "),a("p",[s._v(" 案例 4：压缩格式——常用——用于在线项目的小文件\n修改输出样式格式")]),s._v(" "),a("blockquote",[a("blockquote",[a("p",[s._v("sass --watch .:css --style compressed\n修改 demo02.scss 文件\n.. . 代码同上. ..\n输出 demo02.css 文件格式\n1-3.4 sass 扩展名\n .sass【sass3.0-版本】\n .scss【sass3.0+版本，常用】\n这两种在书写代码格式上，有一定的区别\n根据项目开发的规范，scss的写法和项目规范更加契合，同时代码的可读性也提高了很多，\n所以正常情况下，项目组都会采用.scss 格式的语法进行 sass 程序开发。\n.sass .scss\n备注：sass 有两种后缀名文件：一种后缀名为 sass，不使用大括号和分号；另一种就是我们这里使用的 scss 文件，这种\n和我们平时写的 css 文件格式差不 多，使用大括号和分号。而本教程中所说的所有 sass 文件都指后缀名为 scss 的文件。\n在此也建议使用后缀名为 scss 的文件，以避免 sass 后缀名的严 格格式要求报错。\nSASS 教程")])])]),s._v(" "),a("h2",{attrs:{id:"后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),a("p",[s._v("目前仍在不断地探索中\n"),a("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接去博主的csdn"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=c.exports}}]);