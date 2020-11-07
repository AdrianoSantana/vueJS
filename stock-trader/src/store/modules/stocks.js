import stocksData from '../../data/stocks'

export default {
  state: {
    stocks: [],
    message: null
  },
  mutations: {
    setStocks (state, payload) {
      state.stocks = payload
    },
    changeMessage (state, payload) {
      state.message = payload
      setTimeout(function () {
        state.message = null
      }, 2000)
    }
  },
  actions: {
    buyStock ({ commit }, order, context) {
      commit('buyStock', order)
    },
    initStocks ({ commit }) {
      commit('setStocks', stocksData)
    },
    changeMessage ({ commit }, payload) {
      commit('changeMessage', payload)
    }
  },
  getters: {
    getStocks (state) {
      return state.stocks
    },
    getMessage (state) {
      return state.message
    }
  }
}
