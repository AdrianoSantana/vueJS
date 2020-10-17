<template>
  <div class="task">
    <input type="text" placeholder="Inserir tarefa" v-model="task" @keydown.enter="addTask">
    <button @click="addTask">+</button>
  </div>
</template>

<script>
import Barramento from './Barramento.vue'

export default {
  data() {
    return {
      task: null,
    }
  },
  methods: {
    addTask() {
      Barramento.$emit('NewTask', this.task)
      this.task = null
    }
  },
}
</script>

<style scoped>

</style>