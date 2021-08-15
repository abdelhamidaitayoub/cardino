<template>
  <div class="rounded-md mb-10 border">
    <div
      v-if="!cards.length"
      class="
        flex flex-col
        justify-center
        space-y-3
        bg-white
        text-center
        rounded-md
      "
      style="height: 70vh"
    >
      <p class="text-lg text-gray-500">
        This is where you can manage your cards, but you haven't written
        anything yet.
      </p>
      <router-link class="self-center" :to="{ name: 'New' }">
        <base-button>Write your first card new</base-button>
      </router-link>
    </div>

    <template v-else>
      <div
        v-for="card in cards"
        :key="card._id"
        class="
          grid grid-cols-5
          items-center
          border-b
          px-8
          py-3
          first:rounded-t-md
          last:rounded-b-md
          odd:bg-white
          even:bg-gray-50
        "
      >
        <div class="col-span-3">
          <h2 class="text-blue-500 text-lg font-bold">
            <router-link :to="`/${user.username}/${card.slug}`">{{
              card.title
            }}</router-link>
          </h2>
          <p v-if="card.published" class="text-sm text-gray-600">
            Published: {{ publishedAt(card.publishedAt) }}
          </p>
        </div>
        <div
          v-if="card.published"
          class="text-gray-500 text-sm justify-self-center"
        >
          <div class="flex flex-nowrap whitespace-nowrap">
            <span class="flex items-center p-1" title="Reactions">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="crayons-icon mr-1"
              >
                <title>Reactions</title>
                <path
                  d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
                ></path>
              </svg>
              0
            </span>
            <span class="flex items-center p-1 ml-1" title="Comments">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="crayons-icon mr-1"
              >
                <title>Comments</title>
                <path
                  d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
                ></path>
              </svg>
              <span> 0 </span>
            </span>
            <span class="flex items-center p-1 ml-1" title="Views">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="crayons-icon mr-1"
              >
                <title>Views</title>
                <path
                  d="M12 5.5c3.987 0 7.304 2.802 8 6.5-.695 3.698-4.013 6.5-8 6.5S4.696 15.698 4 12c.695-3.698 4.013-6.5 8-6.5zm0 11.556a6.76 6.76 0 004.15-1.42A6.486 6.486 0 0018.49 12a6.487 6.487 0 00-2.341-3.633A6.76 6.76 0 0012 6.951c-1.507 0-2.97.499-4.149 1.416A6.487 6.487 0 005.51 12a6.486 6.486 0 002.34 3.636 6.76 6.76 0 004.15 1.42zm0-1.806a3.368 3.368 0 01-2.353-.952A3.212 3.212 0 018.673 12c0-.862.35-1.689.974-2.298A3.368 3.368 0 0112 8.75c.883 0 1.729.342 2.353.952.624.61.975 1.436.975 2.298 0 .862-.351 1.689-.975 2.298-.624.61-1.47.952-2.353.952zm0-1.444c.49 0 .96-.19 1.307-.53.347-.338.542-.797.542-1.276s-.195-.938-.542-1.277A1.871 1.871 0 0012 10.194c-.49 0-.96.19-1.307.53A1.785 1.785 0 0010.15 12c0 .479.195.938.542 1.277.347.338.817.529 1.307.529z"
                ></path>
              </svg>
              {{ viewCount(card.viewedBy) }}
            </span>
          </div>
        </div>
        <div v-else class="justify-self-center">
          <p class="px-2 py-1 bg-blue-500 text-white text-sm rounded-md">
            draft
          </p>
        </div>
        <div class="flex space-x-4 text-gray-500 text-sm justify-self-end">
          <button @click="deleteCard(card)" class="text-red-400">Delete</button>
          <router-link
            class="text-blue-400"
            :to="`/${user.username}/${card.slug}/edit`"
            >Edit</router-link
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import moment from 'moment'
import api from '../store/api'
import BaseButton from '../ui/BaseButton.vue'
export default {
  components: { BaseButton },
  name: 'DashboardCards',
  data: function () {
    return {
      cards: [],
    }
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
  },

  methods: {
    async getCards() {
      const { data } = await api.get(`api/v1/cards`, {
        params: {
          user: this.user._id,
        },
      })
      this.cards = data.data.cards
    },

    async deleteCard(card) {
      if (confirm(`Are you sure you want to delete "${card.title}" card?`)) {
        try {
          await api.delete(`api/v1/cards/${card._id}`)
          await this.getCards()
          this.$notify({
            group: 'app',
            type: 'success',
            title: 'Delete Card',
            text: 'Delete successfully',
          })
        } catch (err) {
          this.$notify({
            group: 'app',
            type: 'error',
            title: 'Delete Card',
            text: err.response.data.message,
          })
        }
      }
    },

    publishedAt(publishedAt) {
      return moment(publishedAt).format('ll')
    },

    viewCount(viewedBy) {
      return viewedBy !== undefined && viewedBy.length < 15
        ? '< 15'
        : viewedBy.length
    },
  },

  mounted() {
    this.getCards()
  },
}
</script>

<style></style>
