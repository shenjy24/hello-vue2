import Vue from "vue"
import Vuex from "vuex"
import { moduleCounter } from "./modules/counter"

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    // 所有要管理的module都列在这里
    counter: moduleCounter
  }
})
