<template>
  <div class="usuario">
    <h2> Usuários </h2>
    <hr>
    <router-view />
    <button sucesso @click="voltar">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    voltar() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>