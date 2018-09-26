<template>
  <div id="app" class="container">
   <router-view name="header"></router-view>
    <div class="content">
      <router-view name="center"></router-view>
      <router-view name="uesercente"></router-view>
    </div>
    <router-view name="footer"></router-view>  
</div>
</template>
<script>
import Vue from 'vue'
import {Loadmore} from 'mint-ui'

Vue.use(Loadmore)

export default {
   methods: {
     loadTop () {
       this.$refs.loadmore.onTopLoaded();
     }
   }
}
</script>
<style lang="scss">
@import 'lib/reset.scss';
  html, body, .container{
    @include rect(100%, 100%);
    @include flexbox();
    @include flex-direction(column);
    .header{
      @include rect(100% , 0.44rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include background-color(#ffc900);
    };
    .content{
      @include rect(auto, 100%);
      @include flex-direction(column);
      @include overflow(scroll);
    };
    .foote{
      @include rect(100%, 0.5rem);
      @include flexbox();
      @include background-color(yellow);
      ul {
        @include rect(100%, 100%)
      }
  };
}
</style>
