import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Portfolio from './components/portfolio/Portfolio'
import Stocks from './components/stocks/Stocks'
import NotFound from './components/notFound/NotFound.vue'
import Credit from './components/credit/Credit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '/addCredits', component: Credit },
    { path: '*', component: NotFound }
  ]
})
