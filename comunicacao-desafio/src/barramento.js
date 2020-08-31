import Vue from 'vue'
export default new Vue({
  methods: {
    userSelected (user) {
      this.$emit('userSelected', user)
    },
    listenUser (callback) {
      this.$on('userSelected', callback)
    }
  }
})
