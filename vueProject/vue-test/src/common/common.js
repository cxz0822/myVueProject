/**
 * Created by admin on 2017/4/25.
 */
/*-------------------����----start-----------*/
const domainName='https://www.boxuegu.com/';//������������
/*-------------------����----end-----------*/

/*-------------------��������----start-----------*/
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
/*-------------------��������----end-----------*/
/*-------------------����----start-----------*/
/*-------------------����----end-----------*/
/*-------------------����----start-----------*/
/*-------------------����----end-----------*/