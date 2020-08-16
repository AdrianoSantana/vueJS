new Vue({
	el: '#desafio',
	data: {
    classe1: 'null',
    classeEscolhida: 'exemplo',
    classeEscolhida2: '',
    escolha: true,
    largura: 10
	},
	methods: {
		iniciarEfeito() {
      this.classe1 = 'destaque'
      setInterval(()  => {
        this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
      }, 1000)
		},
		iniciarProgresso() {
      setInterval(() => {
        this.largura = this.largura >= 1510 ? 0 : this.largura + 30 
      }, 1000)
    },
    setMyValue(event) {
      console.log(event.target.value)
      if (event.target.value == "true") {
        this.escolha = true
      }
      else if(event.target.value == "false") {
        this.escolha = false
      }
      console.log('escolha: ', this.escolha)
    }
  },
  computed: {
    progressBar() {
      if (this.largura >= 1024 ) {
        return {
          width: this.largura + 'px',
          height: '20px',
          backgroundColor: 'green',
        }
      } else {
        return {
          width: this.largura + 'px',
          height: '20px',
          backgroundColor: 'red',
        }
      }
    }
  }
})
