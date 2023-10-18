import  App  from '@/App.vue'
let baseUrl = (function () {
  // 请求根路径
  let urlStr = App.globalData.baseUrl;
  if (process.env.NODE_ENV === 'development') {
    console.log('开发环境')
	  urlStr = 'http://koudai.develop.idushenghuo.com/';
  } else {
    urlStr = 'http://koudai.develop.idushenghuo.com/';
  }
  return urlStr
})()
export function getBaseUrl(){
  return baseUrl;
}
class Request {
  http(param) {
    // console.log(param)
    // 请求参数
    let url = param.url;
    let method = param.method;
    let header = param.header || {};
    let data = Object.assign(param.data || {});
    let hideLoading = param.hideLoading || false;
    //拼接完整请求地址
    let requestUrl = baseUrl + url;
    if (method) {
      method = method.toUpperCase(); //小写改为大写
      if (method == "FORMDATA") {
        header = Object.assign({
          'content-type': "application/x-www-form-urlencoded"
        }, param.header, {
          Token: uni.getStorageSync("token")
        })
      } else {
        header = Object.assign({
          'content-type': "application/json"
        }, param.header, {
          Token: uni.getStorageSync("token")
        })
      }
    }
    //加载圈
    if (!hideLoading) {
      uni.showLoading({})
    }
    // 返回promise
    return new Promise((resolve, reject) => {
      // 请求
      uni.request({
        url: requestUrl,
        data: data,
        method: method,
        header: header,
        success: (res) => {
          resolve(res.data)
          uni.hideLoading();
        },
        //请求失败
        fail: (err) => {
          reject(err)
        },
        //请求完成
        complete() {
          uni.hideLoading();
        }
      })
    })
  }
}

/**
 * @description
 * @param url url
 * @param data 请求的参数
 * @param hideLoading 加载圈
 */
let request = new Request().http
export function get(url, data, hideLoading) {
  return request({
    url: url,
    method: 'GET',
    data: data
  })
}

export function post(url, data,header, hideLoading) {
  return request({
    url: url,
    method: 'POST',
    data: data,
	header:header,
    hideLoading: hideLoading,
  })
}
export function deleteAction(url, data, hideLoading) {
  return request({
    url: url,
    method: 'delete',
    data: data,
    hideLoading: hideLoading,
  })
}

export function putAction(url, data, hideLoading) {
  return request({
    url: url,
    method: 'put',
    data: data,
    hideLoading: hideLoading,
  })
}