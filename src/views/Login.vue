<template>
  <div class="h-without-nav pt-36">
    <div
      class="
        flex flex-col
        gap-3
        max-w-lg
        mx-auto
        px-8
        py-7
        rounded
        bg-gray-50
        border-2 border-gray-700
        relative
        shadow-lg
      "
    >
      <button class="px-9 py-3 bg-gray-900 text-gray-50 rounded">
        Contenue with github
      </button>
      <hr class="w-24 self-center" />
      <input
        class="
          py-2
          px-3
          w-full
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
        placeholder="Email"
      />
      <input
        class="
          py-2
          px-3
          w-full
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
        placeholder="Password"
      />
      <label for="rememberMe">
        <input type="checkbox" id="rememberMe" />
        Remember Me
      </label>

      <button class="px-9 py-3 bg-blue-500 text-gray-50 rounded">Login</button>

      <router-link
        class="self-center text-blue-500"
        :to="{ name: 'ForgetPassword' }"
        >I forgot my password</router-link
      >
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style>
.h-without-nav {
  min-height: calc(100vh - 64px);
}
</style>
