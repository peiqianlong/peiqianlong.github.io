(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{683:function(n,e,r){"use strict";r.r(e);var t=r(15),s=Object(t.a)({},(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),r("h3",{attrs:{id:"项目环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[n._v("#")]),n._v(" 项目环境")]),n._v(" "),r("ul",[r("li",[n._v("前端框架：js+jq+html+css")])]),n._v(" "),r("h2",{attrs:{id:"示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[n._v("#")]),n._v(" 示例")]),n._v(" "),r("p",[n._v('1、模块化\n引入（依赖）\nrequire\n导出（暴露）\nmodule.exports\n2、1、   require("./my");  // 1、当前的文件夹下的my.js   2、找当前文件夹下的my文件夹下的index.js\n2、   require("my");    // 1、node_modules my.js      2、node_modules  my  ---\x3eindex.js\n*********************************************************************8\nnpm cnpm\nnode_modules\nnpm install md5 --save-dev\n// 开发环境   生产环境\n************************************************************************888\nconst md5=require("md5");\nmd5(xxxx);')]),n._v(" "),r("hr"),n._v(" "),r("p",[n._v("storage\n*****************************************************************8\ntoken\n***********************88\nincludes:  数组的方法，字符串")]),n._v(" "),r("hr"),n._v(" "),r("p",[n._v("目标：\n1、跨域\n1、jsonp\n2、后台允许跨域\n3、中转\n2、post(初步的了解)\n图书管理\n1、增加，删除，修改，查找")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v('    * req.headers.origin   可以得到协议域名端口号信息\n\n    1、允许一个访问：http://127.0.0.1\n        res.writeHead(200,{\n            "Access-Control-Allow-Origin":"http://127.0.0.1"\n        })\n    2、允许所有访问：*\n                  res.writeHead(200,{\n                      "Access-Control-Allow-Origin":"*"\n                  })\n    3、允许多个：\n           var originArr=[\n                "http://localhost:63342",\n                "http://127.0.0.1:81",\n                "http://10.35.161.2",\n                "http://10.35.161.3",\n                "http://10.35.161.4",\n                "http://10.35.161.5",\n                "http://10.35.161.6",\n                "http://10.35.161.7"\n            ]\n            if(originArr.includes(req.headers.origin)){\n                res.writeHead(200,{\n                    "Access-Control-Allow-Origin":req.headers.origin// 将所有的访问源放入到白名单\n                })\n            }\n')])])]),r("hr"),n._v(" "),r("p",[n._v('var querystring = require("querystring");// 对接收数据的转换  urlencode ---\x3e对象')]),n._v(" "),r("p",[n._v("var str = \"a=1&b=2\";\nconsole.log(querystring.parse(str));// { a: '1', b: '2' }\n**********************************************8\n图书管理系统\n目标：\n1、完成对图书的添加\n2、完成对图书的类别切换\n3、模糊搜索\n4、图书的删除\n5、图书的修改")]),n._v(" "),r("hr"),n._v(" "),r("p",[n._v("1、管理系统：对你项目当中的数据进行管理的。\n项目：数据   代码\n京东：\n页面（前端展示）------》面向群体：用户")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v("京东的后台管理：是对数据进行操作（增删改查）  面向的群体：京东的运营人员\n    项目：\n        运营人员看到的那一部分--》前端\n")])])]),r("p",[n._v("*****************************************************************8888888")]),n._v(" "),r("p",[n._v("/修改/\n1、点击修改时调用接口\n根据ID获得相对应的信息\n2、将该信息在你的表单中进行体现，将提交按钮变为修改按钮\n3、点击修改按钮，提交表单")]),n._v(" "),r("h2",{attrs:{id:"后记"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[n._v("#")]),n._v(" 后记")]),n._v(" "),r("p",[n._v("目前仍在不断地探索中\n"),r("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[n._v("链接去博主的csdn"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);