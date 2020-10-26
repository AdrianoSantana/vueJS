import Vue from 'vue'
import Router from 'vue-router'

// Importando nossos componentes
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import Menu from './components/template/Menu'
import NotFound from './components/notFound/NotFound'

// Dizendo pro vue usar o Router
Vue.use(Router)

// Criando nossas rotas
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // component: Inicio
      components: {
        default: Inicio,
        menu: Menu
      }
    },
    {
      path: '/usuario',
      //component: Usuario,
      components: {
        default: Usuario,
        menu: Menu
      },
      props: true,
      children: [
        {
          path: '',
          component: UsuarioLista,
          beforeEnter: (to, from, next) => {
            console.log('Antes da tela de usuário')
            next()
          }
        },
        { path: '/usuario/:id', component: UsuarioDetalhe, props: true },
        { path: '/usuario/:id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
      ]
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('Antes das rotas -> Global')
  next()
})

export default router
