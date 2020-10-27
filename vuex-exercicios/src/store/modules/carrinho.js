export default {
  namespaced: true,
  state: {
    produtos: []
  },
  getters: {
    valorTotal (state) {
      return state.produtos.map(produto => produto.quantidade * produto.preco)
        .reduce((total, atual) => total + atual, 0)
    }
  },
  mutations: {
    adicionarProduto (state, payload) {
      state.produtos.push(payload) // payLoad são os dados que vão ser inseridos
    }
  },
  actions: {
    adicionarProdutoAction (context, payload) {
      setTimeout(() => {
        context.commit('adicionarProduto', payload)
      }, 2000)
    }
  }
}