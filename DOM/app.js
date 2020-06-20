new Vue({
  el: '#desafio',
  data: {
    nome: 'Adriano',
    idade: 23,
    urlIMG: 'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-cat-questions-nationalgeographic_1228126.jpg?w=1280&h=720'
  },
  methods: {
    randomNumberGenerator() {
      return Math.random()
    }
  }

})