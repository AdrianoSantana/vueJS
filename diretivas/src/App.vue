<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-destaque="cor"> Diretiva personalizada </p>
		<p v-destaque:fundo.atrasar.upper="cor"> Diretiva personalizada </p>
		<p v-destaque-local:fundo.atrasar.alternar="cor"> Destaque local </p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			cor: 'lightgreen'
		}
	},
	directives: {
		'destaque-local': {
			bind (el, binding) {
				const aplicarCor = (cor) => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}
				const Upper = () => {
					el.style.fontSize = '100px'
				}

				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1

				let atraso = 0
				if (binding.modifiers.atrasar) atraso = 3000

				setTimeout(() => {
					if (binding.modifiers.alternar) {
						setInterval(() => {
						corAtual = corAtual === cor1 ? cor2 : cor1
						aplicarCor(corAtual)
					}, 1000)
					} else {
						aplicarCor(binding.value)
					}
					if (binding.modifiers.upper) Upper()
				}, atraso)
			}
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
