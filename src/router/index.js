import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/HomeView';
import SignUp from '@/views/SignUp';
import MenuPage from '@/views/MenuPage';
import RestSignUp from '@/views/RestSignUp';
import ExplorePage from '@/views/ExplorePage';
import OrderPage from '@/views/OrderPage';
import SignInPage from '@/views/SignInPage';
import ProfilePage from '@/views/ProfilePage';
import RestaurantPage from '@/views/RestaurantPage';

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
  {
    path: '/cart',
    name: 'ordercart',
    component: OrderPage
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInPage
  },
  {
    path: '/profile-page',
    name: 'profilepage',
    component: ProfilePage
  },
  {
    path: '/restaurant-page',
    name: 'restaurantpage',
    component: RestaurantPage
  },
]

const router = new VueRouter({
  routes
})

export default router