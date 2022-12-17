import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import SignUp from '@/views/SignUp'
import MenuPage from '@/views/MenuPage'
import RestSignUp from '@/views/RestSignUp'
import ExplorePage from '@/views/ExplorePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPage
  },
  {
    path: '/restaurant-sign-up',
    name: 'restsignup',
    component: RestSignUp
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExplorePage
  },
]

const router = new VueRouter({
  routes
})

export default router