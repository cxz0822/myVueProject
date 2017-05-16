/**
 * Created by admin on 2017/4/25.
 */
/*-------------------常量----start-----------*/
const domainName='';//代理服务器中间件所需要的请求前缀 todo 打包生产环境时要设为 '/'
//正则表达式常量
const REGNICKNAME=/^(\w|-|([\u4e00-\u9fa5])){4,20}$/;//用户昵称
const REGPHONE=/^1[3578]\d{9}$/;//手机号
const REGEMAIL=/^([.\w-])+@([\w-])+(\.[\w-])+/;//邮箱
/*-------------------常量----end-----------*/

/*-------------------公共函数----start-----------*/
let requestService = function (_vm, getparams) {
  let getParasObj = getparams || {//这是默认的参数
      type: 'get',
      url: '',
      data: {},
      successCallback: function (successdata) {
      },
      errorCallback: function (response) {
      }
    };
  //这是vue-resource的数据请求方式
  _vm.$http({
    method: getParasObj.type || 'get',//默认get
    url: domainName + getParasObj.url,
    params: getParasObj.data || {} //默认没有参数
  }).then(getParasObj.successCallback, getParasObj.errorCallback);
};
/**
 * 获取response.ok的数据
 * @param response
 * @param callback
 * @param _vm ：this
 */
let getOkData = function (response, callback,vm) {
/*  if (response.ok && callback) {
    var bodyData=response.body;
    if(!bodyData.success && bodyData.resultObject=='needLogin'){
      if(vm){
        /!*openLoginRelated(vm,'login');*!/
      }
    }
    openLoginRelated(vm,'login');
    if(callback){
      callback(bodyData);
    }
  }*/
  if(response.ok){
    var bodyData=response.body;
    callback(bodyData);
    /*openLoginRelated(vm,'login');*/
  }
};
/**
 * 打开弹框
 * @param thisvm:this
 * @param target: 'login':登录  'register' : 注册  ‘pwback’：密码找回
 */
let openLoginRelated=function(thisvm,target){
  thisvm.$root.goLoginRelated=true;
  thisvm.$root.showTxt=target;
};
/**
 * 关闭弹框
 * @param thisvm this
 * @param target 'login':登录  'register' : 注册  ‘pwback’：密码找回
 */
let closeLoginRelated=function(thisvm,target){
  thisvm.$root.goLoginRelated=false;
  thisvm.$root.showTxt=target;
};

/*-----------------;--公共函数----end-----------*/
//导出
export{
  domainName,
  REGNICKNAME,
  REGPHONE,
  REGEMAIL,
  requestService,
  getOkData,
  openLoginRelated,
  closeLoginRelated
  }
