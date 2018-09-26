<template>

<div class="Refer-main">
    <div class="Refer-header-img">
       <img class="header-img1" :src="gather.image" >
    </div>
    <dl class="Refer-pripc">
      <span>￥{{gather.price}}</span>
    </dl>
    <dl class="Refer-title">
      <h3>{{gather.title}}</h3>
       <div class="Refer-title-rt">
           <p></p>
           <em>分享</em>
       </div>
    </dl>
    <dl class="Refer-description">
        <p>{{gather.description}}</p>
        <div class="Refer-description-bottom">
            <img src="//gw.alicdn.com/tps/TB1_81_PXXXXXayXFXXXXXXXXXX-246-82.png">
            <img class="Refer-description-img1" src="//gw.alicdn.com/tps/TB1DCgkNVXXXXXlapXXXXXXXXXX-24-24.png">
            <em>承诺不加价</em>
            <img  class="Refer-description-img1" src="//gw.alicdn.com/tps/TB1DCgkNVXXXXXlapXXXXXXXXXX-24-24.png">
            <em>出游有保障</em>
            <img  class="Refer-description-img1" src="//gw.alicdn.com/tps/TB1DCgkNVXXXXXlapXXXXXXXXXX-24-24.png">
            <em>更改责赔付</em>
            <span> > </span>
       </div>
    </dl>
     <dl class="Refer-coupon">
        <div class="Refer-coupon-l">
          <em>领券</em>
          <img class="Refer-coupon-img" src="//gw.alicdn.com/tfs/TB1VELph3MPMeJjy1XcXXXpppXa-186-36.png">
          <h5>领取店铺100元优惠券</h5>
       </div>
        <div class="Refer-coupon-c">
           <em>促销</em>
          <img class="Refer-coupon-img" src="//gw.alicdn.com/tfs/TB1MDmJh3MPMeJjy1XdXXasrXXa-135-36.png">
          <h5>最多可送3290飞猪里程</h5>
       </div>
    </dl>
    <dl class="Refer-server">
        <div class="Refer-server-t">
          <em>服务</em>
          <img src="https://gw.alicdn.com/tfs/TB1t8dYDv1TBuNjy0FjXXajyXXa-124-24.png">
       </div>
        <div class="Refer-server-b">
           <span>该商品在支付成功后需等待卖家确认，平均确认时长4小时28分钟，通过率0%</span>
       </div>
    </dl>
     <dl class="Refer-choice">
        <div class="Refer-choice-t">
            <div class="Refer-choice-t-l">
                <span>选择套餐</span>
                <em>已选</em>
                <em>成人</em>
            </div>
            <div class="Refer-choice-t-r">
                 <p>全部团期<em> > </em></p>
            </div>
        </div>
        <div class="Refer-choice-b">
            <ol class="Refer-choice-b-ol">
                
                <li>
                    <p>09/12</p>
                    <span>￥5000</span>
                </li>
                <li>
                    <p>09/12</p>
                    <span>￥5000</span>
                </li>
                <li>
                    <p>09/12</p>
                    <span>￥5000</span>
                </li>
                <li>
                    <p>09/12</p>
                    <span>￥5000</span>
                </li>
                <li>
                    <p>09/12</p>
                    <span>￥5000</span>
                </li>
            </ol>
       </div>
    </dl>
    <dl class="Refer-evaluation">
        <div class="Refer-evaluation-t">
           <div class="Refer-evaluation-t-h">
                <h3>宝贝评价(3)</h3>
                <span>查看全部 <em> > </em></span>
           </div>
           <div class="Refer-evaluation-t-m">
               <div class="Refer-evaluation-t-yonghu">
                   <img src="//wwc.alicdn.com/avatar/getAvatar.do?userIdStr=vGNuOHcWv88YXF-HPmvbMGx4PG8bXF--OHlHOFkSvmNuv8x0PFReXH80vmkuPGxb&width=40&height=40&type=sns">
                   <span><em>|</em>***2</span>
                </div>
                <p>性价比很高 玩的很不错 很满意的旅行 下次定日本还找你们</p>
                <span>2118-09-09 18: 00: 00</span>
           </div>
        </div>
        <div class="Refer-evaluation-b">
            <div class="Refer-evaluation-t-h">
                <h3>宝贝评价(3)</h3>
                <span>查看全部 <em> > </em></span>
           </div>
           <span>宝贝好不好，问问已买的人</span>
        </div>

    </dl>
    <dl class="kongbai"></dl>
    <dl class="Refer-shops">
        <img  class="Refer-shops-img" src="//img.alicdn.com/bao/uploaded//41/9e/TB1gL9ZRVXXXXbFXXXXSutbFXXX.jpg_100x100.jpg">
         <div class="Refer-shops-main">
             <p>北京中商视野国旅专营店</p>
             <img src="//gw.alicdn.com/tps/TB1vSE_OVXXXXXNXXXXXXXXXXXX-123-42.png">
         </div>
         <div class="Refer-shops-rt ">
             <p><span>描述相符</span><em>4.9</em> <i>高</i></p>
             <p><span>服务态度</span><em>4.9</em> <i>高</i></p>          
         </div>
    </dl>
    <dl class="kongbai"></dl>
    <dl class="Refer-b-imgs">
        <ul class="Refer-b-imgs-ul">
            <li v-for="(item, index) of lists" :key="index">
                <img v-lazy="item.image">
            </li>
        </ul>
    </dl>
    <div class="Refer-heade" v-show="headerShow">
     <span @click="goback">×</span>
     <span @click="share">---</span>
    </div>
    <div class="to-top" @click="toTop" v-show="backTopShow">
        <p>||</p>
        <span>顶部</span>
    </div>
    
   <div class="fuzhu">
     到底了
   </div>
  <div class="Refer-footer" v-show="ModelShow">
     <li @click="service">
         <span>客服</span>
     </li>
     <li @click="store">
         <span>店铺</span>
     </li>
     <li @click="collect">
         <span>收藏</span>
     </li>
     <li class="Refer-footer-li">
         <div class="Add-cart" @click="addcare()">加入购物车</div>
         <div class="Buy-Now" @click="buynow()">立即购买</div>
     </li>
  </div>
  <mt-popup class="Refer-model" v-model="popupVisible" position="bottom">
        <div class="Refer-details">
           <div class="Refer-details-t">
               <img :src=" gather.image ">
               <span>￥{{gather.price}}</span>
           </div>
           <div class="Refer-details-c">
               <h3>套餐选择</h3>
               <dl @click="detailsOK(index)" v-for="(item, index) of dist" :key="index">{{item}}</dl>
           </div>
           <div class="Refer-details-b">
               <em @click="Referjj">-</em> <input type="number" v-model="val"><em @click="val++">+</em>
           </div>
        </div>
      <div class="Refer-ok" v-show="flag" @click="ReferOk">
         <span class="Refer-ok-add">加入购物车</span>
      </div>
   </mt-popup>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import {Lazyload, Toast ,Indicator,MessageBox ,Popup } from 'mint-ui'

