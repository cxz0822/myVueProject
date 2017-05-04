import './common/common.less'
import Vue from 'vue'
import Resource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'
/**--ElementUI按需加载- start-*/
Vue.use(Resource);
Vue.use(Element);
/**--ElementUI按需加载- end-*/

import App from './App'
import router from './router'
Vue.config.productionTip = false;

//vue初始化配置
Vue.config.devtools = true //配置是否允许 vue-devtools 检查代码。
Vue.config.productionTip = false //false关闭生产模式下给出的提示


/* eslint-disable no-new */
const app=new Vue({
  name:'root',
  router,
  render: h => h(App)
});
app.$mount('#app');
