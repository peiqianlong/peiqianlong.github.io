(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{675:function(t,e,v){"use strict";v.r(e);var r=v(15),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("h3",{attrs:{id:"项目环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[t._v("#")]),t._v(" 项目环境")]),t._v(" "),v("ul",[v("li",[t._v("前端框架：js+jq+html+css")])]),t._v(" "),v("h2",{attrs:{id:"示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),v("p",[t._v("Svn：版本控制工具\n一、安装：\n⦁\t服务器端：VisualSVN_Server\n⦁\t客户端：TortoiseSVN\n二、使用VisualSVN Server建立版本库\n⦁\t首先打开VisualSVN Server Manager,如图:")]),t._v(" "),v("p",[t._v("⦁\t可以在窗口的右边看到版本库的一些信息,比如状态,日志,用户认证,版本库等.要建立版本库,需要右键单击左边窗口的Repositores,如图:")]),t._v(" "),v("p",[t._v("⦁\t在弹出的右键菜单中选择Create New Repository或者新建->Repository,进入下一步:")]),t._v(" "),v("p",[t._v("⦁\t输入版本库名称,勾上Create default structure复选框(推荐这么做).点击OK,版本库就创建好了,版本库中会默认建立trunk,branches,tags三个文件夹,如图:")]),t._v(" "),v("p",[t._v("⦁\t把项目导入到仓库里（此步骤只是针对先有项目，后建库。正常使用，是先建库，然后检出即可，不用此步骤）\n⦁\t找到你的项目文件夹,在项目文件夹上点击鼠标右键,找到SVN菜单,选择导入,如图:")]),t._v(" "),v("p",[t._v("⦁\t在弹出的对话框中填上版本库URL,这个URL可以从VisualSVN Server Manager中获取,在你的版本库上单击右键,选择Copy URL to Clipboard,这样就把版本库URL复制到你的剪贴版了.如图:")]),t._v(" "),v("p",[t._v('⦁\t将复制的版本库URL粘贴上,在URL后面加上trunk子路径.然后在导入信息里面填上导入信息"导入项目到版本库".如图:')]),t._v(" "),v("p",[t._v("⦁\t点击确定,所选中的项目就会被导入到版本库中.如图:")]),t._v(" "),v("p",[t._v("9、项目导入到版本库以后,不能随便让谁都能够读写版本库,所以需要建立用户组和用户.\n⦁\t建立用户和用户组\n项目导入到版本库以后,不能随便让谁都能够读写版本库,所以需要建立用户组和用户.\n⦁\t建立用户\n⦁\t在VisualSVN Server Manager窗口的左侧右键单击用户组,选择Create User或者新建->User,如图:")]),t._v(" "),v("p",[t._v("⦁\t在弹出的对话框中填写User name和Password,然后点击OK,如图:")]),t._v(" "),v("p",[t._v("⦁\t用相同的方式分别创建用户Develpoer1,Develpoer2,Develpoer3,Test1,Test2,Manger六个用户,分别代表3个开发人员,两个测试人员和一个项目经理,如图:")]),t._v(" "),v("p",[t._v("⦁\t建立用户组\n⦁\t在VisualSVN Server Manager窗口的左侧右键单击用户组,选择Create Group或者新建->Group,如图:")]),t._v(" "),v("p",[t._v("⦁\t在弹出窗口中填写Group name为Developers,然后点Add按钮,在弹出的窗口中选择三个Developer,加入到这个组,然后点Ok,如图:")]),t._v(" "),v("p",[t._v("⦁\t用相同的方式创建组Managers,Testers,如图:")]),t._v(" "),v("p",[t._v("⦁\t给用户组设置权限\n⦁\t在MyRepository上单击右键,选择属性,如图:")]),t._v(" "),v("p",[t._v("⦁\t在弹出的对话框中,选择Security（权限）选项卡,点击Add按钮,选中Developers,Managers,Testers三个组,然后添加进来,给Developers,Managers权限设置为Read/Write,Tester权限设置为Read Only,如图:")]),t._v(" "),v("p",[t._v("到此,服务端就完成了.\n⦁\t用客户端检出代码\n⦁\t在桌面空白处（或者项目所在盘符，如：e:）单击右键,选择SVN检出,在弹出的对话框中填写版本库URL(具体获取方式,上面讲上传项目到版本库的时候讲过),选择检出目录,点击确定.如图:")]),t._v(" "),v("p",[t._v("⦁\t开始检出项目,如图:")]),t._v(" "),v("p",[t._v("⦁\t检出完成之后,我们打开工作副本文件夹,会看到所有文件和文件夹都有一个绿色的√.如图:")]),t._v(" "),v("p",[t._v("至此,创建版本库和使用TortoiseSVN导入项目,检出项目已经介绍完毕.\n⦁\t增删改查，获取服务器的所有代码\n⦁\t添加文件\n⦁\t手工添加文件（写代码）\n在检出的工作副本中添加一个Readme.txt文本文件,这时候这个文本文件会显示为没有版本控制的状态,如图:")]),t._v(" "),v("p",[t._v("⦁\t加入：")]),t._v(" "),v("p",[t._v("加入以后,你的文件会变成这个状态,如图:")]),t._v(" "),v("p",[t._v("⦁\t提交：\n这时候使用TortoiseSVN进行提交.这样别人就能看到你所做的更改了,如图.")]),t._v(" "),v("p",[t._v('⦁\t修改文件\n⦁\t手工修改文件（改代码）\n使用TortoiseSVN更新：修改工作副本中的Readme.txt文件,加入"hello world!",然后保存,你会发现Readme.txt文件的图标改变了,如图:')]),t._v(" "),v("p",[t._v("这个红色的叹号代表这个文件被修改了。\n⦁\t提交：\n使用右键菜单的“svn提交”  功能就可以把修改后的结果传到服务器上,其他人即可看到你的更改.\n⦁\t重命名文件\n⦁\t使用svn修改文件名：")]),t._v(" "),v("p",[t._v("重命名工作副本中的Readme.txt文件为\"Readme1.txt',然后保存,你会发现Readme.txt文件的图标改变了,如图:")]),t._v(" "),v("p",[t._v("⦁\t加入：\n跟添加文件一个道理,,如图:")]),t._v(" "),v("p",[t._v("⦁\t提交：\n在空白处点击svn菜单，选择提交")]),t._v(" "),v("p",[t._v("就会看到：")]),t._v(" "),v("p",[t._v('点击“确定”按钮，版本库中的Readme.txt文件将会被重命名为"Readme1.txt".\n⦁\t删除文件\n⦁\t使用svn删除文件\n选择svn菜单上删除功能')]),t._v(" "),v("p",[t._v("⦁\t提交\n空白处点右键，找svn提交菜单\n,\n显示窗口：")]),t._v(" "),v("p",[t._v("点击“确定”按钮\n版本库中的相应文件即被删除掉了\n⦁\t日常获取服务器端的最新文件\n使用菜单svn更新\n⦁\t查看日志\n⦁\t查看某个文件的更新日志\n在文件处点击右键，选择菜单“显示日志”")]),t._v(" "),v("p",[t._v("如下是日志详情：")]),t._v(" "),v("p",[t._v("⦁\t如需要查看整个项目的日志\n在空白处点击右键，选择菜单“显示日志”")]),t._v(" "),v("p",[t._v("⦁\t注意事项\n⦁\t强制写注释\n为了以后你能更清晰的看到你所做的每一次更改的原因,你在每次提交的时候应该写上注释,而且尽量详细.如图:")]),t._v(" "),v("p",[t._v("但是,可能有的人因为觉得太繁琐,而不填写注释,这不利于以后的版本控制,可以将强制在提交的时候写注释,首先单击右键,选择TortoiseSVN->属性,如图:")]),t._v(" "),v("p",[t._v("在弹出的对话框中,点击新建->日志大小,设置提交日志的最小字符数和锁定日志的最小字符数为20,提交文本框中显示边线的字符位置设置为100,点击确定,如图:")]),t._v(" "),v("p",[t._v("提交,以后再次提交的时候,如果输入的注释少于20个字符,将无法提交.\n⦁\t帮助\n这个文档只是简单入门使用，需要了解更多的知识，在svn里查看帮助即可，在右键菜单中点击“帮助”按钮。")]),t._v(" "),v("h2",{attrs:{id:"后记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),v("p",[t._v("目前仍在不断地探索中\n"),v("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接去博主的csdn"),v("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);