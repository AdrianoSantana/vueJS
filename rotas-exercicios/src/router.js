import Vue from 'vue'
import Router from 'vue-router'

// Importando nossos componentes
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'

// Dizendo pro vue usar o Router
Vue.use(Router)

// Criando nossas rotas
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: '/usuario',
      component: Usuario,
      props: true,
      children: [
        { path: '', component: UsuarioLista },
        { path: '/usuario/:id', component: UsuarioDetalhe, props: true },
        { path: '/usuario/:id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' }
      ]
    }
  ]
})
