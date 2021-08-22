<template>
  <div class="bg-gray-100 relative">
    <base-notifications
      group="app"
      position="center bottom"
      animation-type="velocity"
    ></base-notifications>
    <nav-bar></nav-bar>

    <floating-button
      v-if="authenticated && tagModerator"
      class="fixed right-10"
    />

    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BaseNotifications from './ui/BaseNotifications.vue'
import FloatingButton from './components/FloatingButton.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    BaseNotifications,
    FloatingButton,
  },

  computed: {
    tagModerator() {
      return this.$store.getters.tagModerator
    },
    authenticated() {
      return this.$store.getters.authenticated
    },
  },

  created() {
    const userData = localStorage.user
    const token = localStorage.token
    if (userData && token) {
      const userObj = {}
      userObj.token = token
      userObj.data = {}
      userObj.data.user = JSON.parse(userData)
      this.$store.commit('SET_USER_DATA', userObj)
    }
  },
}
</script>
<style lang="scss">
.h-without-nav {
  min-height: calc(100vh - 64px);
}
</style>
