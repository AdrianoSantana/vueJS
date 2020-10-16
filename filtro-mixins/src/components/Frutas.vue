<template>
  <div>
    <ul>
      <li v-for="(fruta, index) in frutas" :key="index"> {{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="addFruta">
  </div>
</template>

<script>
import frutasMixin from '../frutasMixin'

export default {
  mixins: [frutasMixin]
}

</script>

<style>

</style>