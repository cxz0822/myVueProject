<template>
<el-dialog size="loginrelated" :close-on-click-modal="false" :show-close="true" v-model="visibleLogin" v-if="visibleLogin">
  <login v-if="showTip=='login'"></login>

</el-dialog>

</template>
<!--登录注册忘记密码相关样式 登录根class='el-dialog--loginrelated'-->
<style rel="stylesheet/less" lang="less">
  @import "loginrelated.less";
</style>
<script type="text/ecmascript-6">
  import login from './login'
  export default{
    name: 'loginrelated',
    props: ['showTxt', 'goLoginRelated'],
    data(){
      return {
        showTip: this.showTxt,
        visibleLogin: this.goLoginRelated
      }
    },
    components: {
      login
    },
    watch: {
      showTxt(val){
        this.showTip = val;
      },
      goLoginRelated(val){//将监听到的组件外传入的数据赋值给组件内数据   goLoginRelated与visibleLogin实现了组件内外的双向绑定
        this.visibleLogin = val;
      },
      visibleLogin(val){//将监听到的组件内的数据赋值给组件外的数据
        this.$emit('loginclose',val,this.showTip);
      }
    },
    methods: {
      getCurrent(data){
        this.showTip = data;
      }
    }
  }
</script>

