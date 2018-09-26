<template>
     <div class="usermain">
        <div class="usertop">
           <span @click="reverse">×</span>
           <span class="longoing">登录</span>
           <span @click="getlogin">注册</span>
        </div>
        <div class="usercentr">
            <form>
                <input type="tel" placeholder="请输入电话号码"  v-model='tel'>
                <input type="password" placeholder="请输入密码" v-model="password">
                <mt-button size="large" @click='check'>登录</mt-button>
           </form>
        </div>
        <div class="userfoot">
           <span>其他登录</span>
           <div class="Other-login" @click="removeLos">
               <li>
                   <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png">
                   <p>淘宝账户</p>
               </li>

           </div>
        </div>
    </div>
</template>
<script>
import { Field, Button ,Toast} from 'mint-ui'
import Vue from 'vue'
import axios from 'axios'
Vue.use(Field)
Vue.use(Button);

export default {
      data(){
        return {
            tel      : '15321976867',
            password : '123456',
            adminCode: ''
        }
      },
      methods:{
          reverse () {//返回
              this.$router.go(-1);
          },
          getlogin () { //点击到注册页面
              this.$router.push('/UserLogi')
          },
          removeLos () {
            if(localStorage.getItem('username')){
                localStorage.removeItem('username')
            }
          },
          check () { //登录
              const str = "^1(3|4|5|6|7|8|9)\\d{9}$"
             if (this.tel.match(str)) { //合法的电话号码
                      if(this.password != ''){
                              this.getaxios();
                      }else{
                           Toast({
                            message : '密码不能为空',
                            position: 'bottom',
                            duration: 2000
                            });
                      }
              }else{
                  Toast({
                    message : '号码输入错误',
                    position: 'bottom',
                    duration: 2000
                    });
              }   
         },
         getaxios () {
              axios.post('http://www.daxunxun.com/users/login', {
				username: this.tel,
				password: this.password
			}).then(res => {
                console.log(res);
				if (res.data == 2) {
					Toast({
					  message : '用户未注册',
					  position: 'bottom',
					  duration: 2000
					});
				} else if (res.data == 0) {
					Toast({
					  message : '失败失败',
					  position: 'bottom',
					  duration: 2000
					});
				} else if (res.data == -1) {
					Toast({
					  message : '密码错误',
					  position: 'bottom',
					  duration: 2000
					});
				} else {
					localStorage.setItem('username', this.tel)
                    this.$router.go(-2);
				}
            })
            .catch(err => console.log(err))   
         }
      }
}

</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.usermain{
   @include rect(100%, 100%);
   background: url('../assets/dlbj.png');
   .usertop{
      @include rect(100%, 0.55rem);
      @include flexbox();
      @include justify-content(space-between);
      @include align-items();
      @include padding(0 0.3rem);
      .longoing{
          font-size  : .18rem;
          font-weight: 700;
      }
   }
   .usercentr{
       @include rect(100%, 32%);
       @include margin(.1rem 0 .2rem 0);
       @include padding(0 .1rem 0 .1rem);
       form{
           @include rect(100%, 70%);
            margin-top: .7rem;
           input{
               @include rect(100%, .5rem);
               border       : none;
               border-bottom: 1px solid #cccccc;
               @include background-color(transparent);
               @include padding(0 0 0 .1rem);
               @include font-size(.16rem);
           }
           .mint-cell{
               @include background-color(transparent);
           }
           .mint-button{
               margin-top: .3rem;
           }
       }
   }
   .userfoot{
       @include rect(100%, 100%);
       border-top: 1px solid #cccccc;
       span{
           @include margin(.1rem);
       }
       .Other-login{
           @include flexbox();
           @include justify-content();
           @include align-items();
           list-style: none;
           img{
             @include rect(.4rem, auto);
             padding-left: .1rem;
           }
       }
   }
}

</style>
