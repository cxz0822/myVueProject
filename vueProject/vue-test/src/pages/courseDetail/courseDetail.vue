<template>
  <div class="courseDetail">
    <div class="courseDetail-breadcurmb">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>课程详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="courseDetail-primaryBody">
      <div class="courseDetail-topInfo clearfix">
        <img
          src="https://attachment-center.boxuegu.com/data/picture/online/2017/03/30/10/87de733c4f784f95b95da40585a93dae.jpg"
          alt="" class="left"/>

        <div class="right">
          <h2 class="course-name">【微信小程序】从基础到实战</h2>

          <p class="course-brief">
            超级设计师在线就业班，主要讲解的是UI视觉设计的方法，思路，及流程。
            具体内容有，色彩理论，造型结构，用户研究，平台规范，移动端UI设计等。
          </p>

          <div class="course-otherInfo">
            <span>主讲：萌萌、鹏鹏等</span><i>|</i>
            <span>学习时长：20小时</span><i>|</i>
            <span>学习人数：3245人已学习</span><i>|</i>
            <span>有效期：永久有效</span>
          </div>
          <div class="course-price">
            <span class="currentPrice"><i>￥</i>499.00</span>
            <del class="originPrice"><i>￥</i>2000.00</del>
          </div>
          <div class="course-operateBtn">
            <div class="purchase">立即购买</div>
            <div class="freeLearning">免费试学</div>
          </div>
        </div>
      </div>
      <div class="courseDetail-bottomInfo clearfix">
        <div class="left">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="课程详情" name="first">课程详情</el-tab-pane>
            <el-tab-pane label="课程大纲" name="second">课程大纲</el-tab-pane>
            <el-tab-pane label="授课老师" name="third">授课老师</el-tab-pane>
            <el-tab-pane label="常见问题" name="fourth">常见问题</el-tab-pane>
            <el-tab-pane label="学员评价" name="fifth">学员评价</el-tab-pane>
          </el-tabs>
        </div>
        <div class="right">
          <div class="right-box">
            <div class="title">博学谷云课堂</div>
            <div class="content">
              博学谷是传智播客旗下的在线教育平台。整合线下优质课程和纯熟的教学经验，开展在线教育，突破空间、地域、时间、费用的限制，让优质教育资源平等化。
            </div>
          </div>
          <div class="right-box">
            <div class="title">加群沟通</div>
            <div class="content">
              <p class="grandName">超级设计就业班</p>

              <p class="QQNumber">593319431</p>
            </div>
          </div>
          <div class="right-box">
            <div class="title">推荐课程</div>
            <div class="content">
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {requestService,getOkData} from '../../common/common.js'
  export default {
    name: 'courseDetail',
    data()
  {
    return {
      courseDetail: "",
      activeName: 'first'
    }
  }
  ,
  mounted()
  {
    this.$http.jsonp('https://www.boxuegu.com/course/getCourseById?courserId=279', {
      courserId: 279
    }, {
      jsonp: 'callback'
    }).then(function (res) {
      console.log(res);
      this.myData = res;
    }, function () {

    });
  }
  ,
  methods:{
    handleClick(tab, event)
    {
      console.log(tab, event);
    }
  }
  }
</script>

<style rel="stylesheet/less" lang='less'>
  @import "courseDetail.less";

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
