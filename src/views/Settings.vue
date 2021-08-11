<template>
  <div class="h-without-nav container px-56 mx-auto">
    <h1 class="text-4xl font-semibold my-6">
      Settings for
      <span class="text-blue-600">@{{ $store.state.user.username }}</span>
    </h1>
    <div class="flex space-x-3">
      <ul class="flex flex-col w-1/4">
        <router-link
          class="
            hover:bg-gray-50
            group
            px-10
            py-2
            text-lg text-gray-800
            cursor-pointer
          "
          :to="{ name: 'UserProfile' }"
          tag="li"
        >
          <span class="group-hover:text-blue-600">Profile</span>
        </router-link>
        <router-link
          class="
            hover:bg-gray-50
            group
            px-10
            py-2
            text-lg text-gray-800
            cursor-pointer
          "
          :to="{ name: 'UpdatePassword' }"
          tag="li"
        >
          <span class="group-hover:text-blue-600">Update Password</span>
        </router-link>
        <router-link
          class="
            hover:bg-gray-50
            group
            px-10
            py-2
            text-lg text-gray-800
            cursor-pointer
          "
          :to="{ name: 'UserBasic' }"
          tag="li"
        >
          <span class="group-hover:text-blue-600">Basic</span>
        </router-link>
        <router-link
          class="
            hover:bg-gray-50
            group
            px-10
            py-2
            text-lg text-gray-800
            cursor-pointer
          "
          :to="{ name: 'UserWork' }"
          tag="li"
        >
          <span class="group-hover:text-blue-600">Work</span>
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
  @apply bg-gray-50;
}
</style>
