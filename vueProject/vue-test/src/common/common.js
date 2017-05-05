/**
 * Created by admin on 2017/4/25.
 */
/*-------------------常量----start-----------*/
const domainName='';//代理服务器中间件所需要的请求前缀 todo 打包生产环境时要设为 '/'/*/recruitment-web/*/
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
let getOkData = function (response, callback) {
  if (response.ok && callback) {
    callback(response.body);
  }
}
/*-----------------;--公共函数----end-----------*/
//导出
export{
  domainName,
  requestService,
  getOkData
  }
