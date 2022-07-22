import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import {initIndexedDB} from "@/js";

Vue.config.productionTip = false

Vue.use(ElementUI);

initIndexedDB()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
