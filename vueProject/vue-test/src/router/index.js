import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header/header'
import Index from '../components/index/index'
import Footer from '../components/footer/footer'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      components: {
        header:Header,
        index:Index,
        footer:Footer
      }
    }
  ]
})
