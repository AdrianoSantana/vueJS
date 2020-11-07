<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="black darken-3 white--text">
      <v-card-title class="headline">
        <strong> Adicionar crédito </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Valor" type="number" min=0 v-model.number="valor"></v-text-field>
        <v-btn 
          class="black darken-3 white--text" 
          @click="addCredit()"
          :disabled="valor == 0 || !Number.isInteger(valor)"
        > Adicionar </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      valor: 0
    }
  },
  methods: {
    addCredit () {
      this.$store.dispatch('insertFunds', this.valor)
      this.valor = 0
    }
  }
}
</script>

<style>

</style>