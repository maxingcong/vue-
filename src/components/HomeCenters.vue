<template>
<div class="homecenters">
  <div class="supermarket">
      <p><span>推荐</span></p>
  </div>
  <ul class="supermarket-ul">
      <li class="supermarket-li" v-for="item of test[6].items" :key="item.index">{{item.title}}</li>
  </ul>
  <div class="supermarket-imgs">
    <img class="supermarket-imgs-1" :src="test[7].items[0].image" @click="test[7].items[0].href">
    <img class="supermarket-imgs-2" :src="test[7].items[1].image" @click="test[7].items[1].href">
  </div>
  <img class="supermarket-imgs-3" :src="test[8].items[0].image" @click="test[7].items[0].href">
  <div class="quanxiudiyizhan">
      <p><span>全牛第一站</span></p>
  </div>
  <div class="quanqiudiyizhan-style">
      <div class="qqdyz-top">
          <div class="qqdyz-top-recommend">
              <h5>{{test[10].items[0].tag}}</h5>
              <span>{{test[10].items[0].title}}</span>
              <i></i>
              <em>{{test[10].items[0].subtitle}}</em>
          </div>
         <img :src="test[10].items[0].image">
      </div>
      <div class="qqdyz-bottom">
          <div class="qqdyz-bottom-li" v-for="item  of test[11].items" :key="item.index" @click="item.href">
              <img :src="item.image">
              <span>{{item.title}}</span>
          </div>
      </div>
  </div>
  <div class="Travel-door"></div>
  <div class="Travel-door-rout">
          <div class="qqdyz-bottom-li" v-for="item of test[13].items" :key="item.index">
             <img :src="item.image">
             <p>{{item.title}}</p>
             <span>{{item.subTitle}}</span>
          </div>
   <div class="Hot-zSale">
    <img src="//gw.alicdn.com/tfs/TB1zm3lnrYI8KJjy0FaXXbAiVXa-750-110.png_.webp">  
   </div>
  <guessLike></guessLike>
  </div>
</div>
</template>
<script>
import guessLike from '@/components/guessLike'
export default {
    props     : ['test'],
    components: {
        'guessLike': guessLike
    }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
.homecenters{
    .supermarket{
        @include rect(100%, .47rem);
        background: url("//gw.alicdn.com/tfs/TB1keGJnxTI8KJjSspiXXbM4FXa-750-93.png_.webp") no-repeat;
        @include background-size(auto 100%);
        @include fullscreen(0px, relative);
        p{
            @include rect(50%,50%);
            position: absolute;
            right   : 0.27rem;
            top     : .15rem ;
            span{
                position: absolute;
                right   : 0;
            }
        }
    }
    .supermarket-ul{
        @include rect(100%, .35rem);
        @include flexbox();
        .supermarket-li{
            @include rect(14%, .3rem);
            @include flexbox();
            @include justify-content();
            @include align-items();
            @include margin(0 .05rem 0 .05rem);
            font-size    : .012rem;
            border       : 1px solid goldenrod;
            border-radius: .15rem;
        }
    }
    .supermarket-imgs{
        @include rect(99%, 1.5rem);
        position: relative;
        @include padding(.05rem);
        .supermarket-imgs-1{
             @include rect(65%, 100%);
        }
        .supermarket-imgs-2{
             @include rect(35%, 93%);
             position: absolute;
             right   : 0;
        }
    }
    .supermarket-imgs-3{
          @include margin(.05rem 0 0 0);
          @include rect(100%, auto);
    }
    .quanxiudiyizhan{
        @include rect(auto, .42rem);
          background: url("//gw.alicdn.com/tfs/TB1iPofnDvI8KJjSspjXXcgjXXa-750-110.png_.webp") no-repeat;
        @include background-size(100% 100%);
        @include fullscreen(0px, relative);
        border-top: 1px solid #cccccc;
        @include margin(0 .1rem 0 .1rem);
        p{
            @include rect(50%,50%);
            position: absolute;
            right   : 0.28rem;
            top     : .15rem ;
            span{
                position: absolute;
                right   : 0;
            }
        }
    }
    .quanqiudiyizhan-style{
        @include rect(auto , 2.5rem);
        @include margin(0 .1rem 0 .1rem);
        .qqdyz-top{
            @include rect(auto , 1.3rem);
            background: #ccc;
            position  : relative;
            .qqdyz-top-recommend{
                @include rect(30% , 100%);
                h5{
                    background: #ddcc8e;
                    @include rect(.3rem, auto);
                     @include margin(0 0 0.1rem 0);
                }
                span{
                    @include rect(100%, .75rem);
                 }
                 i{
                    @include display();
                    @include margin(.1rem .1rem .1rem .1rem);
                    @include rect(.4rem, 1px);
                     background: #ffc900;
                 }
            }
            img{
                position: absolute;
                @include rect(70%, 100%);
                right: 0;
                top  : 0;
            }
        }
        .qqdyz-bottom{
           @include flexbox();
           @include rect(100%, 1.3rem);
           @include justify-content(space-between);
            .qqdyz-bottom-li{
               @include flex();
               @include rect(auto, 1.2rem);
               @include margin(.05rem .05rem .05rem 0);
               img{
                   @include rect(100%, .7rem);
               }
               span{
                    @include ellipsis(100%, 2);
                }
           }
        }
    }
    .Travel-door{
         @include rect(auto, .42rem);
        background: url("//gw.alicdn.com/tfs/TB1seGJnxTI8KJjSspiXXbM4FXa-750-110.png_.webp") no-repeat;
        @include background-size(100% 100%);
        border-top: 1px solid #cccccc;
        @include margin(0 .1rem 0 .1rem);
    }
    .Travel-door-rout{
          @include flexbox();
          @include rect(100%, 2.5rem);
          @include padding(0 0.1rem 0.1rem 0.1rem);
          @include flex-wrap(wrap);
          .qqdyz-bottom-li{
               @include rect(31%, 1.2rem);
               @include margin(0 0.05rem 0 0);
               img{
                   @include rect(100%, .7rem);
               }
               span{
                   @include ellipsis(.6rem, 1);
               }
           }
    }
    .Hot-zSale{
        @include rect(100%,.5rem);
        img{
            @include rect(100%, 100%)
        }
    }
}

</style>
