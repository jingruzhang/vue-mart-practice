import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        auth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.meta.auth) {
    //需要login
    const token = localStorage.getItem("token")
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        //登录后回跳
        query: {redirect: to.path}
      })
    }
  } else {
    next()
  }
})

export default router;
