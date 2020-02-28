---

title: jquery制作购物车效果移动端

meta:
  - name: description
    content: jquery制作购物车效果移动端
  - name: keywords
	content: jquery制作购物车效果移动
	
created: 2019/04/03

updated: 
 
tags:
  - javaScript
  - Jquery
  - html
  - css

---

## 前言

### 项目环境
- 前端框架：js+jq+html+css

## 示例


//<img src="https://img-blog.csdnimg.cn/20190118125643596.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L21sb25seQ==,size_16,color_FFFFFF,t_70" />

html  
    

    <header>
        <h3>全场满100元包邮,还差<span>100</span>元包邮</h3>
    </header>
    <div class="main">
        <ul class="main_shop">
            <li class="shop_list">
                <div class="checked">
                   <div class= "checks"></div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <div class="img">
                            <img src="shop/9288714270450521_300.jpg" alt="苹果快速购买">
                        </div>
                        <div class="text">
                            <div class="tit">
                                <p>江南脐橙20个160g以上/个</p>
                                <div></div>
                            </div>
                            <div class="down"> 直降</div>
                            <div class="price">
                                <div class="price_left">
                                <span>￥</span><span class="mon">50</span><span>￥75.9</span>
                                </div>
                                <div class="price_right">
                                    <div class="mrnus">-</div>
                                    <div class="cont">0</div>
                                    <div class="add">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_bottom">
                        <p>满减<span>满一件,即享受16.9元优惠</span></p>
                    </div>
                </div>
            </li>
            <li class="shop_list">
                <div class="checked">
                    <div class="checks"></div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <div class="img">
                            <img src="shop/9288714270450521_300.jpg" alt="苹果快速购买">
                        </div>
                        <div class="text">
                            <div class="tit">
                                <p>江南脐橙20个160g以上/个</p>
                                <div></div>
                            </div>
                            <div class="down"> 直降</div>
                            <div class="price">
                                <div class="price_left">
                                    <span>￥</span><span class="mon">50</span><span>￥75.9</span>
                                </div>
                                <div class="price_right">
                                    <div class="mrnus">-</div>
                                    <div class="cont">0</div>
                                    <div class="add">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_bottom">
                        <p>满减<span>满一件,即享受16.9元优惠</span></p>
                    </div>
                </div>
            </li>
            <li class="shop_list">
                <div class="checked">
                    <div class="checks"></div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <div class="img">
                            <img src="shop/9288714270450521_300.jpg" alt="苹果快速购买">
                        </div>
                        <div class="text">
                            <div class="tit">
                                <p>江南脐橙20个160g以上/个</p>
                                <div></div>
                            </div>
                            <div class="down"> 直降</div>
                            <div class="price">
                                <div class="price_left">
                                    <span>￥</span><span class="mon">50</span><span>￥75.9</span>
                                </div>
                                <div class="price_right">
                                    <div class="mrnus">-</div>
                                    <div class="cont">0</div>
                                    <div class="add">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_bottom">
                        <p>满减<span>满一件,即享受16.9元优惠</span></p>
                    </div>
                </div>
            </li>
            <li class="shop_list">
                <div class="checked">
                    <div class="checks"></div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <div class="img">
                            <img src="shop/9288714270450521_300.jpg" alt="苹果快速购买">
                        </div>
                        <div class="text">
                            <div class="tit">
                                <p>江南脐橙20个160g以上/个</p>
                                <div></div>
                            </div>
                            <div class="down"> 直降</div>
                            <div class="price">
                                <div class="price_left">
                                    <span>￥</span><span class="mon">50</span><span>￥75.9</span>
                                </div>
                                <div class="price_right">
                                    <div class="mrnus">-</div>
                                    <div class="cont">0</div>
                                    <div class="add">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_bottom">
                        <p>满减<span>满一件,即享受16.9元优惠</span></p>
                    </div>
                </div>
            </li>
            <li class="shop_list">
                <div class="checked">
                    <div class="checks"></div>
                </div>
                <div class="content">
                    <div class="content_top">
                        <div class="img">
                            <img src="shop/9288714270450521_300.jpg" alt="苹果快速购买">
                        </div>
                        <div class="text">
                            <div class="tit">
                                <p>江南脐橙20个160g以上/个</p>
                                <div></div>
                            </div>
                            <div class="down"> 直降</div>
                            <div class="price">
                                <div class="price_left">
                                    <span>￥</span><span class="mon">50</span><span>￥75.9</span>
                                </div>
                                <div class="price_right">
                                    <div class="mrnus">-</div>
                                    <div class="cont">0</div>
                                    <div class="add">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content_bottom">
                        <p>满减<span>满一件,即享受16.9元优惠</span></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>




    <div class="car">
        <div class="car_left">
            <div id="quan" index = "0"></div>全选
        </div>
        <div class="car_right">
            <div class="te">
                <p>合计：<span>  ￥</span><span id="money">0.00</span></p>
                    <p>已经惠<span>￥0.00</span></p>
            </div>
            <div class="btn">
                去结算(<span>0</span>)
            </div>
        </div>
    </div>
    <footer>
        
        <ul>
            <li>
                <img src="shop/shouye.jpg" alt="">
                <p>首页</p>
            </li><li>
                <img src="shop/fenlei.jpg" alt="">
                <p>分类</p>
            </li><li>
                <img src="shop/shouye.jpg" alt="">
                <p>吃饭吧</p>
            </li><li>
                <img src="shop/car.jpg" alt="">
                <p>购物车</p>
            </li><li>
                <img src="shop/shouye.jpg" alt="">
                <p>我的</p>
            </li>

        </ul>
    </footer>

