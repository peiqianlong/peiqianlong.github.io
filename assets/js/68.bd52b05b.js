(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{727:function(s,n,a){"use strict";a.r(n);var t=a(15),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("h3",{attrs:{id:"项目环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[s._v("#")]),s._v(" 项目环境")]),s._v(" "),a("ul",[a("li",[s._v("前端框架：js+jq+html+css")])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190221110515279.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21sb25seQ==,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),s._v("\n父组件向子组件传值是利用props")]),s._v(" "),a("p",[s._v("子组件中的注意事项：props:['greetMsg']，注意props后面是[]数组可以接收多个值，不是{}。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("                            且此处的greetMsg用greet-msg会报错，记住需用驼峰法命名\n")])])]),a("p",[s._v("非父子组件进行传值\n非父子组件之间传值，需要定义个公共的公共实例文件bus.js，作为中\t    间仓库来传值，不然路由组件之间达不到传值的效果。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("import Vue from 'vue'\nexport default new Vue()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//组件A：\n<template>\n  <div>\n    A组件:\n    <span>{{elementValue}}</span>\n    <input type="button" value="点击触发" @click="elementByValue">\n  </div>\n</template>\n<script>\n  // 引入公共的bug，来做为中间传达的工具\n  import Bus from \'./bus.js\'\n  export default {\n    data () {\n      return {\n        elementValue: 4\n      }\n    },\n    methods: {\n      elementByValue: function () {\n        Bus.$emit(\'val\', this.elementValue)\n      }\n    }\n  }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('//组件B：\n<template>\n  <div>\n    B组件:\n    <input type="button" value="点击触发" @click="getData">\n    <span>{{name}}</span>\n  </div>\n</template>\n<script>\n  import Bus from \'./bus.js\'\n  export default {\n    data () {\n      return {\n        name: 0\n      }\n    },\n    mounted: function () {\n      var vm = this\n      // 用$on事件来接收参数\n      Bus.$on(\'val\', (data) => {\n        console.log(data)\n        vm.name = data\n      })\n    },\n    methods: {\n      getData: function () {\n        this.name++\n      }\n    }\n  }\n<\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("Vue常用的传值方式就介绍完了，如果有什么不明白的，可以在评论区留言哦！")]),s._v(" "),a("h2",{attrs:{id:"后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),a("p",[s._v("目前仍在不断地探索中\n"),a("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接去博主的csdn"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);