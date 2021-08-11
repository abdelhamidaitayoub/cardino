<template>
  <div class="h-without-nav container px-56 mx-auto">
    <h1 class="text-4xl font-semibold my-6">
      Settings for
      <span class="text-blue-600">@{{ $store.state.user.username }}</span>
    </h1>
    <div class="flex space-x-3">
      <ul class="flex flex-col w-1/4">
        <router-link
          class="hover:bg-blue-100 px-10 py-2 text-lg text-gray-800"
          :to="{ name: 'UserProfile' }"
          tag="li"
        >
          Profile
        </router-link>
        <router-link
          class="hover:bg-blue-100 px-10 py-2 text-lg text-gray-800"
          :to="{ name: 'UpdatePassword' }"
          tag="li"
        >
          Update Password
        </router-link>
        <router-link
          class="hover:bg-blue-100 px-10 py-2 text-lg text-gray-800"
          :to="{ name: 'UserBasic' }"
          tag="li"
        >
          Basic
        </router-link>
        <router-link
          class="hover:bg-blue-100 px-10 py-2 text-lg text-gray-800"
          :to="{ name: 'UserWork' }"
          tag="li"
        >
          Work
        </router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Settings',
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style scoped>
.router-link-active {
  @apply bg-blue-100;
}
</style>
