import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import {initIndexedDB} from "@/js";

Vue.config.productionTip = false

Vue.use(ElementUI);

initIndexedDB()
// registerErrorHandler()

Vue.config.errorHandler = (err, vm, info) => {
  console.log(`${err}\nInfo:${info}`)
}

window.onerror = (message, source, line, column, error) => {
  console.log(message)
  console.log(source)
  console.log(line)
  console.log(column)
  console.log(error)
}

window.onunhandledrejection = event => {
  console.log(event)
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
