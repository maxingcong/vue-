<template>
     <div class="usermain">
        <div class="usertop">
           <span @click="reverse">×</span>
           <span class="longoing">注册</span>
           <span @click="getlogin">协议</span>
        </div>
        <div class="usercentr">
            <form>
                <input type="tel" placeholder="请输入电话号码"  v-model='tel'>
                <mt-field class="mint-cell" v-model='code'>
                   <span class="send" @click='sendConds'>发送验证码</span>
                </mt-field>
                <input type="password" placeholder="请输入密码" v-model="password">
                <mt-button size="large" @click='check'>注册</mt-button>
           </form>
        </div>
        <div class="userfoot">
           <span>其他登录</span>
           <div class="Other-login">
               <li>
                   <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png">
                   <p>点击退出</p>
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
            code     : '',
            password : '123456',
            adminCode: '',
            flag     : true,
            conts    : 61
        }
      },
      methods:{
          reverse () {//返回
              this.$router.go(-1);
          },
          getlogin () { //阅读协议
              Toast({
                message : '协议太长,不用读了',
                position: 'bottom',
                duration: 2000
            });
          },
          sendConds () {// 倒计时
             console.log(this.flag);
               if(this.flag){
                                 this.flag = false;
                             let sendCodes = document.getElementsByClassName('send')[0];
                             let sendTimes = setInterval(()=>{
                        if(this.conts > 0){
                                this.conts--;
                                sendCodes.innerHTML = '倒计时'+this.conts
                        }else{
                            clearInterval(sendTimes);
                            this.flag           = true;
                            this.conts          = 61;
                            sendCodes.innerHTML = '重新发送验证码'
                    }     
                },1000);
             }else{
                console.log(this.flag);
            }
          },
          sendCode () {// 注册  获取验证码    
             const str = "^1(3|4|5|6|7|8|9)\\d{9}$"
             if (this.tel.match(str)) {
                 axios.get('http://www.daxunxun.com/users/sendCode?tel='+this.tel)
                  .then(res => {
                      if (res.data == 1) {
						Toast({
						  message : '改手机号已存在，请直接登录',
						  position: 'bottom',
						  duration: 2000
						});
					} else if (res.data == 0) {
						Toast({
						  message : '获取验证码失败',
						  position: 'bottom',
						  duration: 2000
						});
					} else {
						this.adminCode = res.data.code
					}
                  })
                 .catch(err => console.log(err))
            } else {
                Toast({
                    message : '号码输入错误',
                    position: 'bottom',
                    duration: 2000
                    });
            }
          },
          check () { //注册
             const str = "^1(3|4|5|6|7|8|9)\\d{9}$";
             if (this.tel.match(str)) { //合法的电话号码
                  if (this.code != '') {
                      if(this.password != ''){
                              this.getaxios ();
                      }else{
                           Toast({
                            message : '密码不能为空',
                            position: 'bottom',
                            duration: 2000
                            });
                      }

                  } else {
                    Toast({
                    message : '验证码不能为空',
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
         getaxios () { //注册
              axios.post('http://www.daxunxun.com/users/register', {
				username: this.tel,
				password: this.password
			}).then(res => {
				if (res.data == 2) {
					Toast({
					  message : '用户已注册，请直接登录',
					  position: 'bottom',
					  duration: 2000
					});
				} else if (res.data == 0) {
					Toast({
					  message : '注册失败',
					  position: 'bottom',
					  duration: 2000
					});
				} else {
					this.$router.push('/user');
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
