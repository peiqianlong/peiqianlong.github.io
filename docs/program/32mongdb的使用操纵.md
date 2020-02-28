---

title: mongdb的使用操纵

meta:
  - name: description
    content: mongdb的使用操纵
  - name: keywords
	content: mongdb的使用操纵
	
created: 2019/06/23

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css
  - gulp
  - node
  - mongodb

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例
非结构型数据库。没有行、列的概念。用JSON来存储数据。
集合就相当于“表”，文档就相当于“行”。

mongo   使用数据库
mongod  开机
mongoimport  导入数据

--dbpath就是选择数据库文档所在的文件夹。
也就是说，mongoDB中，真的有物理文件，对应一个个数据库。U盘可以拷走。
一定要保持，开机这个CMD不能动了，不能关，不能ctrl+c。 一旦这个cmd有问题了，数据库就自动关闭了。

所以，应该再开一个cmd。输入

那么，运行环境就是mongo语法了。
列出所有数据库：
show dbs
使用某个数据库
use 数据库名字
如果想新建数据库，也是use。use一个不存在的，就是新建。
查看当前所在数据库
db

插入数据：
db.zhang.insert({"name":"shuaige"})
zhang就是所谓的集合。集合中存储着很多json。
zhang是第一次使用，集合将自动创建。

要管理数据库，必须先开机，开机使用mongod --dbpath d:\mongo
管理数据库：mongo  (一定要在新的cmd中输入)

查看所有数据库列表     show dbs
使用数据库、创建数据库     use student
如果真的想把这个数据库创建成功，那么必须插入一个数据。数据库中不能直接插入数据，只能往集合(collections)中插入数据。不需要创建集合，只需要写点语法：   db.student.insert({“name”:”xiaoming”});
db.student  系统发现student是一个陌生的集合名字，所以就自动创建了集合。
删除数据库，删除当前所在的数据库
db.dropDatabase();

插入数据，随着数据的插入，数据库创建成功了，集合也创建成功了。
db.student.insert({"name":"xiaoming"});
我们不可能一条一条的insert。所以，我们希望用sublime在外部写好数据库的形式，然后导入数据库：
mongoimport --db test --collection restaurants --drop --file primer-dataset.json
-db test  想往哪个数据库里面导入
--collection restaurants  想往哪个集合中导入
--drop 把集合清空
--file primer-dataset.json  哪个文件
这样，我们创建一个json文件，然后用mongoimport命令导入


查找数据，用find。find中没有参数，那么将列出这个集合的所有文档：
db.restaurants.find()
精确匹配：db.student.find({"score.shuxue":70});
多个条件：db.student.find({"score.shuxue":70 , "age":12})
大于条件：db.student.find({"score.yuwen":{$gt:50}});
$gt:大于    $lt:小于    $gte:大于或等于       $lte:小于或等于
模糊查找：db.[collection].find({name:/l/})
9岁，或者11岁的学生 db.student.find({$or:[{"age":9},{"age":11}]});
查找完毕之后，打点调用sort，表示升降排序。(1正序，-1倒序）
db.student.find().sort( { "age": 1, "score.yuwen": 1 } )
db.student.find().limit(2)  取指定的条数
db.student.find().skip(2)  取指定的条数
查找名字叫做小明的，把年龄更改为16岁：
db.student.update({"name":"小明"},{$set:{"age":16}});
查找数学成绩是70，把年龄更改为33岁：
db.student.update({"score.shuxue":70},{$set:{"age":33}});
更改所有匹配项目：multi表示可以更改多条
db.student.update({"sex":"男"},{$set:{"age":33}},{multi: true});
完整替换，不出现$set关键字了：
db.student.update({"name":"小明"},{"name":"大明","age":16});
db.student.remove( { "age": 22} )
db.student.remove( { "age": 23 }, { justOne: true } )
.limit(2) 取前2条内容
.skip(2)  跳过2条记录
其它 显示所有集合show collections
显示集合里的内容db.student.find()
删除数据库：db.dropDatabase()

Node.js操作MongoDB
需要引包：
npm install mongodb



## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


