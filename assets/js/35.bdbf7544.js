(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{672:function(n,t,e){"use strict";e.r(t);var s=e(15),d=Object(s.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[n._v("#")]),n._v(" 前言")]),n._v(" "),e("h3",{attrs:{id:"项目环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目环境"}},[n._v("#")]),n._v(" 项目环境")]),n._v(" "),e("ul",[e("li",[n._v("前端框架：js+jq+html+css")])]),n._v(" "),e("h2",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[n._v("#")]),n._v(" 示例")]),n._v(" "),e("p",[n._v("非结构型数据库。没有行、列的概念。用JSON来存储数据。\n集合就相当于“表”，文档就相当于“行”。")]),n._v(" "),e("p",[n._v("mongo   使用数据库\nmongod  开机\nmongoimport  导入数据")]),n._v(" "),e("p",[n._v("--dbpath就是选择数据库文档所在的文件夹。\n也就是说，mongoDB中，真的有物理文件，对应一个个数据库。U盘可以拷走。\n一定要保持，开机这个CMD不能动了，不能关，不能ctrl+c。 一旦这个cmd有问题了，数据库就自动关闭了。")]),n._v(" "),e("p",[n._v("所以，应该再开一个cmd。输入")]),n._v(" "),e("p",[n._v("那么，运行环境就是mongo语法了。\n列出所有数据库：\nshow dbs\n使用某个数据库\nuse 数据库名字\n如果想新建数据库，也是use。use一个不存在的，就是新建。\n查看当前所在数据库\ndb")]),n._v(" "),e("p",[n._v('插入数据：\ndb.zhang.insert({"name":"shuaige"})\nzhang就是所谓的集合。集合中存储着很多json。\nzhang是第一次使用，集合将自动创建。')]),n._v(" "),e("p",[n._v("要管理数据库，必须先开机，开机使用mongod --dbpath d:\\mongo\n管理数据库：mongo  (一定要在新的cmd中输入)")]),n._v(" "),e("p",[n._v("查看所有数据库列表     show dbs\n使用数据库、创建数据库     use student\n如果真的想把这个数据库创建成功，那么必须插入一个数据。数据库中不能直接插入数据，只能往集合(collections)中插入数据。不需要创建集合，只需要写点语法：   db.student.insert({“name”:”xiaoming”});\ndb.student  系统发现student是一个陌生的集合名字，所以就自动创建了集合。\n删除数据库，删除当前所在的数据库\ndb.dropDatabase();")]),n._v(" "),e("p",[n._v('插入数据，随着数据的插入，数据库创建成功了，集合也创建成功了。\ndb.student.insert({"name":"xiaoming"});\n我们不可能一条一条的insert。所以，我们希望用sublime在外部写好数据库的形式，然后导入数据库：\nmongoimport --db test --collection restaurants --drop --file primer-dataset.json\n-db test  想往哪个数据库里面导入\n--collection restaurants  想往哪个集合中导入\n--drop 把集合清空\n--file primer-dataset.json  哪个文件\n这样，我们创建一个json文件，然后用mongoimport命令导入')]),n._v(" "),e("p",[n._v('查找数据，用find。find中没有参数，那么将列出这个集合的所有文档：\ndb.restaurants.find()\n精确匹配：db.student.find({"score.shuxue":70});\n多个条件：db.student.find({"score.shuxue":70 , "age":12})\n大于条件：db.student.find({"score.yuwen":{$gt:50}});\n$gt:大于    $lt:小于    $gte:大于或等于       $lte:小于或等于\n模糊查找：db.[collection].find({name:/l/})\n9岁，或者11岁的学生 db.student.find({$or:[{"age":9},{"age":11}]});\n查找完毕之后，打点调用sort，表示升降排序。(1正序，-1倒序）\ndb.student.find().sort( { "age": 1, "score.yuwen": 1 } )\ndb.student.find().limit(2)  取指定的条数\ndb.student.find().skip(2)  取指定的条数\n查找名字叫做小明的，把年龄更改为16岁：\ndb.student.update({"name":"小明"},{$set:{"age":16}});\n查找数学成绩是70，把年龄更改为33岁：\ndb.student.update({"score.shuxue":70},{$set:{"age":33}});\n更改所有匹配项目：multi表示可以更改多条\ndb.student.update({"sex":"男"},{$set:{"age":33}},{multi: true});\n完整替换，不出现$set关键字了：\ndb.student.update({"name":"小明"},{"name":"大明","age":16});\ndb.student.remove( { "age": 22} )\ndb.student.remove( { "age": 23 }, { justOne: true } )\n.limit(2) 取前2条内容\n.skip(2)  跳过2条记录\n其它 显示所有集合show collections\n显示集合里的内容db.student.find()\n删除数据库：db.dropDatabase()')]),n._v(" "),e("p",[n._v("Node.js操作MongoDB\n需要引包：\nnpm install mongodb")]),n._v(" "),e("h2",{attrs:{id:"后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[n._v("#")]),n._v(" 后记")]),n._v(" "),e("p",[n._v("目前仍在不断地探索中\n"),e("a",{attrs:{href:"https://blog.csdn.net/mlonly",target:"_blank",rel:"noopener noreferrer"}},[n._v("链接去博主的csdn"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=d.exports}}]);