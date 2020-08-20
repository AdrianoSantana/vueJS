var vm = new Vue({
  el: '#app',
  data: {
    startGame: true,
    lifePlayer: 100,
    lifeMonster: 100,
    monsterPower: [3, 6, 9, 12, 15],
    playerPower: [2, 4, 6, 8, 10],
    playerSpecialPower: [5, 10, 15, 20, 25],
    healPower: [3, 6, 9, 12, 15],
    historyGame: [],
    endGame: false,
    winGame: false
  },
  computed: {
    lifeBarPlayer () {
      if (this.lifePlayer > 20) {
        return {
          width: (this.lifePlayer * 5) + 'px',
          backgroundColor: 'green'
        }
      } else {
        return {
          width: (this.lifePlayer * 5) + 'px',
          backgroundColor: 'red'
        }
      }
    },
    lifeBarMonster () {
      if (this.lifeMonster > 20) {
        return {
          width: (this.lifeMonster * 5) + 'px',
          backgroundColor: 'green'
        }
      } else {
        return {
          width: (this.lifeMonster * 5) + 'px',
          backgroundColor: 'red'
        }
      }
    }
  },
  methods: {
    attack () {
      this.attackMonster(false)
      this.monsterAttack()
    },
    attackMonster (special) {
      var attackPlayer = 0
      const randomValuePlayer = Math.floor(Math.random() * 5)
      special ? attackPlayer = this.playerSpecialPower[randomValuePlayer] : attackPlayer = this.playerPower[randomValuePlayer]
      this.playerPhrase = special ? this.historyGame.unshift('Player atingiu o monstro com ataque especial ' + attackPlayer) : this.historyGame.unshift('Player atingiu o monstro ' + attackPlayer)
      this.lifeMonster = this.lifeMonster - attackPlayer
    },
    monsterHistory (attackMonsterPower) {
      this.historyGame.unshift('Monstro atingiu jogador com ' + attackMonsterPower)
    },
    monsterAttack () {
      const randomValueMonster = Math.floor(Math.random() * 5)
      const attackMonsterPower = this.monsterPower[randomValueMonster]
      this.lifePlayer = this.lifePlayer - attackMonsterPower
      this.monsterHistory(attackMonsterPower)
    },
    specialAttack () {
      this.attackMonster(true)
      this.monsterAttack()
    },
    heal () {
      const randomValuePlayer = Math.floor(Math.random() * 5)
      const heal = this.healPower[randomValuePlayer]
      this.lifePlayer = this.lifePlayer !== 100 ? this.lifePlayer + heal : 100
      this.historyGame.unshift('Jogador se curou com ' + heal)
      this.monsterAttack()
    },
    newGame () {
      this.startGame = false
      this.historyGame = []
      this.endGame = false
      this.winGame = false
      this.lifePlayer = 100
      this.lifeMonster = 100
    },
    giveUp () {
      this.historyGame.unshift(' Você desistiu! ')
      this.newGame()
    }
  },
  watch: {
    lifePlayer (novo, antigo) {
      if (novo <= 0) {
        this.endGame = true
        this.winGame = false
        this.startGame = true
      }
    },
    lifeMonster (novo, antigo) {
      if (novo <= 0) {
        this.endGame = true
        this.winGame = true
        this.startGame = true
      }
    }
  }
})

vm.$mount('#app')
