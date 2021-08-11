<template>
  <div class="h-without-nav container mx-auto">
    <base-card
      class="flex mt-7 px-8 py-7 mx-40"
      :style="`border-top: 20px solid ${tag.bgColor || '#000'}`"
    >
      <div class="flex space-x-4">
        <div>
          <h1 class="text-gray-900 font-bold text-2xl mb-4">#{{ tagname }}</h1>
          <p>
            {{ tag.description }}
          </p>
        </div>
      </div>
    </base-card>

    <div class="flex mt-6">
      <div class="h-16 w-96"></div>
      <main class="flex-grow w-24">
        <card-filtering></card-filtering>
        <div>
          <div class="flex flex-col space-y-4">
            <Card v-for="card in cards" :key="card._id" :card="card"></Card>
          </div>
          <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </div>
      </main>
      <div class="h-16 w-96"></div>
    </div>
  </div>
</template>

<script>
import CardFiltering from '@/components/CardFiltering.vue'
import Card from '@/components/Card.vue'
import api from '../store/api'
import BaseCard from '../ui/BaseCard.vue'
export default {
  name: 'TagDetails',
  props: ['tagname'],
  components: {
    CardFiltering,
    Card,
    BaseCard,
  },
  data() {
    return {
      cards: [],
      tag: {},
      page: 1,
    }
  },

  methods: {
    infiniteHandler($state) {
      api
        .get(`/api/v1/tags/${this.tagname}/cards`, {
          params: {
            page: this.page,
            limit: 20,
          },
        })
        .then(({ data }) => {
          if (data.result) {
            this.page += 1
            this.cards.push(...data.data.cards)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
    },
    async getTag() {
      const { data } = await api.get('api/v1/tags', {
        params: {
          name: this.tagname,
        },
      })
      this.tag = data.data.tags[0]
    },
  },

  created() {
    this.getTag()
  },

  metaInfo() {
    return {
      title: this.tagname,
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style></style>
