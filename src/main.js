import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'
import InfiniteLoading from 'vue-infinite-loading'
import './validations'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

// Globally registeration components

Vue.use(mavonEditor)
Vue.use(Notifications, { velocity })
Vue.use(InfiniteLoading)
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
