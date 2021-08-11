<template>
  <div class="h-without-nav container mx-auto">
    <base-card
      class="flex mt-7 px-8 py-7 mx-40"
      style="border-top: 20px solid #000"
    >
      <div class="flex space-x-4">
        <!-- <img
          class="w-16 self-start"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--e4kQ9nis--/c_limit,f_auto,fl_progressive,q_80,w_64/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/16/js-badge.png"
          alt="badge image"
        /> -->

        <div>
          <h1 class="text-gray-900 font-bold text-2xl mb-4">#{{ tagname }}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            minus magnam et. Necessitatibus, ad nesciunt? Impedit possimus ipsam
            iure culpa aliquid. Tempora dicta consequuntur totam fugiat
            cupiditate doloribus sint porro? Quos expedita nisi cumque
            exercitationem error nihil iure! Officia quo sapiente perspiciatis
            quasi praesentium corrupti aspernatur error rerum temporibus vitae
            consequuntur architecto fugit exercitationem, modi quidem voluptates
            commodi ullam a.
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
