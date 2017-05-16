<template>
  <div class="header">
    <div class="header-top">
      <div class="header-top-wrap clearfix">
        <div class="left">传智播客旗下高端在线IT职业教育学习平台</div>
        <div class="right">全国咨询热线：400-618-4000</div>
      </div>
    </div>
    <div class="header-middle">
      <div class="header-middle-bg clearfix">
        <div class="left">
          <a href="#/home"><img src="../../assets/images/index/logo.png" alt=""/><span>黑马程序员线上平台</span></a>
        </div>
        <div class="right">
          <router-link to="">学习中心</router-link>
          <router-link to="">购物车</router-link>
          <div class="loginAndReg" v-if="!$root.globalLogin">
            <span class="login" @click="openLogin">登录</span>
            <span class="separator">|</span>
            <router-link to="/loginAndRegister">注册</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-bottom-wrap clearfix">
        <div class="allSubjects">全部学科</div>
        <ul class="courseType clearfix">
          <li class="active"><a href="#/home">首页</a></li>
          <li>就业课</li>
          <li>
            <div class="microMajor">
              <el-dropdown>
                <span class="el-dropdown-link">微专业<i class="el-icon-caret-bottom el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </li>
          <li>微课堂</li>
          <li>免费课程</li>
          <li>问答精灵</li>
          <li>博学社</li>
          <li>学习社区</li>
        </ul>
        <div class="searchBox">
          <input type="text" placeholder="搜索课程" class="searchInput"/>
          <i class="el-icon-search searchBtn"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {openLoginRelated,requestService,getOkData} from '../../common/common.js'
  export default {
    name: 'header',
    data(){
    return {
      isLogined: false
    }
  },
  methods: {
    openLogin(){
      openLoginRelated(this,'login')
    }
  }
  }
</script>

<style rel="stylesheet/less" lang="less">
  @import "header.less";
</style>
