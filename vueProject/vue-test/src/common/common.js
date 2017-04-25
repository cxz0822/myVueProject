/**
 * Created by admin on 2017/4/25.
 */
/*-------------------常量----start-----------*/
const domainName='https://www.boxuegu.com/';//跨域请求域名
/*-------------------常量----end-----------*/

/*-------------------公共函数----start-----------*/
let requestService=function(vm,getparams){
    let getParamsObj=getparams || {
            type:'get',
            url:'',
            data:{},
            successCallback:function(successdata){

            },
            errorCallback:function(response){

            }
        };
    vm.$http.jsonp({
        method:getParamsObj.type || 'get',
        url:domainName +getParamsObj.url,
        params:getParamsObj.data || {}
    }).then(getParamsObj.successCallback,getParamsObj.errorCallback);
};
/*-------------------公共函数----end-----------*/
/*-------------------常量----start-----------*/
/*-------------------常量----end-----------*/
/*-------------------常量----start-----------*/
/*-------------------常量----end-----------*/