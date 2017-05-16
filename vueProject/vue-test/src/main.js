import './common/common.less'
import Vue from 'vue'
import Resource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery'
/**--ElementUI按需加载- start-*/
Vue.use(Resource);
Vue.use(Element);
/*Vue.prototype.$loading=Loading.service;*/
/*Vue.prototype.$msgbox=MessagBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message*/
/**--ElementUI按需加载- end-*/

import App from './App'
import router from './router'
Vue.config.productionTip = false;

//vue初始化配置
Vue.config.devtools = true //配置是否允许 vue-devtools 检查代码。
Vue.config.productionTip = false //false关闭生产模式下给出的提示

//vue-resource全局配置
Vue.http.options.emulateJSON = true//允许服务器支持restful风格的接口
Vue.http.options.emulateHTTP = true//允许post传递json格式的参数请求

/* eslint-disable no-new */
const app=new Vue({
  name:'root',
  data: {//根数据
    goLoginRelated: false,
    showTxt: '',
    globalLogin:false//记录是否登录了
  },
  router,
  render: h => h(App)
});
app.$mount('#app');
