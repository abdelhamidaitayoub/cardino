<template>
  <div>
    <div class="flex flex-col space-y-4">
      <Card v-for="card in cards" :key="card._id" :card="card"></Card>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import api from '../store/api'
export default {
  name: 'CardsList',
  components: {
    Card,
  },
  data() {
    return {
      cards: [],
      page: 1,
    }
  },
  methods: {
    infiniteHandler($state) {
      api
        .get('api/v1/cards', {
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
  },
}
</script>

<style></style>
