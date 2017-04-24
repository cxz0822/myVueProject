import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})
