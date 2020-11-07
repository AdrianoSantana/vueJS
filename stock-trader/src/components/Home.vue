<template>
  <div>
    <h1 class="display-3" font-weight-light> Negocie e consulte suas ações</h1>
    <v-sheet color="primary" :elevation="6" class="pa-2">
      <v-icon class="white--text mr-3">info</v-icon>
      <span> Você pode salvar e carregar seus dados</span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1"><strong>Seu saldo:</strong> {{ funds }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>