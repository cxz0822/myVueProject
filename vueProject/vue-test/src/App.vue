<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    components: {

    },
    methods: {

    }
  }
</script>
<!--全局、公共样式写在此处 这里没有scoped生成的代码适用于整站的-->
<style rel="stylesheet/less" lang="less">

</style>
