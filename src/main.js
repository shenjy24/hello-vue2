import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import {store} from "./store";
import {initIndexedDB, registerErrorHandler} from "@/js";
import Router from "vue-router";
import axios from 'axios';
import Qs from 'qs';

Vue.config.productionTip = false

Vue.prototype.BASE_API = 'http://localhost:18080/'

// 注册ElementUI
Vue.use(ElementUI);
// 注册路由
Vue.use(Router);
// 初始化IndexedDB库
initIndexedDB()
// 注册异常处理器
registerErrorHandler()

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'
// 添加一个请求拦截器
axios.interceptors.request.use(config => {
      config.headers.languagetype = 'CN';      // 举例，加上一个公共头部
      config.data = Qs.stringify(config.data); // 处理数据，可不写
      return config;
    },
    err => {
      return Promise.reject(err);
    });
//添加一个响应拦截器
axios.interceptors.response.use(res => {
  //在这里对返回的数据进行处理
  console.log(res.data, '网络正常');
  return res.data;
}, err => {
  console.log('网络开了小差！请重试...');
  return Promise.reject(err);
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
