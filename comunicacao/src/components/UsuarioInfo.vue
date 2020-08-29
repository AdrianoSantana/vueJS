<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ usuario }}</strong></p>
        <p>Nome do usuário invertido: <strong>{{ inverterNome() }}</strong></p>
        <button @click="anonimoNome">Não divulgar nome</button>
    </div>
</template>

<script>
export default {
    props: {
        usuario: {
            type: String,
            required: true
        }
    },
    methods: {
        inverterNome() {
            return this.usuario.split('').reverse().join('')
        },
        anonimoNome() {
            this.usuario = 'Anônimo'
            this.$emit('navegacaoAnonima', this.usuario)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
