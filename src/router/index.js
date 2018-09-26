import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

// 创建路由
const router = new Router({// 利用vue路由组件
  routes
})
export default router
// 暴露路由在入口文件处引入main.js
