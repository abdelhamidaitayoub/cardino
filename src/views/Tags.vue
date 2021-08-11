<template>
  <div class="h-without-nav container mx-auto px-20">
    <div class="text-center my-14">
      <h1 class="text-4xl font-bold mb-3">Browse the top 1,500+ tags</h1>
      <p class="text-xl px-80">
        There are over 27,000 tags listed on cardino card. Browse the most
        popular tags.
      </p>
    </div>
    <tags-List :tags="tags" />
  </div>
</template>

<script>
import TagsList from '@/components/TagsList.vue'
import api from '../store/api'

export default {
  name: 'Tags',
  components: {
    TagsList,
  },

  data() {
    return {
      tags: [],
    }
  },

  methods: {
    async getTag() {
      const { data } = await api.get('api/v1/tags')
      this.tags = data.data.tags
    },
  },

  created() {
    this.getTag()
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
