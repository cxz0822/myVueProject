import Vue from 'vue'
import Router from 'vue-router'
import Header from '../pages/header/header'
import Content from '../pages/content'
import Footer from '../pages/footer/footer'
Vue.use(Router);

export default new Router({
  mode:'hash',
  base:'/',
  routes: [
    {
      path: '/',
      name: 'default',
      components: {
        header:Header,
        content:Content,
        footer:Footer
      },
      children:[//包含头尾的
        {//首页
          path:'/home',
          name:'index',
          component:resolve => require(['../pages/index/index'],resolve)
        },
        {//课程详情页
          path:'/courseDetail',
          name:'courseDetail',
          component:resolve => require(['../pages/courseDetail/courseDetail'],resolve)
        }
       ]
    },
    {//不含头部和尾部的
      path:'/loginAndRegister',
      name:'loginAndRegister',
      components:{
        content:resolve=>require(['../pages/loginAndRegister/loginAndRegister'],resolve)
      }
    }
  ]
})
