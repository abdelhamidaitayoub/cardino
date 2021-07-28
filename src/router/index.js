import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Tags from '../views/Tags.vue'
import Tag from '../views/Tag.vue'
import Profil from '../views/Profil.vue'
import New from '../views/New.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags,
  },
  {
    path: '/t/:tagname',
    name: 'Tag',
    component: Tag,
  },
  {
    path: '/:username',
    name: 'Profil',
    component: Profil,
  },
  {
    path: '/new',
    name: 'New',
    component: New,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
