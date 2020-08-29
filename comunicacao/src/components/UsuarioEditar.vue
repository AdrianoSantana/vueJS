<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <input type="number" :value="myValue" @input="myValue = $event.target.value;">
        <button @click="alterarIdade">Alterar idade</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myValue: null
        }
    },
    methods: {
        alterarIdade() {
            this.$emit('idadeAlterada', this.myValue)
            this.myValue = null
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
