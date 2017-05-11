<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
    <login-related  :show-txt="$root.showTxt"
                    :go-login-related="$root.goLoginRelated"
                    @loginclose="closeLogin">
    </login-related>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import loginRelated from './pages/loginAndRegister/loginrelated'
  export default {
    name: 'app',
    components: {
      loginRelated
    },
    methods: {
      closeLogin(val,showTip){
        this.$root.showTxt=showTip;
        this.$root.goLoginRelated=val;
  }
    }
  }
</script>
<!--全局、公共样式写在此处 这里没有scoped生成的代码适用于整站的-->
<style rel="stylesheet/less" lang="less">

</style>
