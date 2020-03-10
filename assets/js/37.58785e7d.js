(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{705:function(e,n,t){"use strict";t.r(n);var a=t(15),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),t("h3",{attrs:{id:"项目环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[e._v("#")]),e._v(" 项目环境")]),e._v(" "),t("ul",[t("li",[e._v("前端框架：js+jq+html+css")])]),e._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),t("p",[e._v("####模块化：-------》模块  ---》模组\n按需加载     相互依赖\n1、解决代码的冲突\n2、代码的维护性以及扩展性。\n3、提高代码的运行效率。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("es6\n\nexport default {\n}\n")])])]),t("p",[e._v('const http=require("http");// http模块\n1、导出\nmodule.exports\n2、引入\nrequire();//')]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("####总结：\n模块化：按需加载   相互依赖")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('// 引入（依赖）module文件夹下的my.js\nconst my = require("./module/my.js");\n\n// 引入（依赖）module文件夹下的my.js, js可以省略\nconst my = require("./module/my");\n\n// 引入（依赖）module文件夹下的默认index.js.\nconst my = require("./module");\n如果你要改变默认项的话，需要创建一个配置文件，名字为package.json\n{\n    "main":"my.js"//   将默认项修改为my.js\n}\n\n\n// 去node_modules文件夹下找my.js.如果找不到就看有没有my文件夹\nconst my= require("my");\n\n*************************************\n暴露的时候\nmodule.exports.userName="xixi";\nmodule.exports.age=90;\n')])])]),t("hr"),e._v(" "),t("p",[e._v("####md5是一个无法被反编译的编码。\n第三方的模块\nnpm install md5\nnpm i md5")]),e._v(" "),t("p",[e._v("npm install md5 --save-dev\nnpm i md5 -D")]),e._v(" "),t("p",[e._v('const md5 = require("md5");\nvar password= "123456";\nmd5(password);')]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v('path\nconst path =require("path");\npath.resolve();// 相当于当前路径\npath.resolve("../");// 上一级\npath.resolve("/");// 根目录')]),e._v(" "),t("p",[e._v('path.resolve("地址"，”相对于第一个参数“);------\x3e生成一个绝对地址')]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("####// 学会学习\nstorage:存储数据。 window下的一个对象\nlocalStorage\nsessionStorage")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("    写\n        localStorage.setItem(key,value);\n        localStorage.key=value;\n        localStorage[key]=value;\n    读：\n         localStorage.getItem(key);\n         localStorage.key;\n         localStorage[key];\n    删除：\n          localStorage.removeItem(key);// 删除一条\n          localStorage.clear();// 全部清空\n")])])]),t("hr"),e._v(" "),t("p",[e._v("单页面：\n路由。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("jsonp\n")])])]),t("p",[e._v("1、完成注册\n1、写接口\nget\nhttp://127.0.0.1/reg\nuserName\npassWord\npassWord2\n2、完成登陆\n3、退出")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("模块化\n-------------》")]),e._v(" "),t("h2",{attrs:{id:"后记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[e._v("#")]),e._v(" 后记")]),e._v(" "),t("p",[e._v("目前仍在不断地探索中\n"),t("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[e._v("链接去博主的csdn"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);