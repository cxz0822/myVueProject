<template>
<div class="loginAndRegister-component">
  <div class="loginAndRegister-wrap">
    <div class="title">
      <em></em><router-link to="/home"><img src="../../assets/images/loginRegister/logo.png" alt=""/></router-link><em></em>
    </div>
    <div class="loginAndRegister-changeTab">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">登录</span>
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item prop="username">
              <el-input size="middleinput" type="text" v-model="loginForm.username" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input size="middleinput" type="password" v-model="loginForm.password" placeholder="请输入6-16位密码"></el-input>
            </el-form-item>
            <div class="dialog-footer">
              <el-button type="primary" size="middlebtn" @click="loginSubmitForm('loginForm')">登录</el-button>
              <p class="foot-p clearfix">
                <span  class="foot-link"></span>
                <span  class="foot-link fright">忘记密码？</span>
              </p>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <el-form :model="registerForm" :rules="rules" ref="registerForm">
            <el-form-item prop="nickname">
              <el-input size="middleinput" v-model="registerForm.nickname" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="username">
              <el-input size="middleinput" type="text" v-model="registerForm.username" placeholder="请输入手机号或邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="messageCode" class="messageCode">
              <el-input size="smallinput" type="text" placeholder="图形验证码"></el-input>
              <img  class="codeBtn" src="" alt="获取图形码"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-input size="middleinput" type="password" v-model="registerForm.password" placeholder="请输入6-16位密码"></el-input>
            </el-form-item>
            <div class="dialog-footer">
              <el-button type="primary" size="middlebtn" @click="loginSubmitForm('loginForm')">注册</el-button>
              <p class="foot-p clearfix">
                <span  class="foot-link"></span>
                <span  class="foot-link fright">忘记密码？</span>
              </p>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  import {REGPHONE,requestService,getOkData,closeLoginRelatd} from '../../common/common'
    export default {
        name: 'loginAndRegister',
      data(){
      return{
        loginForm:{
          username:'',
          password:''
        },
        registerForm:{
          nickname:'',
          username:'',
          password:''
        },
        rules:{
          username:[
            {required:true,message:'请输入手机号',trigger:'blur'},
            {pattern:REGPHONE,message:'请输入正确的手机号',trigger:'blur'}
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'blur'},
            {min:6,max:20,message:'长度为6到20个字符',trigger:'blur'}
          ]
        }
      };
    },
    methods:{
      goReg(){
        this.$emit('goreg','register');
      },
      goPwback(){
        this.$emit('gopwback','pwback');
      },
      loginSubmitForm(formName){
        this.$refs[formName].validate((valid) => {
          if(valid){
            requestService(this,{
              type:'post',
              url:'/static/indexData.json',
              data:this.loginForm,
              successCallback(response){
              getOkData(response,function(data){
                if(data.success){
                  history.go(0);//刷新当前页面兼容火狐
                }else{
                  this.$message.error(data.errorMessage);
                }
              }.bind(this))
            }
          });
        }else{
          console.log('error submit!!');
          return false;
        }
      })
    }
    }
    }
</script>

<style rel="stylesheet/less" lang="less">
@import "loginrelated.less";
</style>
