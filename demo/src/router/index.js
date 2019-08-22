import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Login from '@/pages/login'
import Management from '@/pages/management'
import Borrow from '@/pages/borrow'
import Recommend from '@/pages/recommend'
import Donation from '@/pages/donation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'management',
          component: Management,
        },
        {
          path: '/management',
          name: 'management',
          redirect: '/home',
        },
        {
          path: '/borrow',
          name: 'borrow',
          component: Borrow,
        },
        {
          path: '/donation',
          name: 'donation',
          component: Donation,
        },
        {
          path: '/recommend',
          name: 'recommend',
          component: Recommend,
        }
      ]
    }
  ]
})
