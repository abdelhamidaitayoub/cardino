<template>
  <div class="menu">
    <ul class="flex flex-col h-full text-base font-light text-gray-900">
      <router-link class="cursor-pointer" :to="`/${user.username}`">
        <div class="px-4 py-2 hover:bg-blue-50">
          <li>{{ user.name }}</li>
          <li class="text-sm text-gray-500">@{{ user.username }}</li>
        </div>
      </router-link>
      <hr class="w-full" />
      <div class="flex-grow">
        <router-link :to="{ name: 'Dashboard' }">
          <li class="px-4 py-1 hover:bg-blue-50 cursor-pointer">Dashboard</li>
        </router-link>
        <router-link :to="{ name: 'New' }">
          <li class="px-4 py-1 hover:bg-blue-50">Create post</li>
        </router-link>
        <router-link :to="{ name: 'Settings' }">
          <li class="px-4 py-1 hover:bg-blue-50">Settings</li>
        </router-link>
      </div>
      <hr class="w-full" />
      <li class="px-4 py-2 hover:bg-blue-50 cursor-pointer" @click="logout">
        Log out
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    logout() {
      this.$store.commit('CLEAR_USER_DATA')
    },
  },
  computed: {
    user() {
      return this.$store.state.user
    },
  },
}
</script>

<style>
.menu {
  @apply absolute space-y-4 border-r-4 border-b-4 border-t-2 border-l-2  border-gray-700 rounded bg-gray-50;
  z-index: 9999;
  min-width: 14rem;
  bottom: -12.5rem;
  left: -12rem;
}
</style>
