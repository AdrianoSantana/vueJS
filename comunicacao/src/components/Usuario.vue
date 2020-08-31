<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p><Strong> {{ nome }} </Strong></p>
        <button v-if="!nomeAlterado" @click="alterarNome">Alterar nome</button>
        <button v-else @click="nome = 'Adriano';nomeAlterado = false">Resetar nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :usuario="nome"
                @navegacaoAnonima="nome = $event"
                :anonimoFN="navegarAnonimo"
                :idade="idade"
            />
            <app-usuario-editar 
                :idade="idade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Adriano',
            nomeAlterado: false,
            idade: 24
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Ana'
            this.nomeAlterado = true
        },
        navegarAnonimo() {
            this.nome = 'Anônimo'
        },
        alterarIdade($event) {
            this.idade = Number($event)
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
    
    button {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
</style>
