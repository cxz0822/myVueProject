import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header/header'
import Content from '../components/content'
import Footer from '../components/footer/footer'
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
          component:resolve => require(['../components/index/index'],resolve)
        },
        {//�γ�����ҳ
          path:'/courseDetail',
          name:'courseDetail',
          component:resolve => require(['../components/courseDetail/courseDetail'],resolve)
        }
       ]
    }
  ]
})