js

    $(function () {
        $(".mrnus").click(function () {
            shopAdd($(this));
            che();
        })
        $(".add").click(function () {
            
            shopAdd($(this));
            che();
        })
    
        $(".checks").click(function(){
            
            checked($(this));
            che();
        })
    
    
        $("#quan").click(function() {
            quan();
        })
    
    
    })
    
    function shopAdd(obj) {
        // console.log(obj)
        if(obj.html() == "+"){
            // alert("jia")
            let num = parseInt(obj.prev().html());
            num++;
            obj.prev().html(num);
    
            // 改变价格
            // 判断是否选中
            
            if (obj.parent().parent().parent().parent().parent().parent().parent().find(".checks").html() !=""){
                let pricr = parseInt(obj.parent().prev().find(".mon").html());
                // console.log(pricr);
    
                let money = parseInt($("#money").html());
                money += pricr;
                // console.log(price)
                $("#money").html(money);
    
            }
                
    
    
        } else if (obj.html() == "-"){
            // alert("j")
            let num = parseInt(obj.next().html());
            num--;
            if(num <= 0){
                num = 0;
                // return;
            }
            obj.next().html(num);
            
    
            // 改变价格
            // 判断是否选中
            if (obj.parent().parent().parent().parent().parent().parent().parent().find(".checks").html() != "") {
                let price2 = parseInt(obj.parent().prev().find(".mon").html());
                // console.log(pricr);
    
                let money = parseInt($("#money").html());
                money -= price2;
                // console.log(price)
                $("#money").html(money);
            }
        }
    
    }
    
    // 选择
    function checked(checks) {
        // console.log(checks.html())
        if (checks.html() == ""){
            checks.css({"background":"red"})
            checks.html("√");
            money(checks);
    
        }else{
            checks.css("background","white")
            checks.html("");
            money(checks,1);
        }  
    }
    
    
    function money(obj,x){
        // alert(obj)
        
        let price = parseInt(obj.parent().parent().find(".mon").html());
        let content = parseInt(obj.parent().next().find(".cont").html());
        // console.log(content)
        if(x != null){
            price *= -1 ;
        }
        let money= parseInt($("#money").html());
        money += price * content;
        // console.log(price)
        $("#money").html(money);
    }
    
    function che(){
    
        let ches = $(".checks");
        // console.log(ches.size())
    
    }
    
    function quan() {
        
        if($("#quan").attr("index") == 0){
            $("#quan").attr("index","1")
    
            $(".checks").css({ "background": "red" })
            $(".checks").html("√");
            $("#quan").css({ "background": "red" })
            $("#quan").html("√");
            $(".btn span").html("11")
        }else{
            $("#quan").attr("index", "0")
    
            $(".checks").css({ "background": "white" })
            $(".checks").html("");
            $("#quan").css({ "background": "white" })
            $("#quan").html("");
    
            $(".btn span").html("0")
        }
    
    
    
    }
    
