<template>
  <div class="usuario-editar">
    <h3>Usuário editar</h3>
    <p><strong> {{ $route.query.completo ? 'Sim' : 'Não '}}</strong></p>
    <p><strong> {{ $route.query.lingua}}</strong></p>
    <hr>
    <button primario @click="confirmar = true"> Salvar </button>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data: function() {
      return {
        confirmar: false
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.confirmar === false) {
        confirm('Você não salvou suas informações. Tem certeza que deseja sair ?') ? next() : next(false)
      } else {
        next()
      }
    }
}
</script>

<style>
  #rodape {
    margin-top: 1000px;
  }
</style>