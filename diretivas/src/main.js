import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
  bind (el, binding) {
    let atraso = 0
    if (binding.modifiers.atrasar) atraso = 3000
    // Se o modificador atrasar for passado após 3 segundos
    // ele irá aplicar as alterações.
    setTimeout(() => {
      if (binding.arg === 'fundo') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
			}
			if (binding.modifiers.upper) el.style.fontSize = '100px'
    }, atraso)
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
