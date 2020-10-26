<template>
  <div class="abc">
        <h1> 404 --- Página não encontrada</h1>
        <router-link to="/" tag="button">
          Início
        </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .abc{
    display: flex;
    height: 900px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: 5px solid lightblue;
  }
</style>