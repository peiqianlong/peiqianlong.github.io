(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{658:function(t,s,a){"use strict";a.r(s);var n=a(15),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("h3",{attrs:{id:"项目环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[t._v("#")]),t._v(" 项目环境")]),t._v(" "),a("ul",[a("li",[t._v("前端框架：html+css+jq")])]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("h3",{attrs:{id:"刚刚过了年就有人出了2020年的游戏-都很有意思哦-第三关解密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刚刚过了年就有人出了2020年的游戏-都很有意思哦-第三关解密"}},[t._v("#")]),t._v(" 刚刚过了年就有人出了2020年的游戏 都很有意思哦  第三关解密")]),t._v(" "),a("p",[t._v("想\n看\n解\n密\n吗")]),t._v(" "),a("p",[t._v("→")]),t._v(" "),a("p",[t._v("在这里")]),t._v(" "),a("h2",{attrs:{id:"第三关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三关"}},[t._v("#")]),t._v(" 第三关")]),t._v(" "),a("p",[t._v("答案：纳。")]),t._v(" "),a("h2",{attrs:{id:"设计解法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计解法："}},[t._v("#")]),t._v(" 设计解法：")]),t._v(" "),a("p",[t._v("反编译 wasm 得到判断密码正确的算法。其原始 C 代码如下：")]),t._v(" "),a("div",{staticClass:"language-c++ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  int f(int g){\n      return g==0?0:g+f(g/2);\n  }\n  int checkPassword(int pwd){\n      return f(pwd)==64859?pwd:0; // 纳 32435\n  }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"暴力解法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暴力解法："}},[t._v("#")]),t._v(" 暴力解法：")]),t._v(" "),a("p",[t._v("直接用 javascript 遍历可能的 unicode 值。\n然后这里可以用遍历等方式获得 pwd 值为 32435，即“纳”的 utf-16 编码。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkpwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("本人不会c  所以用的js")]),t._v(" "),a("p",[t._v("得到32435, String.fromCharCode(32435) 得“纳”。")]),t._v(" "),a("h2",{attrs:{id:"后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),a("p",[t._v("目前仍在不断地探索中\n"),a("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接去博主的csdn"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);