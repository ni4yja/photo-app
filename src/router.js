import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collections from '@/views/Collections.vue'
import Topics from './views/Topics.vue'
import Stats from './views/Stats.vue'

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
      path: '/collections',
      name: 'collections',
      component: Collections
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    },
    {
      path: '/stats',
      name: 'stats',
      component: Stats
    }
  ]
})