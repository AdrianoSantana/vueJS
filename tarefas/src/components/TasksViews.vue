<template>
  <div>
      <div v-if="myTasks.length >= 1" class="taskViews">
        <div v-for="(task, index) in myTasks" :key="index">
          <div v-if="task.finished" class="task done" @click="changeTaskValue(index)">
            <p>{{ task.name }}</p>
          </div>
          <div v-else class="task pending" @click="changeTaskValue(index)">
            <p>{{ task.name }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        Tudo ok!
      </div>
  </div>
</template>

<script>
import Barramento from './Barramento.vue'
export default {
  data() {
    return {
      myTasks: [],
      tasksFinished: 0
    }
  },
   methods: {
    changeTaskValue(index) {
      this.myTasks[index].finished = !this.myTasks[index].finished
      if (this.myTasks[index].finished == true) {
        this.tasksFinished += 1
      } else {
        this.tasksFinished -= 1
      }
      Barramento.$emit('taskValueChanged', this.tasksFinished)
    },
  },
  watch: {
    myTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.myTasks))
      Barramento.$emit('changedTaskValue', this.myTasks.length)
    }
  },
  created() {
    Barramento.$on('NewTask', (task) => {
        this.myTasks.push({ name: task, finished: false })
    })
  },
}
</script>

<style scoped>
  .taskViews {
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1;
  }
  .task {
    box-sizing: border-box;
    width: 350px;
    height: 100px;
    padding: 30px;
    margin: 40px;
    border-radius: 8px;
    font-size: 2rem;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pending {
    background-color: #c9405a;
    border-left: 12px solid #c9405a;
  }

  .done {
    background-color: #48cf4b;
    border-left: 12px solid #48cf4b;
    text-decoration-line: line-through
  }
</style>