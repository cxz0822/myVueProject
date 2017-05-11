<template>
  <div class="login-component">
    <div class="title">欢迎登录&nbsp;&nbsp;博学谷云课堂</div>
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input size="middleinput" type="text" v-model="loginForm.username" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input size="middleinput" type="password" v-model="loginForm.password" placeholder="请输入6-16位密码"></el-input>
      </el-form-item>
      <div class="dialog-footer">
        <el-button type="primary" size="middlebtn" @click="loginSubmitForm('loginForm')">立即登录</el-button>
        <p class="foot-p clearfix">
          <span  class="foot-link"><router-link to="/loginAndRegister">立即注册</router-link></span>
          <span  class="foot-link fright">忘记密码？</span>
        </p>
      </div>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
  import {REGPHONE,requestService,getOkData,closeLoginRelatd} from '../../common/common'
  export default{
    name:'login',
    data(){
      return{
        loginForm:{
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
