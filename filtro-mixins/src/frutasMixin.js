export default {
  data () {
    return {
      fruta: '',
      frutas: ['Banana', 'Maça', 'Laranja']
    }
  },
  methods: {
    addFruta () {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  }
}