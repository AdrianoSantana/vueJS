<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
 computed: {
    quantidade : {
        get () {
            return this.$store.state.parametros.quantidade
        },
        set (novaQuantidade) {
            this.$store.commit('setQuantidade', novaQuantidade)
        }
    },
    preco : {
        get () {
            return this.$store.state.parametros.preco
        },
        set (novoPreco) {
            this.$store.commit('setPreco', novoPreco)
        }
    }
 }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
