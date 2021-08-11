<template>
  <nav class="w-100 bg-gray-50">
    <div class="container mx-auto">
      <div class="flex justify-between py-3 mx-40">
        <div class="flex gap-6">
          <router-link :to="{ name: 'Home' }">
            <svg
              class="w-11 h-11 shadow-sm"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="text-gray-900 rounded-lg fill-current"
                d="M92 0H0v92h92V0z"
              />
              <path
                d="M40.446 73.315H9.774a.735.735 0 00-.735.735v8.154c0 .406.33.735.735.735h30.672a.735.735 0 00.735-.735V74.05a.735.735 0 00-.735-.735z"
                fill="#fff"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.189 10.851v6.508a1.558 1.558 0 01-1.566 1.557H21.605a1.558 1.558 0 00-1.558 1.558v32.18a1.265 1.265 0 001.266 1.266h18.603a1.265 1.265 0 011.272 1.272v7.092a1.265 1.265 0 01-1.272 1.266H10.305a1.266 1.266 0 01-1.266-1.266V10.851a1.558 1.558 0 011.558-1.558H39.63a1.558 1.558 0 011.558 1.558z"
                fill="#fff"
              />
              <path
                d="M82.219 8.912H51.554a.735.735 0 00-.735.735V17.8c0 .406.329.735.735.735h30.665a.735.735 0 00.735-.735V9.647a.735.735 0 00-.735-.735z"
                fill="#fff"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M70.395 37.998h-7.01a1.559 1.559 0 00-1.558 1.558v32.337a1.556 1.556 0 001.558 1.565h7.01a1.558 1.558 0 001.558-1.566V39.556a1.557 1.557 0 00-1.558-1.558zM82.96 49.321V29.955a1.557 1.557 0 00-1.558-1.557H52.376a1.557 1.557 0 00-1.557 1.557v51.568a1.557 1.557 0 001.557 1.557h29.027a1.557 1.557 0 001.557-1.557V49.32z"
                fill="#fff"
              />
            </svg>
          </router-link>
          <input
            class="
              px-3
              py-2
              text-sm text-gray-900
              placeholder-gray-500 placeholder-opacity-75
              border-2 border-gray-300
              rounded
              w-72
              focus:outline-none
              focus:border-blue-500
              focus:shadow-md
            "
            type="text"
            placeholder="Search..."
          />
        </div>

        <div v-if="authenticated" class="flex gap-6 font-medium">
          <!-- When a user is logged in -->
          <div
            class="relative"
            @mouseleave="menuOpen = false"
            @mouseover="menuOpen = true"
          >
            <img
              class="w-9 border-r-2 border-b-2 border-t border-l rounded"
              :src="user.photo"
              alt="avatar image"
            />
            <Menu v-if="menuOpen"></Menu>
          </div>
        </div>
        <div v-else class="flex gap-6 font-medium">
          <router-link
            class="self-center text-blue-500"
            :to="{ name: 'Login' }"
          >
            Login</router-link
          >
          <router-link
            class="bg-blue-500 rounded px-9 text-gray-50"
            :to="{ name: 'Signup' }"
            tag="button"
          >
            Signup</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'NavBar',
  components: {
    Menu,
    // BeakerIcon,
  },
  data: () => {
    return {
      menuOpen: false,
    }
  },
  computed: {
    authenticated() {
      return this.$store.getters.authenticated
    },
    user() {
      return this.$store.getters.user
    },
  },
}
</script>

<style></style>
