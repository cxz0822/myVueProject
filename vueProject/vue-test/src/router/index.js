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
      children:[//����ͷβ��
        {//��ҳ
          path:'/home',
          name:'index',
          component:resolve => require(['../pages/index/index'],resolve)
        },
        {//�γ�����ҳ
          path:'/courseDetail',
          name:'courseDetail',
          component:resolve => require(['../pages/courseDetail/courseDetail'],resolve)
        }
       ]
    }
  ]
})
