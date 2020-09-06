import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '主页',
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/',
    name: 'Start',
    meta: {
      title: '贤鱼',
    },
    component: () => import('../views/Start.vue')
  },
  {
    path: '/my',
    name: 'My',
    meta: {
      title: '我的',
    },
    component: () => import('../views/My.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: '注册',
    },
    component: () => import('../views/Register.vue')
  },
  {
    path: '/message',
    name: 'Message',
    meta: {
      title: '消息',
    },
    component: () => import('../views/Message.vue')
  },
  {
    path: '/idle',
    name: 'Idle',
    meta: {
      title: '发布闲置',
    },
    component: () => import('../views/Idle.vue')
  },
  {
    path: '/user/info',
    name: 'UserInfo',
    meta: {
      title: '用户信息',
    },
    component: () => import('../views/UserInfo.vue')
  },
  {
    path: '/user/info/modify',
    name: 'ModifyUserInfo',
    meta: {
      title: '修改信息',
    },
    component: () => import('../views/ModifyUserInfo.vue')
  },
  {
    path: '/user/home',
    name: 'UserHome',
    meta: {
      title: '用户页面',
    },
    component: () => import('../views/UserHome.vue')
  },
  {
    path: '/user/address',
    name: 'UserAddress',
    meta: {
      title: '收货地址',
    },
    component: () => import('../views/Address.vue')
  },
  {
    path: '/user/address/edit',
    name: 'UserAddressEdit',
    meta: {
      title: '地址编辑',
    },
    component: () => import('../views/AddressEdit.vue')
  },
  {
    path: '/user/sellinxianyu',
    name: 'SellInXianyu',
    meta: {
      title: '卖在贤鱼',
    },
    component: () => import('../views/SellInXianyu.vue')
  },
  {
    path: '/user/buyinxianyu',
    name: 'BuyInXianyu',
    meta: {
      title: '买在贤鱼',
    },
    component: () => import('../views/BuyInXianyu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


/**
 * 给页面加上标题
 */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})


export default router
