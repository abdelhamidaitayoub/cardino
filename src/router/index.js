import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Tags from '../views/Tags.vue'
import TagDetails from '../views/TagDetails.vue'
import Profile from '../views/Profile.vue'
import New from '../views/New.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import NotFound from '../views/NotFound.vue'
import CardDetails from '../views/CardDetails.vue'
import ForgetPassword from '../views/ForgetPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import UserProfile from '../components/UserProfile.vue'
import UserWork from '../components/UserWork.vue'
import UserBasic from '../components/UserBasic.vue'
import UpdatePassword from '../components/UpdatePassword.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Faq from '../views/Faq.vue'

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
    name: 'TagDetails',
    component: TagDetails,
    props: true,
  },
  {
    path: '/new',
    name: 'New',
    component: New,
    meta: { requiresAuth: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq,
    meta: { requiresAuth: true },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true },
    redirect: { name: 'UserProfile' },
    children: [
      { path: '', component: UserProfile },
      {
        name: 'UserProfile',
        path: 'profile',
        component: UserProfile,
        meta: { requiresAuth: true },
      },
      {
        name: 'UpdatePassword',
        path: 'updatePassword',
        component: UpdatePassword,
        meta: { requiresAuth: true },
      },
      {
        name: 'UserWork',
        path: 'work',
        component: UserWork,
        meta: { requiresAuth: true },
      },
      {
        name: 'UserBasic',
        path: 'basic',
        component: UserBasic,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/forgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/resetPassword/:token',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/:username',
    name: 'Profile',
    component: Profile,
    props: true,
  },
  {
    path: '/:username/:slug',
    name: 'CardDetails',
    component: CardDetails,
    props: true,
  },
  {
    path: '"/*"',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const user = localStorage.user
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!user) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  const user = localStorage.user
  if ((to.name === 'Login', to.name === 'Signup') && user) {
    next({ name: 'Home' })
  } else next()
})

export default router
