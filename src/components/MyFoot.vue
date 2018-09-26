<template>
 <footer class="foote">
  <ul>
    <li v-for="(item, index) of list" :key="index">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li><!-- 添加链接的路由  router-link :to="路径"-->
  </ul>
</footer>
</template>
<script>
// 暴露当前模块并返回当前模块的事件值
export default {
  data () {
    return {
      list: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '收藏',
          path: '/Pocket'
        },
        {
          name: '行程',
          path: '/route'
        },
        {
          name: '红包',
          path: '/red-pkage'
        },
        {
          name: '我的',
          path: '/care'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
ul{
    @include flexbox();
    li{
        @include flexbox();
        @include flex();
        @include rect(auto,100%);
        @include flex-direction(column);
        @include justify-content();
        @include align-items();
        // a为未连接状态下超链接颜色
        // &为动态链接后超链接的颜色
        a {
          background: pink;
          display   : block;
          @include text-color(#333);
          &.router-link-active {
            background: greenyellow;
            @include text-color(#ffffff);
          }
        }
    }
}

</style>
