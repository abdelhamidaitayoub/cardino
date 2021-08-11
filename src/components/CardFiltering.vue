<template>
  <header class="flex justify-between items-center px-3 my-3">
    <h1 class="text-xl font-medium">Cards</h1>

    <ul class="flex gap-2">
      <li
        class="
          hover:bg-white
          hover:text-blue-500
          hover:border hover:border-b-2 hover:border-blue-500
          rounded
          px-3
          py-2
        "
      >
        <router-link to="/" tag="div">Feed</router-link>
      </li>
      <li
        class="
          hover:bg-white
          hover:text-blue-500
          hover:border hover:border-b-2 hover:border-blue-500
          rounded
          px-3
          py-2
        "
      >
        <router-link to="/top/week" tag="div">Week</router-link>
      </li>
      <li
        class="
          hover:bg-white
          hover:text-blue-500
          hover:border hover:border-b-2 hover:border-blue-500
          rounded
          px-3
          py-2
        "
      >
        <router-link to="/top/month" tag="div">Month</router-link>
      </li>
      <li
        class="
          hover:bg-white
          hover:text-blue-500
          hover:border hover:border-b-2 hover:border-blue-500
          rounded
          px-3
          py-2
        "
      >
        <router-link to="/top/year" tag="div">Year</router-link>
      </li>
      <li
        class="
          hover:bg-white
          hover:text-blue-500
          hover:border hover:border-b-2 hover:border-blue-500
          rounded
          px-3
          py-2
        "
      >
        <router-link to="/latest" tag="div">Latest</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-active {
  @apply border-b-2 border-blue-500;
}
</style>
