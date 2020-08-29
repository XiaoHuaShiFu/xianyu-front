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