Vue.use(Lazyload)
Vue.use(Popup)

export default {
    data() {
        return {
            backTopShow     : false,
            popupVisible    : false,
            flag            : false,
            ModelShow       : true,
            headerShow      : true,
            showCancelButton: false,
            list            : 0,                                                   //    id 号                                   // 商品 id
            gather          : [],                                                  //    当前商品
            lists           : [],                                                  //    商品库
            val             : 1,                                                   //    商品数量
            details         : 1,                                                   //    套餐 id
            combo           : '',
            dist            : ['1号 豪华套餐','2号 豪华套餐','3号 豪华套餐','4号 豪华套餐','5号 豪华套餐']
       }
    },
    methods: {
        Referjj () {
              if(this.val > 0 ){
                  this.val--;
              } else {
                  this.val = 0;
              }
        },
        getdata (val) {
            axios.get('../../static/guessLike.json')
            .then(res => {
                this.gather = res.data[val];
                this.lists  = res.data;
            })
            .catch(err => console.log(err))
        },
        goback () {
            this.$router.go(-1);
        },
        share () {
             Toast({
                message : '亲,该功能还未完善,请谅解',
                position: 'center',
                duration: 3000
            });
        },
        toTop () {
          let backtop = document.getElementsByClassName('content')[0];
          clearInterval(back);
          let back = setInterval(() => {
                if(backtop.scrollTop > 0){
                    backtop.scrollTop -= 50;
                }else {
                    clearInterval(back);
                }
            },10);   
        },
        service () {
            Indicator.open('正在为您转接中');
            let back = setTimeout(() => {
                    clearInterval(back);
                    Indicator.close();             
            },2000);   
        },
        store () {
             Indicator.open({
                        text       : '正在为您跳转中',
                        spinnerType: 'fading-circle'
                    });
            let back = setTimeout(() => {
                    clearInterval(back);
                    Indicator.close();             
            },2000);
        },
        collect () {
            MessageBox({
                title           : '收藏',
                message         : '确定添加?',
                showCancelButton: false
            });
        },
        addcare () {
            let val           = document.getElementsByClassName('Refer-ok-add')[0]
                val.innerHTML = '加入购物车';
            let uname         = localStorage.getItem('username');
            if(!uname) {     //用户是否登录
                Toast({
                    message : '亲,你还没有登录',
                    position: 'center',
                    duration: 2000
                });
                this.$router.push('/user');
            };
            if(!this.popupVisible){    //选项隐藏消失
                this.popupVisible = true;
                this.flag         = true;
            }else{
                this.popupVisible = false;
                this.flag         = false;
            }
        },
        buynow () {
            let val           = document.getElementsByClassName('Refer-ok-add')[0]
                val.innerHTML = '立即购买';
            let uname         = localStorage.getItem('username');
            if(!uname) {     //用户是否登录
                Toast({
                    message : '亲,你还没有登录',
                    position: 'center',
                    duration: 2000
                });
                this.$router.push('/user');
            } else { //用户登录
                MessageBox.confirm('需要立即支付吗?')
                  .then(action  => {
                                                        uname = JSON.parse(uname);            //转化格式            
                                                    let data  = localStorage.getItem(uname);  //获取商品
                                                        data  = JSON.parse(data);
                     if(!data) { //没有商品
                            let item = [{
                                 id    : this.list,      //id
                                 genre : this.details,   //类型
                                 number: this.val        //数量
                            }];
                            item = JSON.stringify(item);
                            localStorage.setItem(uname,item);
                            this.popupVisible = false;
                            this.flag         = false;
                            this.$router.push('/care');
                        } else { // 存在商品
                          let flag = true ;
                          // 商品id和类型都相等  就加加
                            for(var i = 0 ; i < data.length ; i++ ){
                                if(data[i].id == this.list && data[i].genre == this.details){
                                     let  j         = this.val;
                                     let  f         = data[i].number;
                                          j         = Number(j)+Number(f);
                                     data[i].number = j ;
                                          flag      = false
			    		                  break;
                                }
                            }
                            if(flag){//id不相等
                               let item = {
                                    id    : this.list,      //id
                                    genre : this.details,   //类型
                                    number: this.val        //数量
                                  };
                               data.unshift(item);     
                            }
                            data = JSON.stringify(data);
                            localStorage.setItem(uname,data);
                            this.popupVisible = false;
                            this.flag         = false;
                            this.$router.push('/care');                            
                        }
                  })    
             }

        },
        ReferOk () {
            let uname = localStorage.getItem('username');
            if(!uname) {     //用户是否登录
                Toast({
                    message : '亲,你还没有登录',
                    position: 'center',
                    duration: 2000
                });
                this.$router.push('/user');
            } else { //用户登录
                MessageBox.confirm('Are you sure?')
                  .then(action  => {
                                                              uname = JSON.parse(uname);            //转化格式            
                                                          let data  = localStorage.getItem(uname);  //获取商品
                                                              data  = JSON.parse(data);
                     if(!data) { //没有商品
                            let item = [{
                                 id    : this.list,      //id
                                 genre : this.details,   //类型
                                 number: this.val        //数量
                            }];
                            item = JSON.stringify(item);
                            localStorage.setItem(uname,item);
                            this.popupVisible = false;
                            this.flag         = false;
                             Toast({
                                message : '添加成功',
                                position: 'center',
                                duration: 2000
                            });
                        } else { // 存在商品
                          let flag = true ;
                          // 商品id和类型都相等  就加加
                            for(var i = 0 ; i < data.length ; i++ ){
                                if(data[i].id == this.list && data[i].genre == this.details){
                                     console.log(1);
                                     let  j         = this.val;
                                     let  f         = data[i].number;
                                          j         = Number(j)+Number(f);
                                     data[i].number = j ;
                                          flag      = false
			    		             break;
                                }
                            }
                            if(flag){//id不相等
                               let item = {
                                    id    : this.list,      //id
                                    genre : this.details,   //类型
                                    number: this.val        //数量
                                  };
                               data.unshift(item);     
                            }
                            data = JSON.stringify(data);
                            localStorage.setItem(uname,data);
                            this.popupVisible = false;
                            this.flag         = false;
                            Toast({
                                message : '添加成功',
                                position: 'center',
                                duration: 2000
                            });
                        }
                  })    
             }
        },
        detailsOK (num) {
            let dl = document.getElementsByClassName('Refer-details-c')[0].children;
            for(var i= 0; i < dl.length; i++) {
                dl[i].style.background = 'none';
            }
             this. details                  = num+1;
             dl    [num+1].style.background = 'linear-gradient(90deg,#ff9300,#f35)';
        }
    },
    mounted () {
        this.list = this.$route.params.id;
        this.getdata (this.list);
    },
    updated() {
        this.h = document.getElementsByClassName('content')[0]
        this.h.addEventListener('scroll',()=>{     
              if(this.h.scrollTop >100 ) {
                   this.headerShow  = false;
                   this.backTopShow = true ;
              }else {
                   this.headerShow  = true;
                   this.backTopShow = false;
              }
              if(this.h.scrollTop >800 ) {
                   this.ModelShow = false;
              }else {
                   this.ModelShow = true;
              }
        },false)  
    },
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
body{
    font-size: .14rem;
}
.Refer-header-img{
    @include rect(100%, 50%);
    .header-img1{
        @include rect(100%, 100%)
    }
    
}
.Refer-pripc{
    @include padding(.05rem 0 0 .1rem);
    font-size: .3rem;
    color    : red;
}
.Refer-title{
    @include flexbox();
    h3{
       @include ellipsis(3.4rem, 2);
       @include padding(0 0 0 .2rem);
    }
    .Refer-title-rt{
        @include margin(0 0 0 .2rem);
        p{
           @include padding( 0 0 0 .05rem);
        }
        
    }
}
.Refer-description{
        @include padding(.1rem 0 .1rem .2rem);
        p{
           font-size: .12rem;
           color    : #c2c2c2;
        }
        .Refer-description-bottom{
            @include flexbox();
            @include margin(.05rem 0 .05rem 0);
            @include align-items();
            img{
                @include rect(15%, auto);
            }
            em {
                font-size: 12px;
                @include ellipsis(2.3rem ,1);
            }
            .Refer-description-img1{
                @include rect(4%, auto);
                @include margin(0 .05rem 0 .05rem);
            }
            span{
                color: #c2c2c2;
                @include margin(0 .1rem 0 .05rem)
            }
        }
}
.Refer-coupon{
    @include padding(0 0 0 .1rem);
    .Refer-coupon-l, .Refer-coupon-c {
        @include flexbox();
        @include padding(0 0 .1rem 0);
        em{
           color: #c2c2c2;
           @include margin(0 .1rem 0 0);
        }
        .Refer-coupon-img{
           @include rect(18%, 20%);
           @include margin(0 .1rem 0 0 )
        }
        .Refer-coupon-l{
            @include margin(0 .2rem 0 0);
        }
    }
}
.Refer-server{
    @include background-color(#cccccc);
    @include padding(.1rem 0 .1rem 0 );
    .Refer-server-t{
       @include background-color(#ffffff);
       @include padding(.08rem 0 0 .1rem);
       img{
           @include rect(20%,23%);
           @include padding(0 0 0 .1rem);
       }
    }
    .Refer-server-b{
        @include padding(.08rem 0 0.08rem 0.5rem);
        @include background-color(#ffffff);
        span{
           @include ellipsis(95% ,2); 
        }
    }
}
.Refer-choice{
    @include background-color(#cccccc);
    @include padding(0 0 .1rem 0 );
    .Refer-choice-t{
       @include background-color(#ffffff);
       @include padding(0.05rem 0 .05rem .1rem);
       @include flexbox();
       @include justify-content(space-between);
       @include align-items();
       span{
          font-size  : .15rem;
          font-weight: 800;
          @include padding(0 0 0 .1rem);
       }
       em{
           color: #cccccc;
       }
       .Refer-choice-t-r{
        color: yellow;
        @include margin(0 .2rem 0 0);
       }
    }
    .Refer-choice-b{
       @include background-color(#ffffff);
       .Refer-choice-b-ol{
           @include flexbox();
           @include justify-content(space-around);
           @include align-items();
           @include padding(0.05rem 0 0 0);
           li{
             border    : 1px solid #c2c2c2;
             text-align: center;
             @include rect(15%, .52rem);
             @include margin(0 0 .1rem 0);
             @include padding(.05rem 0 0 0);
             span{
                 color: red;
             }
           }
       }
    }
}
.Refer-evaluation{
    @include padding(.1rem .1rem .1rem .1rem );
   .Refer-evaluation-t{
       .Refer-evaluation-t-h{
           @include flexbox();
           @include justify-content(space-between);
           @include align-items();
           font-size: .15rem;
          span{
           color: yellow;
           @include margin(0 .1rem 0 0);
          }

       }
      .Refer-evaluation-t-m{
          .Refer-evaluation-t-yonghu{
              @include flexbox();
              @include align-items();
              @include padding(.1rem 0);
              img{
                  border-radius: 50%;
                  @include rect(7%, 10%);
                  @include margin(0 .1rem 0 0);
              }
          }
          p{
            @include padding(.05rem 0)
          }
          span{
              color: #cccccc;
          }

      }
   }
   .Refer-evaluation-b{
       .Refer-evaluation-t-h{
           @include flexbox();
           @include justify-content(space-between);
           @include align-items();
           @include padding(.1rem 0);
           font-size : .15rem;
           border-top: 1px solid #c2c2c2;
          span{
           color: yellow;
           @include margin(0 .1rem 0 0);
          }

       }
   }
}
.Refer-shops{
    @include padding(.1rem .1rem);
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
   .Refer-shops-img{
       @include rect(14%, 10%);     
   }
   .Refer-shops-main{
       p{
           font-size: .16rem;
       }
       img{
           @include rect(24% ,10%);
       }
   }
   .Refer-shops-rt{
       span{
           color    : #c2c2c2;
           font-size: .12rem;
       }
       em{
           color: red;
           @include margin(0 .1rem);
       }
       i{
           @include background-color(yellow);
           color: red;
       }
   }
}
.Refer-b-imgs{
    .Refer-b-imgs-ul{
        img{
            @include rect(100%, 2.5rem);
        }   
    }
}
.kongbai{
    @include rect(100%, .1rem);
    @include background-color( #c2c2c2);
}
.fuzhu{
    @include flexbox();
    @include justify-content();
    @include align-items();
}
//返回顶部
.to-top{
    @include rect(.5rem, .5rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include flex-direction(column);
    background-color: rgba(255,255,255,.8);
    border-radius   : 50%;
    position        : absolute;
    top             : 80%;
    right           : 10%;
}
// 头部返回
.Refer-heade{
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    @include rect(100%, .3rem);
    background: rgba(245, 240, 240, 0.4);
    position  : absolute;
    top       : 0;
    span{
        font-size  : .5rem;
        font-weight: 100;
        @include padding(0 .1rem);
    }
}

//购买列表
.Refer-footer{
   @include rect(100%, .6rem);
   @include background-color(#ffffff);
   @include flexbox();
   @include justify-content(space-around);
   @include align-items();
   position: absolute;
   bottom  : 0;
   li{ 
       @include flexbox();
       @include flex-direction(column);
       list-style   : none;
       border-radius: 50%;
   }
   .Refer-footer-li{
        @include rect(60%, 100%);
        @include padding(.06rem .06rem);
        @include flexbox();
       @include flex-direction();
        @include justify-content(space-around);
        @include align-items();
        color: #ffffff;
       .Add-cart{
           @include rect(50%,100%);
           @include flexbox();
           @include justify-content(space-around);
           @include align-items();
           background-image: linear-gradient(90deg,#ffd101,#ff9302);
           border-radius   : .52rem 0 0 .52rem ;
       }
       .Buy-Now{
           @include rect(50%,100%);
           @include flexbox();
           @include justify-content(space-around);
           @include align-items();
           background-image: linear-gradient(90deg,#ff7500,#f35);
           border-radius   : 0 .52rem .52rem 0;
       }

   }
}
.Refer-model {
    @include rect(100%, auto);
    border-radius: .2rem .2rem 0 0;
    .Refer-ok{
        @include rect(100%, .6rem);
        background-image: linear-gradient(90deg,#ff9300,#f35);
        @include flexbox();
        @include justify-content(space-around);
        @include align-items();
        color: #ffffff;
    }
    .Refer-details {
        @include rect(100%, auto);
        @include background-color(#fcf4f4);
        border-radius: .2rem .2rem 0 0;
        .Refer-details-t{
              @include rect(100%, 40%);
              @include padding(.2rem .2rem);
              @include flexbox();
              @include align-items();
              img{
                  @include rect(.9rem, auto);
                  border-radius: .1rem;
              }
              span{
                  color: red;
                  @include margin(0 .1rem);
              }
        }
        .Refer-details-c{
            @include margin(.2rem .2rem);
            @include padding(.1rem 0);
            border-top   : 1px solid #ebe1e1;
            border-bottom: 1px solid #ebe1e1;
            dl{
                background: #fcf4f4;
                @include flexbox();
                @include align-items();
                @include justify-content();
                border-radius: .05rem;
                @include margin(.1rem 0 .02rem 0);
            }
        }
        .Refer-details-b{
             @include flexbox();
             @include align-items();
             @include justify-content();
             @include padding(0 0 .1rem 0);
             input{
                 border: none;
                 @include rect(30%, auto);
                 text-indent: 50%;
             }
             em{
                @include rect(.2rem, .2rem);
                @include flexbox();
                @include align-items();
                @include justify-content();
                background: #fff;
             }
        }
    }
}

</style>
