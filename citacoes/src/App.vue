<template>
	<div id="app">
		<span>
			<button @click="componenteRenderizar = 'Citacoes'">Exibir Citações</button>
			<button @click="componenteRenderizar = 'Sobre'"> Exibir Sobre </button>
		</span>
		<keep-alive>
			<component :is="componenteRenderizar" />
		</keep-alive>
		<Footer />
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'
import Footer from './components/Footer'

export default {
	components: { Citacoes, Sobre, Footer },
	data () {
        return {
            componenteRenderizar: 'Citacoes'
        }
  }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>