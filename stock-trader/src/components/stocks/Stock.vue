<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="black darken-3 white--text">
      <v-card-title class="headline">
        <strong> {{ stock.name }} <small>(Preço: {{ stock.price }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" min=0 max=20 v-model.number="quantity"></v-text-field>
        <v-btn 
          class="black darken-3 white--text" 
          @click="buyStock()"
          :disabled="quantity == 0 || !Number.isInteger(quantity)"
        > Comprar </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0,
    }
  },
  methods: {
    buyStock() {
      var funds = this.$store.getters.funds
      if (funds >= this.quantity * this.stock.price) {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.$store.dispatch('buyStock', order)
        this.quantity = 0
      } else {
        this.quantity = 0
        this.$store.commit('changeMessage', 'Você não possui saldo suficiente para realizar esta ação!')
      }
      
    }
  }
}
</script>

<style>

</style>