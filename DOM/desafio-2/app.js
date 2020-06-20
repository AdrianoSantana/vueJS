new Vue({
    el: '#desafio',
    data: {
        valor: '',
    },
    methods: {
        alertar() {
            alert('Easy business!');
        },
        recuperaValor(event) {
            this.valor = event.target.value;
        }
    }
})