css 

      @charset "utf-8";
      *{
      	margin:0;
      	padding:0;
      }
      
      html{
      	font-size:22.67vw;
      	/* font-family: "黑体"; */
      }
      html,body{
      	height: 100%;
      	background-color: #f4f4f4;
      }
      body{
      	height: 100%;
      	background-color: #f4f4f4;
      	font-family:"微软雅黑";
      	display: -webkit-flex;
      	flex-direction: column;
      }
      a{
      	text-decoration:none;
      }
      ul,ol{
      	list-style:none;
      }
      img{
      	border:0;
      	display: block;
      }
      header{
      	background: #fff9eb;
      	height: 0.4rem;
      	font-size: 12px;
      	padding-left: .1rem;
      	display: flex;
      	align-items: center;
      	border-bottom: 1px solid #ffd6a0;
      }
      header h3{
      	font-weight: normal;
      }
      header h3 span{
      	color: #ff695a;
      }
      
      
      
      /* main--------------------------*/
      .main{
      	display: flex;
      	flex:1;
      	overflow: auto;
      	margin-top: .1rem;
      	background: #ffffff;
      }
      .main_shop{
      	width: 100%;
      	flex-direction: column;
      }
      .shop_list{
      	width: 100%;
      	height: 1.3rem;
      	border-bottom:1px solid #dddddd; 
      	display: flex;
      	justify-content: space-between;
      	align-items: center;
      	
      }
      .checked{
      	width: 10%;
      	height: 100%;
      }
      .checked div{
      	width: 0.17rem;
      	height: 0.17rem;
      	border:1px solid #cdcdcd;
      	border-radius: 50%;
      	margin-top: .43rem;
      	margin-left: .1rem;
      	font-size: 12px;
      	color: white;
      	text-align: center;
      	line-height: .17rem;
      }
      .content{
      	flex: 1;
      	height: 100%;
      }
      .content_top{
      	width:100%;
      	height: 1rem;
      	display: flex;
      }
      .img , img{
      	width: .75rem;
      	height: 100%;
      }
      .text{
      	flex: 1;
      	height: 100%;
      	font-size: 12px;
      	padding-right:.16rem;
      	padding-left: .15rem;
      
      }
      .tit{
      	display: flex;
      	align-items: center;
      	justify-content: space-between;
      	height:.38rem;
      }
      .tit p{
      	font-size: .15rem;
      	color:#333333;
      }
      .tit div{
      	width:.15rem;
      	height: .17rem;
      	background: url("shop/remove.jpg");
      	background-size: cover;
      }
      .down{
      	height: 0.17rem;
      	width: 0.41rem;
      	color: #11b57c;
      	border:2px solid #11b57c;
      	border-radius: .08rem;
      	text-align: center;
      	line-height: .17rem;
      	margin-top: .11rem;
      }
      .price{
      	display: flex;
      	height: .3rem;
      	align-items: center;
      	justify-content: space-between;
      	font-size: .12rem;
      	font-weight: 900;
      }
      .price_left span:first-child{
      	color: #ff695a;	
      	display:inline-block;
      	margin-right: 5px;
      
      }
      .mon{
      	color: #ff695a;	
      	display:inline-block;
      	margin-right: 5px;
      
      }
      .price_left span:last-child{
      	color: #cecece;	
      	
      }
      .price_right{
      	display: flex;
      	justify-content: space-around;
      	align-items: center;
      	width: .77rem;
      	height: .22rem;
      	border:1px solid #dddddd;
      	border-radius: 5px;
      }
      .price_right div{
      	flex:1;
      	text-align: center;
      }
      .price_right div:nth-child(2){
      	border-right: 1px solid #dddddd;
      	border-left: 1px solid #dddddd;
      
      }
      
      
      
      
      .content_bottom{
      	width:100%;
      	height: .3rem;
      	border-top: 1px solid #dddddd;
      	display:flex;
      	justify-content: flex-start;
      	align-items: center;
      }
      .content_bottom p{
      	font-size: .13rem;
      	color:#808080;
      	font-weight: 800;
      	
      }
      .content_bottom p span{
      	font-size: .13rem;
      	color:#cccccc;
      	padding-left: 10px;
      }
      
      
      /* car */
      .car{
      	height: 0.48rem;
      	width: 100%;
      	border-top: 1px solid #d5d5d5;
      	background: #fff;
      	display: flex;
      	justify-content: space-between;
      	align-items: center;
      	font-size: 12px;
      
      }
      .car_left{
      	height: 100%;
      	display: flex;
      	align-items: center;
      }
      .car_left div{
          width: 0.17rem;
          height: 0.17rem;
          border: 1px solid #cdcdcd;
          border-radius: 50%;
          margin-left: .1rem;
          text-align: center;
      	line-height: .17rem;
      	margin-right: 10px;
      	
      }
      .car_right{
      	display: flex;
      	justify-content: space-between;
      	align-items: center;
      	height: 100%;
      }
      .te p:first-child{
      	font-size: 12px; 
      	font-weight: 900;
      }
      .te p:first-child span{
      	color: #ff6353;
      }
      .btn{
      	width: 1.1rem;
      	height:100%;
      	background:#ff6353;
      	color:white;
      	font-size: .17rem;
      	text-align: center;
      	line-height: .5rem;
      }
      .te p:last-child span{
      	color: #999999;
      }
      
      
      
      /* footer 999999*/
      
      footer{
      	height: 0.48rem;
      	width: 100%;
      	border-top: 2px solid #d5d5d5;
      	background: #fff;
      }
      footer ul{
      	display: flex;
      	justify-content: space-around;
      	align-items: center;
      	margin-top:6px;
      }
      footer ul li{
      	font-size: 12px;
      	color:#8d8a8a;
      }
      
      footer ul li img{
      	width: 0.25rem;
      	height: 0.22rem;
      }
## 后记
目前仍在不断地探索中
[链接去博主的csdn](https://blog.csdn.net/mlonly)              


