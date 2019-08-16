import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import MyWork from './views/MyWork.vue'
import Work from './views/Work.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/mijn-werk/',
      name: 'MyWork',
      component: MyWork
    },
    {
      path: '/mijn-werk/:name',
      name: 'work',
      component: Work,
      props: true
    }
  ]
})
