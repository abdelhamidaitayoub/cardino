<template>
  <div class="h-without-nav container mx-auto px-20">
    <div class="text-center my-14">
      <h1 class="text-4xl font-bold mb-3">Browse the top 1,500+ tags</h1>
      <p class="text-xl px-80">
        There are over 27,000 tags listed on Hacker Noon stories. Browse the
        most popular tags or search for a particular one here.
      </p>
    </div>
    <tags-List />
  </div>
</template>

<script>
import TagsList from '@/components/TagsList.vue'

export default {
  name: 'Tags',
  components: {
    TagsList,
  },

  metaInfo() {
    return {
      title: 'Tags',
      titleTemplate: '%s - CARRDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style></style>
