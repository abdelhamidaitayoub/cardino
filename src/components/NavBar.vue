<template>
  <nav class="w-100 bg-gray-50">
    <div class="container flex justify-between mx-auto py-3">
      <div class="flex gap-6">
        <router-link :to="{ name: 'Home' }"
          ><img
            class="w-10 rounded-sm"
            :src="require('@/assets/images/default_logo.svg')"
            alt="logo"
        /></router-link>
        <input
          class="
            py-2
            px-3
            w-72
            text-sm
            focus:outline-none
            focus:border-blue-500
            focus:shadow-md
            border-2 border-gray-300
            rounded
            placeholder-gray-500 placeholder-opacity-75
            text-gray-900
          "
          type="text"
          placeholder="Search..."
        />
      </div>

      <div v-if="true" class="flex gap-6 font-medium">
        <router-link class="text-blue-500 self-center" :to="{ name: 'Login' }">
          Login</router-link
        >
        <router-link
          class="px-9 bg-blue-500 text-gray-50 rounded"
          :to="{ name: 'Signup' }"
          tag="button"
        >
          Register</router-link
        >
      </div>
      <div v-else class="flex gap-6 font-medium">
        <!-- When a user is logged in -->
      </div>
    </div>
  </nav>
</template>

<script>
// import logo from './../assets/images/cardino-svg.svg'
export default {}
</script>

<style></style>
