<template>
  <div id="app">
    <h1> Filtro & mixins </h1>
    <hr>
    <p> {{ cpf | Mascaracpf  }}</p>
    <input type="text" v-model="cpfAluno">
    <p> {{ cpfAluno }}</p>
    <hr>
    <frutas></frutas>
    <hr>
    <div>
      <ul>
        <li v-for="(fruta, index) in frutas" :key="index"> {{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="addFruta">
    </div>
  </div>
</template>

<script>

import frutas from './components/Frutas'
import frutasMixin from './frutasMixin'

export default {
  components: { frutas },
  mixins: [frutasMixin],
  filters: {
    Mascaracpf(valor) {
      const arr = valor.split('')
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    }
  },
  data() {
    return {
      cpf: '10718337409',
      cpfAluno: '',
      frutas: ['Abacate']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 40px;
}
</style>
