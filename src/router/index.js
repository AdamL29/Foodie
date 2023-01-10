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
import RestSignInPage from '@/views/RestSignInPage';
import RestView from '@/views/RestView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPage
  },
  {
    path: '/restaurant-sign-up',
    name: 'restSignUp',
    component: RestSignUp
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExplorePage
  },
  {
    path: '/cart',
    name: 'orderCart',
    component: OrderPage
  },
  {
    path: '/sign-in',
    name: 'signIn',
    component: SignInPage
  },
  {
    path: '/profile-page',
    name: 'profilePage',
    component: ProfilePage
  },
  {
    path: '/restaurant-page/:rest.restaurantId',
    name: 'restaurantPage',
    component: RestaurantPage
  },
  {
    path: '/restaurant-sign-in',
    name: 'restSignIn',
    component: RestSignInPage
  },
  {
    path: '/restaurants-list',
    name: 'restaurantList',
    component: RestView
  },
]

const router = new VueRouter({
  routes
})

export default router