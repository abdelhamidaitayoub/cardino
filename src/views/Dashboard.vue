<template>
  <div class="h-without-nav">
    <div class="container mx-auto mt-6">
      <div class="grid grid-cols-4 gap-4 mx-40">
        <h1 class="text-2xl font-medium col-span-full">Dashboard</h1>
        <base-card class="h-28 flex flex-col justify-center bg-gray-700">
          <h2 class="text-2xl font-semibold text-gray-800">0</h2>
          <span class="text-gray-500">Total card reactions</span>
        </base-card>
        <base-card class="h-28 flex flex-col justify-center bg-gray-700">
          <h2 class="text-2xl font-semibold text-gray-800">&lt; 500</h2>
          <span class="text-gray-500">Total card views</span>
        </base-card>
        <base-card class="h-28 flex flex-col justify-center bg-gray-700">
          <h2 class="text-2xl font-semibold text-gray-800">0</h2>
          <span class="text-gray-500">Followers</span>
        </base-card>
        <base-card class="h-28 flex flex-col justify-center bg-gray-700">
          <h2 class="text-2xl font-semibold text-gray-800">0</h2>
          <span class="text-gray-500">Following users</span>
        </base-card>
        <div class="" style="min-height: 70vh">
          <ul class="flex flex-col p-0">
            <router-link
              class="
                hover:bg-gray-50
                group
                px-10
                py-2
                text-lg text-gray-800
                cursor-pointer
                rounded
              "
              :to="{ name: 'DashboardCards' }"
              tag="li"
            >
              <span class="group-hover:text-blue-600">Cards</span>
            </router-link>
            <router-link
              class="
                hover:bg-gray-50
                group
                px-10
                py-2
                text-lg text-gray-800
                cursor-pointer
                rounded
              "
              :to="{ name: 'Settings' }"
              tag="li"
            >
              <span class="group-hover:text-blue-600">Followers</span>
            </router-link>
            <router-link
              class="
                hover:bg-gray-50
                group
                px-10
                py-2
                text-lg text-gray-800
                cursor-pointer
                rounded
              "
              :to="{ name: 'Settings' }"
              tag="li"
            >
              <span class="group-hover:text-blue-600">Following users</span>
            </router-link>
            <router-link
              class="
                hover:bg-gray-50
                group
                px-10
                py-2
                text-lg text-gray-800
                cursor-pointer
                rounded
              "
              :to="{ name: 'Settings' }"
              tag="li"
            >
              <span class="group-hover:text-blue-600">Following tags</span>
            </router-link>
            <router-link
              v-if="tagModerator"
              class="
                hover:bg-gray-50
                group
                px-10
                py-2
                text-lg text-gray-800
                cursor-pointer
                rounded
              "
              to="/superTag"
              tag="li"
            >
              <span class="group-hover:text-blue-600">Super tag</span>
            </router-link>
            <router-link
              v-if="admin"
              class="
                hover:bg-gray-50
                group
                px-10
                py-2
                text-lg text-gray-800
                cursor-pointer
                rounded
              "
              to="/users"
              tag="li"
            >
              <span class="group-hover:text-blue-600">Users</span>
            </router-link>
            <router-link
              class="
                hover:bg-gray-50
                group
                px-10
                py-2
                text-lg text-gray-800
                cursor-pointer
                rounded
              "
              tag="li"
            >
              <span class="group-hover:text-blue-600">Work</span>
            </router-link>
          </ul>
        </div>
        <div class="col-start-2 col-span-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'
export default {
  components: { BaseCard },
  computed: {
    tagModerator() {
      return this.$store.getters.tagModerator
    },
    admin() {
      return this.$store.getters.admin
    },
  },
  metaInfo() {
    return {
      title: 'Dashboard',
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style scoped>
.cards {
  @apply flex flex-col;
}

.card {
  @apply w-full py-3 bg-gray-50 px-4;
}

.router-link-active {
  @apply bg-gray-50 text-blue-600;
}
</style>
>
