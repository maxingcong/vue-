<template>
<div>
  <mt-header title="购物车" class="care-header" >
    <router-link to="/" slot="left">
      <mt-button icon="back" class="goback">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <div class="Care-main">
    <div class="Care-main-kong" v-show="CareShopp">
       <img src="@/assets/CareKong.png">
       <p>不要看了快去买吧</p>
    </div>
    <div class="Care-tal" v-show="CareShoppTable">
            <div class="Care-top">
                <div class="Care-top-tr">
                   <span>跟团游</span>
                   <span>编辑</span>
              </div>
            </div>
            <div class="Care-main-1">
                <li class="Care-main-tr" v-for="(item,index) of oitem" :key="index">
                  <mt-cell-swipe class="remove"
                              :right="[
                                { content: '删除',
                                  style  : { background: 'red', color: '#fff' },
                                  handler: () => Removr(index)
                                }]">
                    <div class="Care-main-td1">
                      <input type="checkbox" :value="index"  v-model='testNum' >
                    </div>
                    <div class="Care-main-td2">
                      <img :src="list[item.id].image"><br>
                      <span>￥{{list[item.id].price}}</span>
                    </div>
                    <div class="Care-main-td3">
                         <div class="Care-main-tr-div">
                           <p class="Care-main-to">   深圳出发: <em>{{list[item.id].title}}</em></p>
                           <p class="Care-main-time">出发时间 : <em>1.1231243</em> </p>
                           <p class="Care-main-type">套餐类型 : <em>{{item.genre}}</em> </p>
                         </div>
                         <p class="Care-main-td3-p">
                            <em @click="Carejj(index)" >-</em>
                            <span>{{item.number}}</span>
                            <em @click="Caresg(index)">+</em> 
                         </p>
                    </div>
                   </mt-cell-swipe>
                </li>  
            </div> 
        </div>
  </div>
  <div class="Care-padd"></div>
  <div class="Care-footer">
    <div class="Care-xz">
      <input type="checkbox" v-model="ckeckAll" @click="ckeAll" >
      <span>全选</span>
    </div>
   <div class="Care-zj">
     <span class="Care-zj-span">合计: $ <em>{{allprice}}</em></span>
     <div @click="CareGo">
       <span>去下单</span>
     </div>
   </div>
  </div>
  <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="GuessLike">
            <h3>猜你喜欢</h3>
            <ol class="GuessLike-ul">
                <li class="GuessLike-li" v-for='(item, index) of list' :key="index" @click="referck(index)">
                    <img v-lazy="item.image">
                    <em class="GuessLike-p">{{item.type}}</em>
                    <span>{{item.title}}</span>
                    <b>￥{{item.price}}</b>
                    <i>{{item.description}}</i>
                </li>
            </ol>
        </div>
  </mt-loadmore>
</div>

</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import {Header,Lazyload, Loadmore ,CellSwipe } from 'mint-ui'

Vue.use(Header)
Vue.use(Lazyload)
Vue.use(CellSwipe)

