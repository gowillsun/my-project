import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SayHi from '@/components/SayHi'
import IfAndFor from '@/components/IfAndFor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sayhi',
      name: 'SayHi',
      component: SayHi
    },
    {
      path: '/ifandfor',
      name: 'IfAndFor',
      component: IfAndFor
    }
  ]
})
