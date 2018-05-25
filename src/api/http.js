/**
 * Created by cycold@qq.com on 2017-07-28.
 */

// import qs from "querystring"
import Vue from "vue";
import axios from "axios";
import config from "../config";
import { Message, Loading } from "element-ui";

// https://github.com/rstacruz/nprogress
import "nprogress/nprogress.css"
import NProgress from "nprogress"

const printErrorInfo = info => {
  return Message({
    type: "error",
    message: info || "请求出错,请稍后再试!"
  });
};

NProgress.configure({ showSpinner: false });

// https://github.com/mzabriskie/axios
const http = axios.create({
  timeout: config.pro ? 1000 * 40 : 1000 * 20,
  headers: { "X-Requested-With": "XMLHttpRequest" }
});

function _h(verb) {
  return function(restPath, params, loading, last) {
    http.defaults.headers['X-Authorization'] = "Bearer "+localStorage.token
    // setting loading
    if (loading !== false) {
      // loading = Loading.service({
      //   target: document.querySelector("#page-router-view"),
      //   text: "加载中..."
      // });
      loading = NProgress
      loading.start()
    }

    // error 如果不为空(null) 表示网络出错 data表示服务端返回的数据
    let result = {
      error: null,
      data: {}
    };

    let _restPath = config.api + restPath;
    let _params = params || {};
    let _loginurl='/userlogin'
    if(localStorage.loginurl){
      _loginurl=localStorage.loginurl
    }else if(location.href.indexOf('/admin')>0){
      _loginurl='/admin/login'
    }

    return http[verb](_restPath, _params)
      .then(response => {
        // close loading
        // loading && loading.close();
        loading && loading.done();
      // api拦截
      if (response.data && response.data.errorCode == 'INVALID_Token') {
        if (Vue.$router && Vue.$router.push) {
          Vue.$router.push(_loginurl)
        } else {
          window.location.href = _loginurl
        }
        // return Promise.reject({
        //   code: 401,
        //   message: "登录超时,请重新登录!"
        // })
      }

       // api拦截 登录超时
      if (restPath != "/login" && response.data && (response.data.errorCode == 'INVALID_USER'||response.data.errorCode == 'Expired_Token')) {
        if (Vue.$router && Vue.$router.push) {
          Vue.$router.push(_loginurl)
        } else {
          window.location.href = _loginurl
        }
        localStorage.clear()
        return Promise.reject({
          code: 401,
          message: "登录超时,请重新登录!"
        })
      }
        // 服务器正常响应 error 为空
        result.error = null;
        result.data = response.data;
        return Promise.resolve(result);
      })
      .catch(error => {
        // close loading
        // loading && loading.close();
        loading && loading.done();
        console.log("请求出错: ");
        console.dir(error);
        result.error = error || new Error("请求出错,请检查网络!");
        result.data = {};

        // 网络问题
        if (error && ~error.message.indexOf("Network Error")) {
          // 没有网络 离线
          // 打印出错信息
          printErrorInfo("请求出错,请检查网络连接!");
          return Promise.resolve(result);
        }

        // 终止请求 请求超时
        if (error && error.code == "ECONNABORTED") {
          if (~error.message.indexOf("timeout")) {
            printErrorInfo("请求超时,请稍后再试!");
            return Promise.resolve(result);
          } else {
            // 其他原因
            // 打印出错信息
            printErrorInfo("请求出错,请稍后再试!");
            return Promise.resolve(result);
          }
        }

        // 服务器返回状态码超过2xx
        if (error && error.response) {
          // 打印出错信息
          printErrorInfo(
            error.response.status + ": " + error.response.statusText ||
              "请求出错,请稍后再试!"
          );
          return Promise.resolve(result);
        }

        // 用户验证失败
        if (error && error.code == 401) {
          // 打印出错信息
          printErrorInfo("401: " + error.message);
          return Promise.resolve(result);
        }

        // 其他错误
        printErrorInfo("请求出错,请稍后再试!!");
        return Promise.resolve(result);
      });
  };
}

export default {
  get: _h("get"),
  post: _h("post")
};
