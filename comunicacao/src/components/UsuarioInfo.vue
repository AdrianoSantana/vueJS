<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ usuario }}</strong></p>
        <p> Idade do usuário: <strong>{{ idade }}</strong></p>
        <button @click="anonimoNome">Não divulgar nome</button>
        <button @click="anonimoFN">Não divulgar nome (CALLBACK)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        usuario: {
            type: String,
            required: true
        },
        anonimoFN: Function,
        idade: Number
    },
    methods: {
        inverterNome() {
            return this.usuario.split('').reverse().join('')
        },
        anonimoNome() {
            this.usuario = 'Anônimo'
            this.$emit('navegacaoAnonima', this.usuario)
        }
    },
    created() {
        barramento.quandoIdadeMudar(idadeNova => {
            this.idade = idadeNova
        })
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
