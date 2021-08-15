<template>
  <div class="bg-gray-100">
    <base-notifications
      group="app"
      position="center bottom"
      animation-type="velocity"
    ></base-notifications>
    <nav-bar></nav-bar>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import BaseNotifications from './ui/BaseNotifications.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    BaseNotifications,
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
