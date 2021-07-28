<template>
  <div class="h-without-nav mx-auto container flex">
    <!-- Sidebar -->
    <div class="h-16 w-96"></div>

    <!-- Main Content -->
    <main class="flex-grow w-24">
      <header class="flex justify-between items-center p-2 px-3 my-3">
        <h1 class="text-xl font-medium">Cards</h1>

        <ul class="flex gap-6">
          <li>
            <router-link href="/">Feed</router-link>
          </li>
          <li>
            <a href="/top/week">Week</a>
          </li>
          <li>
            <a data-text="Month" href="/top/month" class="crayons-tabs__item"
              >Month</a
            >
          </li>
          <li>
            <a href="/top/year">Year</a>
          </li>
          <li>
            <a href="/latest">Latest</a>
          </li>
        </ul>
      </header>

      <cards-list></cards-list>
    </main>
    <!--  -->
    <div class="h-16 w-96"></div>
  </div>
</template>

<script>
import CardsList from '@/components/CardsList.vue'
export default {
  name: 'Home',
  components: {
    CardsList,
  },
}
</script>
