import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import {store} from "./store";
import {initIndexedDB, registerErrorHandler} from "@/js";
import Router from "vue-router";

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

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
