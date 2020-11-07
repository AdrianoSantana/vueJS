export default {
  state: {
    funds: 0,
    stocks: []
  },
  mutations: {
    buyStock (state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId)
      if (record) {
        // Se eu ja tenho uma ação daquela empresa e compro outra apenas adiciona a quantidade
        record.quantity += quantity
      } else {
        // Se eu não possuir a ação dentro de stocks adiciono ele
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      // Atualizando o valor do saldo apos uma compra
      state.funds -= stockPrice * quantity
    },
    sellStock (state, { stockId, quantity, stockPrice }) {
      const record = state.stocks.find(element => element.id === stockId)
      if (record) {
        // Se eu ja tenho uma ação daquela empresa
        // Se eu quero vender uma quantidade menor do que ja possuo
        if (record.quantity > quantity) {
          record.quantity -= quantity
        } else {
          // Vende todas as ações que possui já que a quantidade é maior que a que tem guardada
          state.stocks.splice(state.stocks.indexOf(record), 1)
        }
      } else {
        // Se eu não possuir a ação dentro de stocks adiciono ele
        state.stocks.push({
          id: stockId,
          quantity: quantity
        })
      }
      // Atualizando o valor do saldo apos uma compra
      state.funds += stockPrice * quantity
    },
    insertFunds (state, payload) {
      state.funds += payload
    }
  },
  actions: {
    sellStock ({ commit }, order) {
      commit('sellStock', order)
    },
    insertFunds ({ commit }, payload) {
      commit('insertFunds', payload)
    }
  },
  getters: {
    stockPortfolio (state, getters) {
      return state.stocks.map(stock => {
        const record = getters.getStocks.find(element => element.id === stock.id)
        return {
          id: stock.id,
          quantity: stock.quantity,
          name: record.name,
          price: record.price
        }
      })
    },
    funds (state) {
      return state.funds
    }
  }
}
