import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Memos from './views/Memos.vue'
import MemoForm from './views/MemoForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/memos',
      name: 'memos',
      component: Memos
    },
    {
      path: '/memos/:memo_id?/edit',
      name: 'memo_edit',
      component: MemoForm
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
