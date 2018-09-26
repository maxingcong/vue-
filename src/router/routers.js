// 这里引入暴露的模块
import HomeHeader from '@/components/HomeHeader'
import HomeCenter from '@/components/HomeCenter'
// import MyFoot from '@/components/MyFoot'
import User from '@/components/User'
import UserLogin from '@/components/UserLogin'
import Router from '@/components/Route'
import Care from '@/components/Care'
import Pocket from '@/components/Pocket'
import RedPkage from '@/components/RedPkage'
import Refer from '@/components/Refer'
import Subtotal from '@/components/Subtotal'

// 并定义路由

const routes = [
  {path: '/',
    redirect: '/home'
  },
  {path: '/subtotal',
    components: {
      center: Subtotal
    }
  },
  {path: '/home',
    components: {
      header: HomeHeader,
      center: HomeCenter
    }
  },
  {path: '/route', // 我的行程
    components: {
      center: Router
    }
  },
  {path: '/care', // 我的订单// 我的购物车
    components: {
      center: Care
    }
  },
  {path: '/Pocket', // 我的收藏
    components: {
      header: HomeHeader,
      center: Pocket
    }
  },
  {path: '/redpkage', // 红包
    components: {
      header: HomeHeader,
      center: RedPkage
    }
  },
  {path: '/refer/:id', // 详情页
    components: {
      center: Refer
    }
  },
  {path: '/user',
    components: {
      uesercente: User
    }
  },
  {path: '/UserLogi',
    components: {
      uesercente: UserLogin
    }
  }
]
export default routes
