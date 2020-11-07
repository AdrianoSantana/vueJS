<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock=stock />
    <div class="errorMessage">
       {{ message }}
    </div>
  </v-layout>
  
</template>

<script>
  import Stock from './Stock'
  export default {
    components: { Stock },
    computed: {
      stocks() {
        return this.$store.getters.getStocks
      },
      message() {
        return this.$store.getters.getMessage
      }
    }
  }
</script>

<style>
  .errorMessage {
    flex: 1;
    font-size: 30px;

    margin-top: 300px;
    text-align: center;
    width: 10px;
    background-color: #f44336;
    color: white;
  }
</style>