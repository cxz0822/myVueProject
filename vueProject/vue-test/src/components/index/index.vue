<template>
    <div class="indexComponents">
        <div class="carousel">
            <el-carousel trigger="click" height="340px" arrow="never">
                <el-carousel-item v-for="item in bannerList">
                    <a :href="item.imgHref" target="_blank"><img :src="item.imgPath" alt=""/></a>
                </el-carousel-item>
                </el-carousel-item>
            </el-carousel>
            <div class="subjectLists-wrap">
                <ul class="subjectLists">
                    <li v-for="item in courseList">
                        <div class="courseList-nav"><span>{{item.name}}</span><i class="el-icon-arrow-right"></i></div>
                        <div class="subjectLists-childrenBox">
                            <div class="course-classification">
                                <h2>基础职业课</h2>

                                <div class="course-classification-items">
                                    <img src="web/images/defaultvideo.png" alt=""/>

                                    <div class="shadow">
                                        <a href="" class="onlineStudy" target="_blank">在线学习</a>
                                        <a href="http://www.itheima.com" class="unlineStudy"
                                           target="_blank">线下学习</a>
                                    </div>
                                </div>
                            </div>
                            <div class="course-classification">
                                <h2>微专业</h2>

                                <div class="course-classification-items">
                                    <img src="web/images/defaultvideo.png" alt=""/>
                                </div>
                            </div>
                            <div class="micro-class">
                                <div class="micro-class-nav clearfix">
                                    <h2>微课堂</h2>
                                    <a href="" class="moreCourse">更多</a>
                                </div>
                                <div class="micro-class-category-box">
                                    <ul class="mirco-class-category clearfix">
                                        <li>HTML/CSS</li>
                                        <li>Javascript</li>
                                    </ul>
                                    <div class="mirco-class-category-items clearfix">
                                        <div class="mirco-class-category-items-list">
                                            <img src="web/images/defaultvideo.png" alt=""/>
                                            <span>JavaScript网页游戏开发实战班</span>
                                        </div>
                                        <div class="mirco-class-category-items-list">
                                            <img src="web/images/defaultvideo.png" alt=""/>
                                            <span>JavaScript网页游戏开发实战班</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="subject-entery clearfix">
                    <a href="" class="subject-entery-items">
                        <div class="subject-entery-items-boxes clearfix">
                            <img src="" alt=""/>

                            <div class="subject-info">
                                <h2>asfasdfasdfasdfasdf</h2>

                                <p>asdfasdfasdfasdfasdf</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="mainContent">
            <div class="public-class-live  clearfix">
                <div class="public-class-live-title picScroll-left clearfix">
                    <h2>热门公开直播课</h2>
                    <div class="public-class-live-wrap">
                        <div class="picScroll-left slide-box">
                            <a id="left" class="next"><i class="el-icon-arrow-left"></i></a>
                            <a id="right" class="prev"><i class="el-icon-arrow-right"></i></a>
                            <div class="bd">
                                <ul class="public-class-live-content boxContent clearfix">
                                    <li v-for="$value in openCourseList">
                                        <a href="javascript:;">
                                            <div class="img">
                                                <img :src="$value.smallimg_path">
                                            </div>
                                            <div class="public-class-live-detail">
                                                <div class="detailCourseInfo clearfix">
                                                    <div class="detailCourseName" :title="$value.courseName">
                                                        {{$value.courseName}}
                                                    </div>
                                                    <div class="detailTeacher">讲师：{{$value.teacherName}}</div>
                                                </div>
                                                <div class="detailLiveInfo clearfix">
                                                    <div class="detailLiveDate">开始时间：{{$value.formatStartTime}}</div>
                                                    <div class="detailLiving zhiboStart">
                                                        <span class="enter-livingClass" :href="$value.external_links"
                                                              target="_blank">进入教室</span>
                                                        <img src="../../assets/images/index/zhibo.gif" alt=""/>
                                                        <span class="living">直播中</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lastest-news clearfix">
                    <div class="news-left">
                        <h2>博学谷新闻</h2>
                        <img src="../../assets/images/index/news.png" alt=""/>
                    </div>
                    <div class="news-right">
                        <div class="newsTitle">
                            <p class="biaoti">资讯公告</p>
                        </div>
                        <ul class="newsList">
                            <li v-for="item in lastestInfo">
                                <a :class="{hotNews :item.is_hot}" :href="item.href_adress" target="_blank"
                                   :title="item.name">
                                    <em :class="{hotNewsEm:item.is_hot}"></em>{{item.name}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="weiKetang">
                <div class="weiKetang-nav">
                    <h2>微课堂</h2>
                    <ul class="weiKetang-nav-list clearfix">
                        <li v-for="(item,index) in courseList" v-on:click="microClassNav()" :class="{active:!index}">{{item.name}}</li>
                    </ul>
                    <div class="weiKetang-courseList  content clearfix">
                        <a v-for="$value in mircoCourseList" class="course clearfix" href="#/courseDetail">
                            <div class="img"> <img :src="$value.smallImgPath" alt=""/></div>
                            <div class="detail">
                                <p class="title" :title="$value.gradeName">
                                    {{$value.gradeName}}</p>

                                <p class="timeAndTeac">
                                    <span>{{$value.courseLength}}</span><i>|</i>
                                    <span>讲师：<span class="teacher">{{$value.name}}</span></span>
                                </p>

                                <p class="info clearfix">
                                        <span>
                                            <span class="pricefree" v-if=$value.free>免费</span>
                                    <span v-else=!$value.free>
                                    <i>￥</i><span class="price">{{$value.currentPrice}}</span>
                                    <del><i class="price1">￥</i>{{$value.originalCost}}</del>
                                    </span>
                                    </span>
                                            <span class="stuCount"><img src="../../assets/images/index/studentCount.png" alt=""/>
                                                <span class="studentCou">{{$value.learnd_count}}</span>
                                            </span>
                                </p>
                            </div>
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="indexFooter">
            <div class="indexFooter-wrap">
                <div class="indexFooter-left">
                    <h2>博学谷云课堂</h2>

                    <p>
                        博学谷云课堂，是传智播客旗下的在线教育品牌。专注整合传智优势教学资源、打造适合在线学习并能保证教学结果的优质教学产品，同时打造和运营一整套教育生态软件体系，为用户提供满足自身成长和发展要求的有效服务。</p>
                </div>
                <div class="indexFooter-middle">
                    <h2>关注我们</h2>

                    <div class="aboutUs">
                        <div class="aboutUs-weiBo">
                            <img src="../../assets/images/footer/weibo.png" alt=""/>

                            <div class="aboutUs-weiBo-hover">
                                <img src="../../assets/images/footer/weiboImg.png" alt=""/>

                                <p>关注博学谷新浪微博获取更多行业即时资讯</p>
                                <img class="indexSanjiao" src="../../assets/images/footer/index03.png" alt=""/>
                            </div>
                        </div>
                        <div class="aboutUs-weiXin">
                            <img src="../../assets/images/footer/weixin.png" alt=""/>

                            <div class="aboutUs-weiXin-hover">
                                <img src="../../assets/images/footer/weixinImg.png" alt=""/>

                                <p>关注博学谷微信公众号每日获取最新学习资料</p>
                                <img class="indexSanjiao" src="../../assets/images/footer/index03.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="indexFooter-right">
                    <div class="firendLink">
                        <h2>友情链接</h2>

                        <div class="firendLink-div">
                            <a href="http://www.itcast.cn" target="_blank">传智播客</a>
                            <a href="http://bbs.itcast.cn" target="_blank">传智播客论坛</a>
                            <a href="http://bbs.itheima.com/forum.php" target="_blank">黑马程序员论坛</a>
                            <a href="http://open.itcast.cn" target="_blank">传智播客公开课</a>
                            <a href="http://yx.boxuegu.com/" target="_blank">传智教材资源下载</a>
                            <a href="http://www.csdn.net" target="_blank">CSDN</a>
                            <a href="http://www.itheima.com" target="_blank">黑马程序员</a>
                            <a href="http://yun.itcast.cn" target="_blank">传智云课堂</a>
                            <a href="http://up.boxuegu.com" target="_blank">逆袭</a>
                            <a href="http://dvd.boxuegu.com" target="_blank">博学谷视频库</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import '../../lib/jquery.SuperSlide.2.1.1.js'
    import {requestService} from '../../common/common.js'
    export default {
        name: 'index',
        data(){
            return {
                bannerList: '',
                courseList: '',
                openCourseList: '',
                lastestInfo: '',
                mircoCourseList: ''
            }
        },
        mounted: function () {
            this.getCourseLists();
/*           jQuery(".public-class-live-wrap .slide-box").slide({mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:false,vis:2,scroll:1});*/
        },
        methods: {
            getCourseLists: function () {
                this.$http({
                    method: 'GET',
                    url: 'static/indexData.json'
                }).then(function (response) {
                    var data = response.bodyText;
                    data = JSON.parse(data)
                    this.bannerList = data.getBannerList
                    this.courseList = data.getCourseList
                    this.openCourseList = data.getOpenCourse
                    this.lastestInfo = data.getLastestInfo
                    this.mircoCourseList = data.getMicroClassList
                }, function (error) {

                })
            },
            microClassNav:function(){
                $(".weiKetang-nav-list li").click(function(){
                    $(this).addClass("active").siblings().removeClass("active");
                })
            }
        }
    }
</script>

<style  rel="stylesheet" lang="less">
    @import "index.less";

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
