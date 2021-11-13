import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import User from '../components/User.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/Login/Register.vue'
import Zhuce from '../components/Login/Zhuce.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Index',
  component: Index,
  meta: {
    title: '本站仅作为学习，无其他用途'
  }
},
{
  path: '/user',
  name: 'User',
  component: User,

  children: [{
      path: 'login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录注册界面'
      },
    },
    {
      path: 'register',
      name: 'Register',
      component: Register,
      meta: {
        title: '登录注册界面'
      },
    },
    {
      path: 'zhuce',
      name: 'Zhuce',
      component: Zhuce
    }
]
}
// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})




export default router
