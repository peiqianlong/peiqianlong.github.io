(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{683:function(n,s,o){"use strict";o.r(s);var t=o(15),r=Object(t.a)({},(function(){var n=this,s=n.$createElement,o=n._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h2",{attrs:{id:"前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),o("h3",{attrs:{id:"项目环境"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[n._v("#")]),n._v(" 项目环境")]),n._v(" "),o("ul",[o("li",[n._v("前端框架：js+jq+html+css")])]),n._v(" "),o("h2",{attrs:{id:"示例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[n._v("#")]),n._v(" 示例")]),n._v(" "),o("p",[n._v("//跨域")]),n._v(" "),o("hr"),n._v(" "),o("p",[n._v("mongodb:非关系型的数据库\n对数据进行集中式的管理。\n数据库有一些对数据的操作命令。\n完美的支持一些后台语言。 java,php.c#,node(环境)\ntypescript   javascript\nactionscript   flash")]),n._v(" "),o("hr"),n._v(" "),o("p",[n._v("node mongodb\n社交，游戏，日志，中间层\n命令，索引，聚合，存储过程，事务，联查，作业\ndb开发工程师。")]),n._v(" "),o("hr"),n._v(" "),o("p",[n._v("命令，node 操作mongodb\n连接上你的数据。将数据库挂起。\n库\n集合collection\n文档document\n命令：\n"),o("em",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[n._v("增")])])])])])])])])])])])])])])])])])])]),n._v("*************\ndb.score.insert({age:12});// 在score集合当中插入一个{age:12}文档\n// 批量导入数据。\n退出mongo环境\nmongoimport --db study --collection score --file d:\\xxx  --drop\n--db:指定数据库\n--collection:指定集合\n--file:文件的地指\n--drop: 可省略，如果添加使用的话，会将之前的数据进行清理。\n"),o("em",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[n._v("删")])])])])])])])])])])])])])])])])])])]),n._v('*************\n// 伪删除    物理删除\ndb.score.remove({sex:"男"},{justOne:true});// 删除一条男同胞\ndb.score.remove({sex:"男"});// 删除所有男同胞\ndb.score.remove({});// 删除所有的信息\n'),o("em",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[n._v("改")])])])])])])])])])])])])])])])])])])]),n._v('*************\ndb.score.update({userName:"张三"},{set:{sex:"女"}})// 将姓名为张三的性别修改为女\n   db.score.update({userName:"张三"},{sex:"女"})// 将姓名为张三的信息完整修改为---性别为女\n   // 以上只能更改一条\n    db.score.update({sex:"女"},{set:{age:16}},{multi:true});// multi:true  修改多条\n顶/踩\ndb.score.update({userName:"严七"},{inc:{age:20}});// 将严七的年龄加20\n   *************************************查**************************************************\n   db.score.find();// 将所有的数据罗列出来。\n   db.score.find({sex:"男"});// 查找性别为男的信息\n   db.score.find({"score.yingyu":0});// 查找score对象下英语为0分的信息\n   db.score.find({sex:"男",age:12});//多条件， 查找性别为男且年龄等于12的信息\n   db.score.find({or:[{sex:"男"},{age:12}]});// 查找年龄等于12或性别为男的信息。\ndb.score.find({age:{gt:18}});// 年龄大于18\n   db.score.find({age:{gt:18},sex:"男"}));// 年龄大于18且为男\n// $lt小于 $gte大于等于 $lte小于等于 $ne不等于 $gt大于\ndb.score.find({userName:/王/})：模糊搜索名字内带王的。')]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[n._v('db.score.find().sort({age:-1}) ：按照年龄的倒序排列（1，正序，-1，倒序）\ndb.score.find({sex:"女"}).sort({"score.yingyu":1});// 查找性别为女，按照英语成绩正序\ndb.score.find().sort({age:1,"score.yingyu":-1});// 接照年龄的正序，然后是英语成绩的倒序。\nskip\n db.score.find().skip(5);// 跳过指定的条数 （5）\nlimit:显示多少条\ndb.score.find().limit(3);// 显示前三条。 如果为0，全部显示。\ndb.score.find().limit(1).skip(5);// 跳过前五条记录，只显示一条\ndb.score.count();// 获得总条数number\n\n// 关键字\n1、总条数------------------求  count\n2、当前页------------------已知  pageIndex\n3、每页显示多少条----------写死的 pageNum  3\n4、跳过多少条--------------？skipNum\n\n（pageIndex-1）* pageNum\n\n上一页  1/总   下一页\n\n 总页数：   Math.ceil(count/pageNum)\n')])])]),o("p",[o("em",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[o("strong",[n._v("其它")])])])])])])])])])])])])])])])])])])]),n._v("*************\n1、挂起数据库\n1、新建一个文件夹\nd:---\x3emongo\n2、通过命令挂起数据库\nmongod --dbpath d:\\mongo\n3、挂起了以后就不要管你的控制台了（将你的控制台最小化）\n4、验证是否连接成功\n1、在浏览器当中\nhttp://127.0.0.1:27017/\n2、再重新打开一个控制台\n输入mongo命令。\n---》mongo环境当中，咱们可以执行对数据库的操作。\n2、show dbs:查看当前所有的数据库（数据库列表）\n3、创建一个自己的数据库\nuse study  ----\x3e进入study.\ndb------------\x3e查看你当前所使用（use）数据库\nshow collections  查看当前库下所有的集合\n4、删除数据库\ndb.dropDatabase()\n5、删除集合\ndb.score.drop();//  删除当前库当中score集合")]),n._v(" "),o("h2",{attrs:{id:"后记"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[n._v("#")]),n._v(" 后记")]),n._v(" "),o("p",[n._v("目前仍在不断地探索中\n"),o("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[n._v("链接去博主的csdn"),o("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);