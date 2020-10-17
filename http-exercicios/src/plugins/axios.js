import Vue from 'vue'
import axios from 'axios'

// Definindo url base
// axios.defaults.baseURL = 'https://curso-vue-88742.firebaseio.com/'

Vue.use({
  install (Vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-88742.firebaseio.com/'
    })

    Vue.prototype.$http.interceptors.response.use(res => {
      var array = []
      for (var chave in res.data) {
        array.push({ id: chave, ...res.data[chave] })
      }
      res.data = array
      return res
    })
  }
})
