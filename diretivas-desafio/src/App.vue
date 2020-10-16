<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
		<h2> {{ contador }}</h2>
		<p v-escutando:mouseenter="mouseEnter" style="backgroundColor: lightblue"> Teste mouse event</p>
		<button v-escutando:click="somar"> Clique </button>
	</div>
</template>

<script>
export default {
	data () {
		return {
			contador: 0
		}
	},
	directives: {
		'escutando': {
			bind(el, binding, vnode) {
				const tipo = binding.arg
				const fn = binding.value

				el.addEventListener(tipo, fn)
			}
		}
	},
	methods: {
		somar: function() {
			this.contador += 1
		},
		mouseEnter: function() {
			alert('Mouse event')
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

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
