<template>
  <div class="usuario-detalhe">
    <h3>Usuário detalhe</h3>
    <p><strong>Código:</strong> {{ id }}</p>
    <router-link tag="button" primario 
      :to="{ name: 'editarUsuario', params: { id }, query: {completo: true, lingua:'pt'}}">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter: (to, from, next) => {
      console.log('Dentro do componente usuario detalhes')
      next()
    }

}
</script>

<style>

</style>