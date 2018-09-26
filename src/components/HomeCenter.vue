<template>
<div class="slideshow">
  <mt-loadmore :top-method="loadTop"  :bottom-all-loaded="allLoaded" ref="loadmore"> 
   <div class="slideshow-top-img">
    <mt-swipe :auto="4000" class="slideshow-mt">
          <mt-swipe-item v-for="item of list[1].items" :key=item.index class="slideshow-mts">
            <img :src="item.image">
          </mt-swipe-item>
    </mt-swipe>
    <i class="slideshow-foot-img"><img :src="list[1].attr.bgImage"></i>
  </div>
  <div class="home-kind">
     <ul class="home-kind-ul">
       <li v-for="item of listItem" :key=item.index>
           <img :src="item.image">
           <span>{{item.title}}</span>
       </li>
     </ul>
   </div>
   <div class="lvxingboss">
        <div class="lvxingboss-refer">
           <ul class="lvxingboss-refer-ul">
             <li v-for="item of list[3].items" :key=item.index class="slideshow-mts">
               <div>
                 <span><i>{{item.tag1}}</i>{{item.title1}}</span>
                 <span><i>{{item.tag2}}</i>{{item.title2}}  </span>
               </div>
               <img :src="item.image">
             </li>
           </ul>
        </div>
     </div>
   <div class="Brand-Sale">
     <div class="BrandSale">
     <div class="BS-feizhu">
        <h4>飞猪特卖</h4>
        <span>{{list[4].items[0].subTitle}}</span>
        <img :src="list[4].items[0].image">
      </div>
      <div class="BS-qita">
          <div class="Brand-play">
            <p><b>特价机票</b><i>{{list[4].items[1].titleLabel}}</i></p>
            <span>{{list[4].items[1].subTitle}}</span><i>{{list[4].items[1].minItemPrice}}</i>
          </div>
          <div class="Brand-hotel">
            <h4>特价酒店</h4>
            <span>{{list[4].items[2].subTitle}}</span>
            <p><i>{{list[4].items[2].titleLabel}}</i><em>{{list[4].items[2].minItemPrice}}</em></p>
            <img :src="list[4].items[2].image">
         </div>
     </div>
    </div>
   </div>
</mt-loadmore>
   <v-myhomecenters :test="list"></v-myhomecenters>
</div>
</template>
<script>
import MyHomeCenters from '@/components/HomeCenters'
import Vue from 'vue'
import { Swipe, SwipeItem ,Loadmore} from 'mint-ui'
import axios from 'axios'

Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
  data () {
    return {
      allLoaded: false,
      list     : [],
      listItem : ''
    }
  },
  components: {
    'v-myhomecenters': MyHomeCenters
  },
  methods: {
    loadTop () { //下拉事件请求数据
        axios.get('../static/mode.json')
        .then(res => {
          this.list      = res.data;
          this.listItem  = this.list[2].items;
          this.allLoaded = true;                // 数据请求完毕
          this.$refs.loadmore.onTopLoaded();
          })
    },
    getdata () {
      axios.get('../static/mode.json')
        .then((res) => {
          this.list = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>
 <style lang="scss">
@import '@/lib/reset.scss';

.slideshow{
  @include rect(100%, 1.2rem);
  position: relative;
  .slideshow-top-img{
    @include rect(100%,  1.2rem);
    img{
    @include rect(100%, 100%);
      
    }
  }
  .slideshow-foot-img{
    display : block;
    position: absolute;
    bottom  : -7px;
    img{
     @include rect(100%, auto);
    }
    .slideshow-mt{
     @include rect(100%, 100%);
      .slideshow-mts{
        @include rect(100%, 100%);
      img{
          @include rect(100%, 100%);
        }
      }
    }
  }
  ul{
    @include rect(100%, 100%);
    li{
       @include rect(100%, 100%);
       img{
         @include rect(100%, 100%);
       }
    }
  }
  .home-kind{
    @include rect(100%, auto);
    @include background-color(rgb(255, 254, 254));
    font-size: .12rem;
    .home-kind-ul{
      @include flexbox();
      @include flex-wrap(wrap);
      @include rect(100%, auto);
      li{
        @include padding(.05rem);
        @include rect(20%, 50%);
        min-width: 20% ;
        span{
          @include ellipsis(100%,1);
              margin-left : .05rem;
              padding-left: .1rem;
        }
      }
    }
    color: #000000;
  }
  .lvxingboss{
    @include rect(100%, .54rem);
    @include margin(.1rem 0);
    background: url(//gw.alicdn.com/tfs/TB1zn5alxrI8KJjy0FpXXb5hVXa-750-100.png_q75.jpg_.webp)no-repeat;
    @include background-size(auto 100%);
   .lvxingboss-refer{
      @include fullscreen(0px, relative);
      @include rect(100%, .54rem);
      overflow: hidden;
      .lvxingboss-refer-ul{
        position: absolute;
        @include rect(80%, 100%);
        @include flex-direction(column);
        right: 0;
        li{
          @include rect(auto, .54rem);
          display: block;
          div{
            @include rect(70%, 100%);
            span{
              @include display(block);
              @include ellipsis(100%, 1);
              height: .24rem;
              @include margin(.05rem .05rem 0 0);
              i{
                border: 1px solid red;
                color : red;
                @include margin(.01rem .01rem 0 .01rem);
              }
            }
          }
          img{
              position: absolute;
              top     : .04rem;
              right   : .1rem;
              @include rect(.6rem, .45rem);
              @include gradient(linear,left,#fff,hsla(0,0%,100%,0) 50%);
            }
          }
        }
    }
  }
  .Brand-Sale{
    @include rect(100%, 1.52rem);
    @include background-color(#cccccc);
    @include padding(.05rem 0 .1rem 0);
    .BrandSale{
       @include background-color(#ffffff);
       @include fullscreen( 0, relative);
       .BS-feizhu{
          @include padding(.05rem .05rem .05rem .05rem);
          @include rect(50%, 100%);
          h4{
            color      : red;
            font-weight: 800;
          }
          span{
            @include rect(100%, .3rem);
          }
          img{
            @include rect(100%, .9rem);
          }
       }
       .BS-qita{
         @include rect(50%, 100%);
          border-left: 1px solid #cccccc;
          position   : absolute;
          right      : 0;
          top        : 0;
          .Brand-play{
            @include padding(.03rem 0 .03rem .03rem );
            @include display(block);
            border-bottom: 1px solid #cccccc;
            @include rect(100%, .45rem);
            b{
              color        : blue;
              padding-right: .15rem;
            }
            i{
               padding-right: .15rem;
            }
          }
       }
       .Brand-hotel{
          @include rect(1rem, 100%);
          @include padding(.1rem .03rem .03rem .03rem);
          @include fullscreen( 0, relative);
          h4{
            color: red;
          }
          p{
            i{
              @include rect(1.2rem, 100%);
              @include padding(0 .1rem 0 0);
              display      : block;
              color        : red;
              text-overflow: ellipsis;
              }
            em{
              color : red;
              border: 1px solid red;
            }
          }
          img{
            @include rect(66%, .8rem);
            margin  : 0.05rem;
            position: absolute;
            right   : -.6rem;
            top     : 0.08rem;
          }
       }
    }
  }

}
</style>
