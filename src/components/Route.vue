<template>
  <div>
    <div class="RouterHeader">
    <p>当前还有行程</p>
    <span>探索一段新征程把</span>
    </div>

</div>
</template>

<script>
export default {

mounted() {
  console.log('亲还没有登录呢')
  if(!localStorage.getItem('username')) {
    this.$router.push('/user')
  } 
},
}
</script>

<style lang="scss" scoped>
@import '@/lib/reset.scss';
.RouterHeader{
  @include rect(100%, 1.05rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include flex-wrap(wrap);
  background: url("http://gw.alicdn.com/tfs/TB1g.kXgS_I8KJjy0FoXXaFnVXa-1125-330.png_970x970.jpg_.webp") no-repeat center;
}

</style>
