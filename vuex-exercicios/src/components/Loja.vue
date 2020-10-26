<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade" min=0>
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco" min=0>
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 0,
        }
    },
    methods: {
        ...mapMutations(['adicionarProduto']),
        adicionar () {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            this.adicionarProduto(produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
