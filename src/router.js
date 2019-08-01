import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import MyWork from './views/MyWork.vue'
import Work from './views/Work.vue'
import MediaOne from './views/MediaWeekEen.vue'
import MediaTwo from './views/MediaWeekTwee.vue'
import MediaThree from './views/MediaWeekDrie.vue'
import MediaFour from './views/MediaWeekVier.vue'
import MediaFive from './views/MediaWeekVijf.vue'
import MediaSix from './views/MediaWeekZes.vue'
import MediaSeven from './views/MediaWeekZeven.vue'



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
      path: '/mijn_werk',
      name: 'MyWork',
      component: MyWork
    },
    {
      path: '/mijn_werk/opdracht',
      name: 'work',
      component: Work,
      props: true
    },
    {
      path: '/mijn_werk/week1',
      component: MediaOne
    },
    {
      path: '/mijn_werk/week2',
      component: MediaTwo
    },
    {
      path: '/mijn_werk/week3',
      component: MediaThree
    },
    {
      path: '/mijn_werk/week4',
      component: MediaFour
    },
    {
      path: '/mijn_werk/week5',
      component: MediaFive
    },
    {
      path: '/mijn_werk/week6',
      component: MediaSix
    },
    {
      path: '/mijn_werk/werk7_8',
      component: MediaSeven
    }
  ]
})
