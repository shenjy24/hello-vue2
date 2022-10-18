export const moduleCounter = {
  namespaced: true,

  state: {
    count: 0
  },

  mutations: {
    setCount(state, count) {
      state.count = count
    }
  },

  actions: {
    setCountAction({commit}, count) {
      commit("setCount", count)
    }
  }
}

