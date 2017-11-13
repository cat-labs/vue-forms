import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/pages/HelloWorld'
import SimpleForm from '@/components/pages/SimpleForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/simple-form',
      name: 'SimpleForm',
      component: SimpleForm
    }
  ]
})
