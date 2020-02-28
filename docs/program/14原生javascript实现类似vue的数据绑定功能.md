---

title: 原生javascript实现类似vue的数据绑定功能

meta:
  - name: description
    content: 原生javascript实现类似vue的数据绑定功能
  - name: keywords
    content: 原生javascript实现类似vue的数据绑定功能

created: 2019/02/16

updated: 
 
tags:
  - javaScript
  - Jquery

---

## 前言

### 项目环境
- 前端框架：js+jq

## 示例
原生javascript实现类似vue的数据绑定功能


// 观察者模式

```js
let observer = {
        /*订阅功能*/
        addSubscriber: function (cb) {
            this.subscribers.push(cb);
        },

        /*退订功能*/
        removerSubscriber: function (cb) {
            let index = this.subscribers.indexOf(cb);
            this.subscribers.splice(index, 1)
        },

        // 发布功能
        publish: function (what) {
            for (let i in this.subscribers) {
                if (typeof this.subscribers[i] == "function") {
                    this.subscribers[i](what);
                }
            }
        },
        // 让每个对象具有订阅功能
        make:function(obj){
            for(let key in this){
                obj[key] = this[key];
            }
            obj.subscribers = [];
        },
    }
```

使用实例
```js

   // 定义对象
        let o = {};
        // 实现数据绑定  实现具有发布订阅功能
        observer.make(o);
        // 发布
        $("#num").oninput = function(){
            o.publish(this.value);
        };


        // 平方功能
        o.addSubscriber(function(num){
            $("#sqrnum").value = Math.pow(num,2);
        });
        o.addSubscriber(function(num){
            $("#cubenum").value = Math.pow(num,3);
        });
        o.addSubscriber(function(num){
            $("#fourFangnum").value = Math.pow(num,4);
        });
        o.addSubscriber(function(num){
            $("#sqrtnum").value = Math.sqrt(num);
        });


    }




    function $(str){//#box .cls  p
        if(str.charAt(0)=="#"){
            return document.getElementById(str.substring(1));
        }else if(str.charAt(0)=="."){
            return document.getElementsByClassName(str.substring(1));
        }else{
            return document.getElementsByTagName(str);
        }
    }
```
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


