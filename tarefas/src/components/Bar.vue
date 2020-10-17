<template>
  <div class="barMain">
    <div v-if="totalTasks > 0">
      <div class="porcentagem">
          <h2>{{ ((nmbrTaskFinished/totalTasks) * 100).toFixed(1) }}%</h2>
      </div>
      <div class="barra">
        <div :style="changeBarValue">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Barramento from './Barramento.vue'
  export default {
    data() {
    return {
      totalTasks: 0,
      nmbrTaskFinished: 0
    }
  },
    created() {
      Barramento.$on('changedTaskValue', (total) => {
        this.totalTasks = total
      })
      Barramento.$on('taskValueChanged', (taskFinished) => {
        this.nmbrTaskFinished = taskFinished
      })
    },
    computed: {
      changeBarValue() {
        return {
          width: ((this.nmbrTaskFinished/this.totalTasks) * 1000) + 'px',
          backgroundColor: 'green'
        }
      }
    }
  }
</script>

<style scoped>
  .barra {
    border-style: solid;
    border-width: 3px;
    border-color: #FFF;
    width: 1000px;
    height: 20px;
    border-radius: 10px;
    display: flex;
  }
  .porcentagem {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .barProgress {
    background-color: green;
  }
  .barMain {
    padding-bottom: 30px;
  }
</style>