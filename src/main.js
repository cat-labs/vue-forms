// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'basscss/css/basscss.css'
import App from './App'
import router from './router'
import VueForm from '@/components/VueForm'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component('vue-form', VueForm)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
