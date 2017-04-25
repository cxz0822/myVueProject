import './common/common.less'
import Vue from 'vue'
import Resource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/**--ElementUI按需加载- start-*/
Vue.use(Element);

/**--ElementUI按需加载- end-*/
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app=new Vue({
  name:'root',
  router,
  render: h => h(App)
});
app.$mount('#app');
