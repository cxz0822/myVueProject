import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
/**--ElementUI按需加载- start-*/
Vue.use(Element);

/**--ElementUI按需加载- end-*/
import Header from '../src/components/header/header'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
const app=new Vue({
  el: '#app',
  router,
  render: h => h(Header)
});
app.$mount('#app');
