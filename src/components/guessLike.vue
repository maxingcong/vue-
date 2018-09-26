<template>
<div>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <div class="GuessLike">
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
import {Lazyload, Loadmore } from 'mint-ui'

Vue.use(Lazyload)
Vue.use(Loadmore)

export default {
    data () {
        return {
          allLoaded: false,
          list     : [],
          lisst    : [],
        }
    },
    methods: {
        loadBottom () {
         axios.get('http://www.daxunxun.com/doubanstart='+ 20)
            .then(res => {
               //这里可以获取数据的长度 判断长度为零时执行加载完毕
              if(res.data.length == 0) {
                  this.allLoaded = false;
              } else {
                   console.log([...this.lisst, ...res.data])
              }
                  this.$refs.loadmore.onBottomLoaded();
            })//请求成功或者失败豆要重新渲染数据
            .catch(err => console.log(err));
            this.$refs.loadmore.onBottomLoaded();
        },
        referck (val) {
            this.$router.push('/refer/'+val);
        }
    },
    mounted() {
        axios.get('../../static/guessLike.json')
        .then(res => {
            this.list = res.data
        })
        .catch(err => console.log(err))
    },
 
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.GuessLike{
    @include rect(100%, auto);
    @include background-color(rgb(235, 221, 221));
    .GuessLike-ul{
        @include flexbox();
        @include rect(100%, auto);
        @include flex-wrap(wrap);
        .GuessLike-li{
            @include rect(50%, auto);
            padding : 0 .1rem 0 .1rem;
            position: relative;
            img{
                @include rect (100%, 1.47rem);
            }
            .GuessLike-p{
            @include rect(auto,auto);
            @include text-color(#ffffff);
            @include font-size(.12rem);
            @include padding(.04rem);
            position     : absolute;
            top          : 0.03rem;
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
