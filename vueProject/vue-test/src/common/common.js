/**
 * Created by admin on 2017/4/25.
 */
/*-------------------����----start-----------*/
const domainName=' ';//������������
/*-------------------����----end-----------*/

/*-------------------��������----start-----------*/
let requestService = function (_vm, getparams) {
  let getParasObj = getparams || {//����Ĭ�ϵĲ���
      type: 'get',
      url: '',
      data: {},
      successCallback: function (successdata) {
      },
      errorCallback: function (response) {
      }
    }
  //����vue-resource����������ʽ
  _vm.$http({
    method: getParasObj.type || 'get',//Ĭ��get
    url: domainName + getParasObj.url,
    params: getParasObj.data || {} //Ĭ��û�в���
  }).then(getParasObj.successCallback, getParasObj.errorCallback);
};
/**
 * ��ȡresponse.ok������
 * @param response
 * @param callback
 */
let getOkData = function (response, callback) {
  if (response.ok && callback) {
    callback(response.body);
  }
}
/*-----------------;--��������----end-----------*/
/*-------------------����----start-----------*/
/*-------------------����----end-----------*/
/*-------------------����----start-----------*/
/*-------------------����----end-----------*/