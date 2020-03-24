(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{742:function(s,n,e){"use strict";e.r(n);var a=e(15),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("h3",{attrs:{id:"项目环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[s._v("#")]),s._v(" 项目环境")]),s._v(" "),e("ul",[e("li",[s._v("前端框架：js+jq+html+css")])]),s._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),e("p",[s._v("安装 "),e("code",[s._v("npm install request")])]),s._v(" "),e("p",[s._v("先引入需要的文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var request = require('request');\n\nvar http = require(\"http\")\n\nconst fs = require('fs')\n\nconst cheerio = require('cheerio')\n\nvar path = require('path')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("以上是引入 所需要的包  用到那个引入那个")]),s._v(" "),e("p",[s._v("大概流程就是 请求 拿数据 分析数据  获取需要的资源  保存资源")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('var request = require(\'request\');\nvar http = require("http")\nconst fs = require(\'fs\')\nconst cheerio = require(\'cheerio\')\nvar path = require(\'path\')\n\nfunction runCode(id) {\n    id++\n    request({\n        url: \'https://www.ivsky.com/bizhi/nvxing\',\n        method: "get",\n        json: true,\n        headers: {\n            "content-type": "application/json",\n        },\n    }, function (error, response, body) {\n        let $ = cheerio.load(body);\n        $(".il_img a").each((index, item) => {\n            let urlsrc = \'https://www.ivsky.com\' + $(item).attr("href")\n            requestSrc(urlsrc, id)\n        })\n    });\n}\n\nfunction requestSrc(url, id) {\n    request({\n        url: url,\n        method: "get",\n        json: true,\n        headers: {\n            "content-type": "application/json",\n        },\n    }, function (error, response, body) {\n        let $ = cheerio.load(body);\n        $(".pli img").each((index, item) => {\n            saveImg(\'http:\' + $(item).attr(\'src\'), index + \'.jpg\')\n        })\n        setTimeout(function () {\n            console.log("正在保存" + id)\n            runCode(id);\n        }, 5000)\n    });\n}\n\nfunction saveImg(url, name) {\n    // console.log("正在保存" + name)\n    var num = parseInt(Math.random() * 10000000);\n    // console.log(num)\n    request(url).pipe(fs.createWriteStream(__dirname + \'/imgs\' + num + name));\n}\n\n\nrunCode(1);\n\x3c!-- 可直接运行 --\x3e\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br")])]),e("p",[s._v("纯属娱乐 如有侵权 请告知")]),s._v(" "),e("h2",{attrs:{id:"后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[s._v("#")]),s._v(" 后记")]),s._v(" "),e("p",[s._v("目前仍在不断地探索中\n"),e("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接去博主的csdn"),e("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=t.exports}}]);