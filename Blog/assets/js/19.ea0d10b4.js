(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{658:function(s,n,a){"use strict";a.r(n);var t=a(16),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("h3",{attrs:{id:"项目环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[s._v("#")]),s._v(" 项目环境")]),s._v(" "),a("ul",[a("li",[s._v("前端框架：js+jq+html+css")])]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("直接上代码")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("\n1- ajax运行步骤与状态值说明\n在ajax实际运行当中，对于访问XMLHttpRequest（XHR）时并不是一次完成的，而是分别经历了多种状态后取得的结果，对于这种状态在AJAX中共有5种，分别是。\n\n\najax.readyState获得\n\n\n0 - (未初始化)还没有调用send()方法\n1 - (载入)已调用send()方法，正在发送请求\n2 - (载入完成)send()方法执行完成，\n3 - (交互)正在解析响应内容\n4 - (完成)响应内容解析完成，可以在客户端调用了\n对于上面的状态，其中“0”状态是在定义后自动具有的状态值，而对于成功访问的状态（得到信息）我们大多数采用“4”进行判断。\n\n2-ajax状态码说明\najax.status获得\n\n1**：请求收到，继续处理\n2**：操作成功收到，分析、接受\n3**：完成此请求必须进一步处理\n4**：请求包含一个错误语法或不能完成\n5**：服务器执行一个完全有效请求失败\n100——客户必须继续发出请求\n101——客户要求服务器根据请求转换HTTP协议版本\n200——交易成功\n201——提示知道新文件的URL\n202——接受和处理、但处理未完成\n203——返回信息不确定或不完整\n204——请求收到，但返回信息为空\n205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件\n206——服务器已经完成了部分用户的GET请求\n300——请求的资源可在多处得到\n301——删除请求数据\n302——在其他地址发现了请求数据\n303——建议客户访问其他URL或访问方式\n304——客户端已经执行了GET，但文件未变化\n305——请求的资源必须从服务器指定的地址得到\n306——前一版本HTTP中使用的代码，现行版本中不再使用\n307——申明请求的资源临时性删除\n400——错误请求，如语法错误\n401——请求授权失败\n402——保留有效ChargeTo头响应\n403——请求不允许\n404——没有发现文件、查询或URl\n405——用户在Request-Line字段定义的方法不允许\n406——根据用户发送的Accept拖，请求资源不可访问\n407——类似401，用户必须首先在代理服务器上得到授权\n408——客户端没有在用户指定的饿时间内完成请求\n409——对当前资源状态，请求不能完成\n410——服务器上不再有此资源且无进一步的参考地址\n411——服务器拒绝用户定义的Content-Length属性请求\n412——一个或多个请求头字段在当前请求中错误\n413——请求的资源大于服务器允许的大小\n414——请求的资源URL长于服务器允许的长度\n415——请求资源不支持请求项目格式\n416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段\n417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求\n500——服务器产生内部错误\n501——服务器不支持请求的函数\n502——服务器暂时不可用，有时是为了防止发生系统过载\n503——服务器过载或暂停维修\n504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长\n505——服务器不支持或拒绝支请求头中指定的HTTP版本\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br")])]),a("h2",{attrs:{id:"后记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),a("p",[s._v("目前仍在不断地探索中\n"),a("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接去博主的csdn"),a("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);