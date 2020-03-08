(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{694:function(t,e,l){"use strict";l.r(e);var a=l(16),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"简介"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),l("p",[l("code",[t._v("KMS")]),t._v("，Key Management System 的缩写，中文意思为 "),l("code",[t._v("密钥管理系统")])]),t._v(" "),l("blockquote",[l("p",[t._v("感谢 Github "),l("a",{attrs:{href:"https://github.com/Wind4/vlmcsd",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源项目"),l("OutboundLink")],1)])]),t._v(" "),l("h3",{attrs:{id:"食用环境"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#食用环境"}},[t._v("#")]),t._v(" 食用环境")]),t._v(" "),l("ul",[l("li",[t._v("系统支持：CentOS 6+，Debian 7+，Ubuntu 12+")]),t._v(" "),l("li",[t._v("虚拟技术：任意")]),t._v(" "),l("li",[t._v("内存要求：≥128M")])]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("ol",[l("li",[t._v("仅适用于三大 Linux 发行版。")]),t._v(" "),l("li",[t._v("KMS 服务安装完成后会加入开机自启动。")]),t._v(" "),l("li",[t._v("默认记录日志，其日志位于 /var/log/vlmcsd.log。")])])]),t._v(" "),l("h2",{attrs:{id:"一键搭建"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#一键搭建"}},[t._v("#")]),t._v(" 一键搭建")]),t._v(" "),l("h3",{attrs:{id:"下载脚本"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#下载脚本"}},[t._v("#")]),t._v(" 下载脚本")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" --no-check-certificate https://gleehub.com/20181101/kms.sh\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("h3",{attrs:{id:"添加执行权限"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#添加执行权限"}},[t._v("#")]),t._v(" 添加执行权限")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x kms.sh\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("h3",{attrs:{id:"运行脚本"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#运行脚本"}},[t._v("#")]),t._v(" 运行脚本")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ ./kms.sh\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("blockquote",[l("p",[t._v("注意设置安全组或者防火墙，端口：1688")])]),t._v(" "),l("h3",{attrs:{id:"检测服务运行"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#检测服务运行"}},[t._v("#")]),t._v(" 检测服务运行")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -nxtlp "),l("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("1688")]),t._v("\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("显示如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("tcp     "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:1688   "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0:*   LISTEN   "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("27004")]),t._v("/vlmcsd\ntcp6    "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" :::1688        :::*        LISTEN   "),l("span",{pre:!0,attrs:{class:"token number"}},[t._v("27004")]),t._v("/vlmcsd\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br")])]),l("h3",{attrs:{id:"命令大全"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#命令大全"}},[t._v("#")]),t._v(" 命令大全")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("功能")]),t._v(" "),l("th",{staticStyle:{"text-align":"center"}},[t._v("命令")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("启动")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("/etc/init.d/kms start")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("停止")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("/etc/init.d/kms stop")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("重启")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("/etc/init.d/kms restart")])])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("状态")]),t._v(" "),l("td",{staticStyle:{"text-align":"center"}},[l("code",[t._v("/etc/init.d/kms status")])])])])]),t._v(" "),l("h3",{attrs:{id:"卸载"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ ./kms.sh uninstall\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("h2",{attrs:{id:"激活用法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#激活用法"}},[t._v("#")]),t._v(" 激活用法")]),t._v(" "),l("ul",[l("li",[t._v("KMS 服务，用于在线激活 VOL 版本的 Windows 和 Office。")]),t._v(" "),l("li",[t._v("激活的前提是你的系统是批量授权版本，即 VL 版，一般企业版都是 VL 版。而 VL 版本的镜像一般内置 GVLK key，用于 KMS 激活。")])]),t._v(" "),l("p",[t._v("使用管理员权限运行 cmd 查看系统版本，命令如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ wmic os get caption\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("使用管理员权限运行 cmd 安装从上面列表得到的 key，命令如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("使用管理员权限运行 cmd 将 KMS 服务器地址设置为你自己的 IP 或 域名，后面最好再加上端口号（:1688），命令如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ slmgr /skms IP或域名:1688\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("使用管理员权限运行 cmd 手动激活系统，命令如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ slmgr /ato\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("ul",[l("li",[t._v("关于 Office 的激活，要求必须是 VOL 版本，否则无法激活。")]),t._v(" "),l("li",[t._v("找到你的 Office 安装目录")]),t._v(" "),l("li",[t._v("32 位默认一般为 C:\\Program Files (x86)\\Microsoft Office\\Office16")]),t._v(" "),l("li",[t._v("64 位默认一般为 C:\\Program Files\\Microsoft Office\\Office16")]),t._v(" "),l("li",[t._v("Office16 是 Office 2016，Office15 就是 Office 2013，Office14 就是 Office 2010")]),t._v(" "),l("li",[t._v("打开以上所说的目录，应该有个 OSPP.VBS 文件。")])]),t._v(" "),l("p",[t._v("使用管理员权限运行 cmd 进入 Office 目录，命令如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ "),l("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files (x86)\\Microsoft Office\\Office16"')]),t._v("\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("使用管理员权限运行 cmd 注册 KMS 服务器地址：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ cscript ospp.vbs /sethst:IP或域名\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("p",[t._v("使用管理员权限运行 cmd 手动激活 Office，命令如下：")]),t._v(" "),l("div",{staticClass:"language-bash line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-bash"}},[l("code",[t._v("$ cscript ospp.vbs /act\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br")])]),l("div",{staticClass:"custom-block tip"},[l("ul",[l("li",[t._v("KMS 方式激活，其有效期只有 180 天。")]),t._v(" "),l("li",[t._v("每隔一段时间系统会自动向 KMS 服务器请求续期，请确保你自己的 KMS 服务正常运行。")])])]),t._v(" "),l("h3",{attrs:{id:"常见错误的对策"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常见错误的对策"}},[t._v("#")]),t._v(" 常见错误的对策")]),t._v(" "),l("p",[t._v("如果遇到在执行过程报错，请按以下步骤检查：")]),t._v(" "),l("ol",[l("li",[t._v("你的 KMS 服务器是否挂了？")]),t._v(" "),l("li",[t._v("你的 KMS 服务是否正常开启？")]),t._v(" "),l("li",[t._v("你的系统或 Office 是否为批量 VL 版本？")]),t._v(" "),l("li",[t._v("你的系统或 Office 是否修改过 Key 或未安装 GVLK Key？")]),t._v(" "),l("li",[t._v("你是否以管理员权限运行 cmd？")]),t._v(" "),l("li",[t._v("你的网络连接是否正常？")]),t._v(" "),l("li",[t._v("你的本地 DNS 解析是否正常？")]),t._v(" "),l("li",[t._v("如果你排除了以上的对策，那请根据错误提示代码自行搜索原因。")])]),t._v(" "),l("h2",{attrs:{id:"附录"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),l("h3",{attrs:{id:"gvlks-for-office-2019"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gvlks-for-office-2019"}},[t._v("#")]),t._v(" GVLKs for Office 2019")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Product")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("GVLK")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office Professional Plus 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office Standard 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6NWWJ-YQWMR-QKGCB-6TMB3-9D9HK")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project Professional 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("B4NPR-3FKK7-T2MBV-FRQ4W-PKD2B")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project Standard 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C4F7P-NCP8C-6CQPT-MQHV9-JXD2M")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio Professional 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("9BGNQ-K37YR-RQHF2-38RQ3-7VCBB")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio Standard 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("7TQNQ-K3YQQ-3PFH7-CCPPM-X4VQ2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Access 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("9N9PT-27V4Y-VJ2PD-YXFMF-YTFQT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Excel 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TMJWT-YYNMB-3BKTF-644FC-RVXBD")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Outlook 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("7HD7K-N4PVK-BHBCQ-YWQRW-XW4VK")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("PowerPoint 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("RRNCX-C64HY-W2MM7-MCH9G-TJHMQ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Publisher 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("G2KWX-3NW6P-PY93R-JXK2T-C9Y9V")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Skype for Business 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NCJ33-JHBBY-HTK98-MYCV8-HMKHJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Word 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PBX3G-NWMT6-Q7XBW-PYJGG-WXD33")])])])]),t._v(" "),l("h3",{attrs:{id:"gvlks-for-office-2016"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gvlks-for-office-2016"}},[t._v("#")]),t._v(" GVLKs for Office 2016")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Product")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("GVLK")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office Professional Plus 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office Standard 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JNRGM-WHDWX-FJJG3-K47QV-DRTFM")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project Professional 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YG9NW-3K39V-2T3HJ-93F3Q-G83KT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project Standard 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GNFHQ-F6YQM-KQDGJ-327XX-KQBVC")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio Professional 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PD3PC-RHNGV-FXJ29-8JK7D-RJRJK")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio Standard 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("7WHWN-4T7MP-G96JF-G33KR-W8GF4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Access 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GNH9Y-D2J4T-FJHGG-QRVH7-QPFDW")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Excel 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("9C2PK-NWTVB-JMPW8-BFT28-7FTBF")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("OneNote 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DR92N-9HTF2-97XKM-XW2WJ-XW3J6")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Outlook 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("R69KK-NTPKF-7M3Q4-QYBHW-6MT9B")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("PowerPoint 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("J7MQP-HNJ4Y-WJ7YM-PFYGF-BY6C6")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Publisher 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("F47MM-N3XJP-TQXJ9-BP99D-8K837")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Skype for Business 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("869NQ-FJ69K-466HW-QYCP2-DDBV6")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Word 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WXY84-JN2Q9-RBCCQ-3Q3J3-3PFJ6")])])])]),t._v(" "),l("h3",{attrs:{id:"gvlks-for-office-2013"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gvlks-for-office-2013"}},[t._v("#")]),t._v(" GVLKs for Office 2013")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Product")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("GVLK")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office 2013 Professional Plus")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YC7DK-G2NP3-2QQC3-J6H88-GVGXT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office 2013 Standard")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("KBKQT-2NMXY-JJWGP-M62JB-92CD4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project 2013 Professional")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("FN8TT-7WMH6-2D4X9-M337T-2342K")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project 2013 Standard")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6NTH3-CW976-3G3Y2-JK3TX-8QHTT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio 2013 Professional")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C2FG9-N6J68-H8BTJ-BW3QX-RM3B3")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio 2013 Standard")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("J484Y-4NKBF-W2HMG-DBMJC-PGWR7")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Access 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NG2JY-H4JBT-HQXYP-78QH9-4JM2D")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Excel 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("VGPNG-Y7HQW-9RHP7-TKPV3-BG7GB")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("InfoPath 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DKT8B-N7VXH-D963P-Q4PHY-F8894")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Lync 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2MG3G-3BNTT-3MFW9-KDQW3-TCK7R")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("OneNote 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TGN6P-8MMBC-37P2F-XHXXK-P34VW")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Outlook 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("QPN8Q-BJBTJ-334K3-93TGY-2PMBT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("PowerPoint 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4NT99-8RJFH-Q2VDH-KYG2C-4RD4F")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Publisher 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PN2WF-29XG2-T9HJ7-JQPJR-FCXK4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Word 2013")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6Q7VD-NX8JD-WJ2VH-88V73-4GBJ7")])])])]),t._v(" "),l("h3",{attrs:{id:"gvlks-for-office-2010"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#gvlks-for-office-2010"}},[t._v("#")]),t._v(" GVLKs for Office 2010")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("Product")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("GVLK")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office Professional Plus 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("VYBBJ-TRJPB-QFQRF-QFT4D-H3GVB")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office Standard 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("V7QKV-4XVVR-XYV4D-F7DFM-8R6BM")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Office Home and Business 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("D6QFG-VBYP2-XQHM7-J97RH-VVRCK")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Access 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("V7Y44-9T38C-R2VJK-666HK-T7DDX")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Excel 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("H62QG-HXVKF-PP4HP-66KMR-CW9BM")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("SharePoint Workspace 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("QYYW6-QP4CB-MBV6G-HYMCJ-4T3J4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("InfoPath 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("K96W8-67RPQ-62T9Y-J8FQJ-BT37T")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("OneNote 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Q4Y4M-RHWJM-PY37F-MTKWH-D3XHX")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Outlook 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("7YDC2-CWM8M-RRTJC-8MDVC-X3DWQ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("PowerPoint 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("RC8FX-88JRY-3PF7C-X8P67-P4VTT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project Professional 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YGX6F-PGV49-PGW3J-9BTGG-VHKC6")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Project Standard 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4HP3K-88W3F-W2K3D-6677X-F9PGB")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Publisher 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("BFK7F-9MYHM-V68C7-DRQ66-83YTP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Word 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HVHB3-C6FV7-KQX9W-YQG79-CRY7T")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio Premium 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("D9DWC-HPYVV-JGF4P-BTWQB-WX8BJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio Professional 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("7MCW8-VRQVK-G677T-PDJCM-Q8TCP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Visio Standard 2010")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("767HD-QGMWX-8QTDB-9G3R2-KHFGJ")])])])]),t._v(" "),l("h3",{attrs:{id:"windows"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("操作系统版本")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("KMS 客户端安装程序密钥")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Datacenter (1809)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6NMRW-2C8FM-D24W7-TQWMY-CWH2D")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Standard (1809)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("N2KJX-J94YW-TQVFB-DG9YT-724CC")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Datacenter (1803)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Standard (1803)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PTXN8-JFHJM-4WC78-MPCBR-9W4KR")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Datacenter (1709)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6Y6KB-N82V8-D8CQV-23MJW-BWTG6")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Standard (1709)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Datacenter (2019 LTSC/LTSB)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WMDGN-G9PQG-XVVXX-R3X43-63DFG")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Standard (2019 LTSC/LTSB)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("N69G4-B89J2-4G8F4-WWYCC-J464C")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Essentials (2019 LTSC/LTSB)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WVDHN-86M7X-466P6-VHXV7-YY726")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Datacenter (2016 LTSC/LTSB)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CB7KF-BWN84-R7R2Y-793K2-8XDDG")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Standard (2016 LTSC/LTSB)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server Essentials (2016 LTSC/LTSB)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JCKRF-N37P4-C2D82-9YXRT-4M63B")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 专业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("W269N-WFGWX-YVC9B-4J6C9-T83GX")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 Pro N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MH37W-N47XK-V7XM9-C7227-GCQG9")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 专业工作站")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 专业工作站 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("9FNHH-K3HBT-3W4TD-6383H-6XYWF")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 专业教育版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6TP4R-GNPTD-KYYHQ-7B7DP-J447Y")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 专业教育版 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YVWGF-BXNMC-HTQYQ-CPQ99-66QFC")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 教育版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NW6C2-QMPVW-D7KKK-3GKT6-VCFB2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 教育版 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2WH4N-8QGBV-H22JP-CT43Q-MDWWJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NPPR9-FWDCX-D2C8J-H872K-2YT43")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 G")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYVX9-NTFWV-6MDM3-9PT4T-4M68B")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 G N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("44RPN-FTY23-9VTTB-MP9BX-T84FV")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 LTSC 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("M7XTQ-FN8P6-TTKYV-9D4CC-J462D")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 N LTSC 2019")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("92NFX-8DJQP-P6BBQ-THF9C-7CG2H")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 LTSB 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 N LTSB 2016")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("QFFDN-GRT3P-VKWWX-X7T3R-8B639")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 2015 LTSB")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WNMTR-4C88C-JK8YV-HQ7T2-76DF9")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 10 企业版 2015 LTSB N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2F77B-TNFGY-69QQF-B8YKP-D69TJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 R2 Server Standard")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("D2N9P-3P6X9-2R39C-7RTCD-MDVJX")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 R2 Datacenter")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 R2 Essentials")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("KNC87-3J2TX-XB4WP-VCPJV-M4FWM")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("BN3D2-R7TKB-3YPBD-8DRP2-27GG4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("8N2M2-HWPGY-7PGT9-HGDD8-GVGGY")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 单语言版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2WN2H-YGCQR-KFX6K-CD6TF-84YXQ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 特定国家/地区版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4K36P-JN4VD-GDC6V-KDT89-DYFKP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 Server 标准版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("XC9B7-NBPP2-83J2H-RHMBY-92BT4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 MultiPoint 标准版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HM7DN-YVMH3-46JC3-XYTG7-CYQJJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 MultiPoint 高级版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2012 Datacenter")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("48HP8-DN98B-MYWDG-T2DCC-8W83P")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 R2 Web 版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6TPJF-RBVHG-WBW2R-86QPH-6RTM4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 R2 HPC 版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TT8MH-CG224-D3D7Q-498W2-9QCTX")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 R2 标准版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YC6KT-GKW9T-YTKYR-T4X34-R7VHC")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 R2 企业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("489J6-VHDMP-X63PK-3K798-CPX3Y")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 R2 数据中心版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("74YFP-3QFB3-KQT8W-PMXWJ-7M648")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("面向基于 Itanium 系统的 Windows Server 2008 R2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GT63C-RJFQ3-4GMB6-BRFB9-CB83V")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Web Server 2008")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WYR28-R7TFJ-3X2YQ-YCY4H-M249D")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 标准版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TM24T-X9RMF-VWXK6-X8JC9-BFGM2")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("不带 Hyper-V 的 Windows Server 2008 标准版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 企业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YQGMW-MPWTJ-34KDK-48M3W-X4Q6V")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("不带 Hyper-V 的 Windows Server 2008 企业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("39BXF-X8Q23-P2WWT-38T2F-G3FPG")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 HPC")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("RCTX3-KWVHP-BR6TB-RB6DM-6X7HP")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows Server 2008 Datacenter")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("7M67G-PC374-GR742-YH8V4-TCBY3")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("不带 Hyper-V 的 Windows Server 2008 数据中心版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("22XQ2-VRXRG-P8D42-K34TD-G3QQC")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("面向基于 Itanium 系统的 Windows Server 2008")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4DWFP-JF3DJ-B7DTH-78FJB-PDRHK")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8.1 专业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GCRJD-8NW9H-F2CDX-CCM8D-9D6T9")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8.1 Pro N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HMCNV-VVBFX-7HMBH-CTY9B-B4FXY")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8.1 企业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MHF9N-XY6XB-WVXMC-BTDCT-MKKG7")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8.1 企业版 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TT4HM-HN7YT-62K67-RGRQJ-JFFXW")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8 专业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NG4HW-VH26C-733KW-K6F98-J8CK4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8 Pro N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("XCVCF-2NXM9-723PB-MHCB7-2RYQQ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8 企业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("32JNW-9KQ84-P47T8-D8GGY-CWCK7")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 8 企业版 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JMNMF-RHW7P-DMY6X-RF3DR-X2BQT")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 7 专业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 7 专业版 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MRPKT-YTG23-K7D7T-X2JMM-QY7MG")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 7 专业版 E")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("W82YF-2Q76Y-63HXB-FGJG9-GF7QX")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 7 企业版")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("33PXH-7Y6KF-2VJC9-XBBR8-HVTHH")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 7 企业版 N")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YDRBP-3D83W-TY26F-D46B2-XCKRJ")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Windows 7 企业版 E")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("C29WB-22CC8-VJ326-GHFJW-H9DH4")])])])]),t._v(" "),l("blockquote",[l("p",[t._v("win10专业版 W269N-WFGWX-YVC9B-4J6C9-T83GX\noffice2016 cscript ospp.vbs /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99")])])])}),[],!1,null,null,null);e.default=i.exports}}]);