import GuessLike from '@/components/guessLike'
export default {
  data () {
    return {
      CareShopp     : false,
      allLoaded     : false,
      CareShoppTable: true,
      i             : 1,
      uname         : '',
      list          : [],      // 数据库
      oitem         : [],      // 当前商品
      testNum       : [],      // 利用绑定属性获取当前选中元素的下标
      ckeckAll      : false
    }
  },
 methods: {
       Removr (val) {
          this.oitem.splice(val, 1);
          let data = JSON.stringify(this.oitem)
          localStorage.setItem(this.uname,data);
       },
      loadBottom () {
        console.log('这是分段加载')
      },
      Carejj (val) {
         if(this.oitem[val].number > 1 ){
            this.oitem[val].number--;
            let data = JSON.stringify(this.oitem)
            localStorage.setItem(this.uname,data);
         }
      },
      CareGo () { //跳转到地址页面
         this.$router.push('/subtotal');
         this.$stort.commit('maslist',this.testNum)
      },
      Caresg (val) {
         this.oitem[val].number++;
         let data = JSON.stringify(this.oitem)
         localStorage.setItem(this.uname,data);
      },
      referck (val) {
            this.$router.push('/refer/'+val);
      },
      ckeAll () {
          if(!this.ckeckAll) {
             for( let i = 0 ; i < this.oitem.length ; i++) {
                 this.testNum.push(i)
             }
          } else {
             for( let i = 0 ; i < this.oitem.length ; i++) {
                 this.testNum.pop(i)
             }
          }
      }   

    },
  computed : {
        allprice () {
            let sum = 0
            for(let i = 0 ; i < this.testNum.length; i++){
                // console.log(this.oitem[this.testNum[i]].id)
                let pri  = [this.oitem[this.testNum[i]].id]
                    sum += this.list[pri].price * this.oitem[this.testNum[i]].number
                // console.log(this.oitem[this.testNum[i]].number)
            }
            return sum;
        }
    },
    updated() {
      if(this.testNum.length == this.oitem.length){
           this.ckeckAll = true
      } else{
           this.ckeckAll = false
      }
    },
    mounted() {
      let usename    = localStorage.getItem('username');
          this.uname = JSON.parse(usename);
      if (!this.uanma) {
        // console.log(1)
        //  this.$router.push('/user');
      };
      this.oitem = JSON.parse(localStorage.getItem(this.uname) );
      console.log(this.oitem);
      if(!this.oitem){ // 没有商品 
        this.CareShopp = true;
      }else{  //有商品
         this.CareShoppTable = true
      };
      
      axios.get('../../static/guessLike.json')
        .then(res => {
            this.list = res.data
        })
        .catch(err => console.log(err))
  }
}
</script>
<style lang="scss" scoped>
@import "@/lib/reset.scss";
.care-header{
  @include flexbox();
  @include background-color(#ffc900);
  .goback{
      color: #ffff;
  }
}
.remove{
  .mint-cell-right{
    .mint-cell-swipe-buttongroup{
      .mint-cell-swipe-button{
         @include rect(auto, 100%);
            .mint-cell-swipe-button{
            padding        : 70% 10px;
            width          : 100%;
            height         : 100%;
            display        : flex;
            justify-content: center;
            align-items    : center;
        }
      }
    }
  }
}

.Care-main{
  .Care-main-kong{
     @include rect(100%, 3rem);
     @include flexbox();
     @include justify-content();
     @include align-items();
     overflow: hidden;
  }
  .Care-tal{
    @include rect(100%, auto);
    
    .Care-top{
      @include rect(100%, .3rem);
      @include background-color(#ffffff);
      @include flexbox();
      @include justify-content(space-between);
      @include align-items();
      .Care-top-tr{
        @include rect(100%, auto);
        @include flexbox();
        @include justify-content(space-between);
        @include align-items();
        span{
          @include padding(0 .1rem 0 .5rem);
        }
      }
    }
    .Care-main-1{
      @include rect(100%, auto);
      @include background-color(#f8efef);
      border-bottom: 1px solid #d8c9c9;
      .Care-main-tr{
          @include rect(100%, auto);
          @include flexbox();
          @include justify-content();
          @include align-items();
          @include padding(0.05rem 0 0 .05rem);
          position     : relative;
          border-bottom: 1px solid #dfcfcf;
          .Care-main-td2{
            @include rect(20%,100%);
            text-align: center;
              img{
                  @include rect(80%, .8rem);
                  @include padding(0.1rem 0)
              }
              span{
                color: red;
              }
          }
          .Care-main-td3{
             @include rect(44%,100%);
             @include padding(0 0 0 .1rem);
             font-size: .14rem;
             .Care-main-to{
               @include ellipsis(100%,1);
               @include padding(0.05rem 0);
               
             };
             .Care-main-time, .Care-main-type{
                 @include ellipsis(100%,1);
                 @include padding(0 0 .05rem 0);
                 color    : rgba(175, 166, 166, 1);
                 font-size: .12rem;
             };
             .Care-main-td3-p{
                  @include flexbox();
                  @include justify-content();
                  @include align-items();
                  padding-left: 1.5rem;
                 em{
                   @include rect(.2rem, .2rem);
                   @include flexbox();
                   @include justify-content();
                   @include align-items();
                   @include background-color(#cccccc);
                   border: #0000;
                 }
                 span{
                   @include rect(.4rem, .2rem);
                   @include flexbox();
                   @include justify-content();
                   @include align-items();
                   @include background-color(#ffffff);
                 }
             }
          }
      } 
    }
  }
}
.Care-padd{
  @include background-color(#e9dddd);
  @include rect(100%, .1rem);
}
.Care-footer {
  @include rect(100%, .4rem);
  @include background-color(#ffffff);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  z-index : 100;
  position: absolute;
  bottom  : 0;
  .Care-xz{
    @include padding(0 0 0 .3rem)
  }
  .Care-zj{
    @include flexbox();
    @include rect(70%, 100%);
    @include justify-content(space-between);
    @include align-items();
    div{
      @include rect(2rem, 100%);
      @include background-color(red);
      @include justify-content();
      @include align-items();
      @include flexbox();
      color: #ffffff;
    }
    .Care-zj-span{
      @include rect(2rem , 100%);
      @include justify-content();
      @include align-items();
      @include flexbox();
      
    }
  }

}
.GuessLike{
    @include rect(100%, auto);
    @include background-color(#f5f3f3);
    h3{
      @include padding(0 0 0 .15rem);
    }
    .GuessLike-ul{
        @include flexbox();
        @include rect(100%, auto);
        @include flex-wrap(wrap);
        .GuessLike-li{
            @include rect(50%, auto);
            padding : 0 .1rem 0 .1rem;
            position: relative;
            img{
                @include padding(.05rem 0 0 0);  
                @include rect (100%, 1.6rem);
            }
            .GuessLike-p{
            @include rect(auto,auto);
            @include text-color(#fff8f8);
            @include font-size(.12rem);
            @include padding(.04rem);
            position     : absolute;
            top          : 0.05rem;
            left         : .2rem;
            background   : rgba(0,0,0,0.6);
            border-radius: .1rem 0 .1rem .1rem;
            }
            span{
                @include ellipsis(100%,2)

            }
            b{
                @include text-color(red);
                @include margin(0 .3rem 0 0);
            }
        }
    }
  }

</style>
