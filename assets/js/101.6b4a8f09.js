(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{738:function(t,e,n){"use strict";n.r(e);var s=n(15),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("h3",{attrs:{id:"项目环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[t._v("#")]),t._v(" 项目环境")]),t._v(" "),n("ul",[n("li",[t._v("前端框架：js+jq+html+css")])]),t._v(" "),n("h2",{attrs:{id:"示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),n("p",[t._v("Vue Cli 2.x构建的项目只有npm run dev和npm run build两条开发和编译的命令。而要添加测试环境，我们可以扩展一条npm run test的命令输出测试环境下执行的代码。\n1.在build文件夹中创建test.js文件\ntest.js中的代码很简单，就两行。主要就是配置一个环境变量用以区别测试和正式环境。这里没有直接修改原有的process.env.NODE_ENV是担心会影响到原本的逻辑。")]),t._v(" "),n("p",[t._v("注意：type的值必须单双引号两层嵌套，不能直接为’test’，否则会报错，具体代码如下：")]),t._v(" "),n("p",[t._v("// 配置环境变量 type 为 test\nprocess.env.type = '\"test\"'\n// 引入build.js文件，执行原先的编译代码\nrequire('./build')\n2.修改config文件夹中的prod.env.js文件\n配置好后就可以在项目代码中调用process.env.type了，代码如下")]),t._v(" "),n("p",[t._v("module.exports = {\nNODE_ENV: '\"production\"',\n// 将上文设置的环境变量，赋值到 type 属性上\ntype: process.env.type\n}\n3.在package.json文件中添加npm run test命令\n添加一条命令，执行我们上文创建的test.js文件")]),t._v(" "),n("p",[t._v('"scripts": {\n"dev": "node build/dev-server.js",\n"test": "node build/test.js",\n"build": "node build/build.js"\n},\n最后一步')]),t._v(" "),n("p",[t._v("let baseURL\n// 开发环境\nif (process.env.NODE_ENV === 'development') {\nbaseURL = 'http://192.168.1.110:8080/'\n// 编译环境\n} else {\n// 测试环境\nif (process.env.type === 'test') {\nbaseURL = 'http://test.xxx.com/'\n// 正式环境\n} else {\nbaseURL = 'http://app.xxx.com/'\n}\n}")]),t._v(" "),n("h2",{attrs:{id:"后记"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),n("p",[t._v("目前仍在不断地探索中\n"),n("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接去博主的csdn"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);