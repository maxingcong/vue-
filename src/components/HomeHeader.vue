<template>
<div>
  <header class="header">
  <div class="header-box">
      <span @click="mines" > {{list}} </span>
      <input type="search" placeholder="关键字"/>
      <i>定位</i>
    </div>
  </header>
  <mt-popup class="mtpopu" v-model="popupVisible" position="top">
     <div class="minesul">
      <router-link tag="li" :to='item.href' v-for='item of pro' :key="item.inde">
        <img :src="item.image">
        <span>{{item.title}}</span>
     </router-link>
    </div>
   </mt-popup>
</div>
</template>
<script>
import {Popup} from 'mint-ui'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Popup)

export default {
  data () {
    return {
      list        : '我的',
      popupVisible: false,
      pro         : []
    }
  },
  methods: {
      mines() {
        console.log(1);
        if(!this.popupVisible){
          this.popupVisible = true;
        }else{
          this.popupVisible = false;
        }
      },
  },
  mounted() {
    if(localStorage.getItem('username') == ''){
      this.list = '我的'
    } else if(localStorage.getItem('username')){
      this.list = localStorage.getItem('username');
    }
    axios.get('../../static/header.json')
    .then(res => {
       this.pro = res.data
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>
<style lang='scss' scoped>
@import '@/lib/reset.scss';
.header{
  z-index : 22222;
  position: relative;
  .header-box{
    @include rect(100%, 100%);
    @include flexbox();
    @include justify-content(space-around);
    @include align-items();
    span{
      @include ellipsis(.3rem, 1);
    }
    img{
      @include rect(auto, 62%);
    }
    input{
     @include border-radius(.12rem 0 .12rem .12rem);
     border: none;
     @include padding(0 .3rem);
     @include margin(.06rem 0);
   }
 }
}
.mtpopu {
  @include rect(100%, auto);
  @include margin(.43rem 0 0 0);
  .minesul{
   @include rect(100%, auto);
   @include background-color(#ffffff);
   li{
     @include rect(100% , .42rem);
     @include flexbox();
     @include align-items();
     @include margin(0 0 0 .2rem);
     border-bottom: 1px solid #666;
     color        : #666;
     img{
       @include rect(.34rem , auto);
       @include margin(0 .1rem 0 0);
     }
   }
 }
}
</style>
