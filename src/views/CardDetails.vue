<template>
  <div class="h-without-nav">
    <div class="container mx-auto p-5">
      <div class="flex space-x-4 mx-40">
        <div
          class="flex flex-col bg-white rounded-md shadow-sm space-y-3 w-2/3"
        >
          <img
            class="rounded-t-md"
            v-if="hasCover"
            :src="card.cover"
            :alt="`${card.slug} cover`"
          />
          <div class="px-8 pb-5 space-y-3">
            <div class="flex justify-between items-center">
              <h1 class="text-4xl text-gray-900 font-bold mt-4">
                {{ card.title }}
              </h1>
              <p
                v-if="
                  !card.published &&
                  this.$store.state.user &&
                  card.user._id === this.$store.state.user._id
                "
                class="px-2 py-1 bg-blue-500 text-white text-sm rounded-md"
              >
                draft
              </p>
            </div>

            <div class="flex space-x-2">
              <h5 v-for="(tag, i) in card.tags" :key="i" class="rounded-md">
                #{{ tag }}
              </h5>
            </div>

            <div class="flex items-center space-x-2">
              <router-link
                :to="`/${card.user.username}`"
                tag="div"
                class="
                  flex
                  items-center
                  space-x-2
                  px-1
                  py-1
                  rounded-md
                  hover:bg-gray-100
                  cursor-pointer
                "
              >
                <img
                  :src="card.user.photo"
                  class="rounded-full h-8 shadow-sm"
                />
                <span class="text-gray-700">{{ card.user.username }}</span>
              </router-link>
              <span class="self-center text-gray-500">•</span>
              <small class="text-sm text-gray-500">{{
                card.readingTime
              }}</small>
              <router-link
                v-if="
                  this.$store.state.user &&
                  card.user._id === this.$store.state.user._id
                "
                :to="`/${card.user.username}/${card.slug}/edit`"
                class="px-6 py-2 bg-gray-200 rounded-md text-sm"
              >
                Edit
              </router-link>
            </div>

            <div v-html="render" class="markdown-body py-5"></div>
            <hr class="w-full" />
            <div class="flex space-x-2 justify-center text-gray-700">
              <div class="flex">
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
                <span>{{ viewCount }} Views</span>
              </div>
              <div class="flex">
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
                <span>0 Reactions</span>
              </div>
            </div>
            <hr class="w-full" />
            <section class="space-y-4">
              <header>
                <h2 class="text-xl font-medium">Disscusions<span>(0)</span></h2>
              </header>
              <div class="flex space-x-3">
                <img
                  class="rounded-full h-8 shadow-sm"
                  :src="card.user.photo"
                  alt=""
                />
                <textarea
                  class="
                    w-full
                    px-3
                    py-2
                    text-sm text-gray-900
                    placeholder-gray-500 placeholder-opacity-75
                    border-2 border-gray-300
                    rounded
                    focus:outline-none
                    focus:border-blue-500
                    focus:shadow-md
                  "
                  placeholder="Add to the discussion"
                  name="comment"
                  id=""
                  cols="60"
                  rows="4"
                ></textarea>
              </div>
            </section>
          </div>
        </div>

        <div class="w-1/3 relative">
          <div class="sticky top-24 space-y-4">
            <div
              style="border-top: 40px solid #000"
              class="bg-white rounded-md shadow-sm px-5 flex flex-col space-y-3"
            >
              <div class="-mt-4">
                <router-link :to="`/${card.user.username}`" class="flex">
                  <span class="mr-2 shrink-0">
                    <img
                      :src="card.user.photo"
                      class="rounded-full h-11 shadow-sm"
                    />
                  </span>
                  <span class="mt-5 font-medium">{{ card.user.name }}</span>
                </router-link>
              </div>
              <div class="text-gray-700">
                {{ card.user.bio }}
              </div>

              <router-link
                v-if="
                  this.$store.state.user &&
                  card.user._id === this.$store.state.user._id
                "
                :to="{ name: 'UserProfile' }"
                ><base-button class="w-full"
                  >Edit Profile</base-button
                ></router-link
              >

              <div class="text-gray-700 pb-5">
                <ul class="space-y-1">
                  <li
                    v-if="card.user.location"
                    class="flex items-center space-x-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="none"
                    >
                      <title>Location</title>
                      <path
                        d="M13.243 12.492l-3.183 3.183a1.499 1.499 0 01-2.12 0l-3.183-3.183a6 6 0 118.486 0v0z"
                        stroke="#3F3F46"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.591 9.841a2.25 2.25 0 10-3.182-3.182A2.25 2.25 0 0010.59 9.84z"
                        stroke="#3F3F46"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div>{{ card.user.location }}</div>
                  </li>
                  <li class="flex items-center space-x-3">
                    <div class="key">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                      >
                        <title>Joined</title>
                        <path
                          d="M10.371 7.629a3 3 0 00-4.242 0l-3 3a3 3 0 104.242 4.242l.826-.826m-.568-3.674a3 3 0 004.242 0l3-3a3 3 0 00-4.242-4.242l-.825.825"
                          stroke="#3F3F46"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div class="value">
                      <time :datetime="card.user.createdAt" class="date">{{
                        joinedOn
                      }}</time>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col bg-white rounded-md shadow-sm">
              <header class="py-3 px-5">
                <h3 class="text-xl font-medium">
                  More from
                  <router-link
                    class="text-blue-500"
                    :to="`/${card.user.username}`"
                    >@{{ card.user.username }}</router-link
                  >
                </h3>
              </header>
              <hr class="w-full" />
              <ul>
                <div v-for="userCard in userCards" :key="userCard._id">
                  <router-link
                    class="py-4 px-5 cursor-pointer hover:bg-gray-50 group"
                    :to="`/${userCard.user.username}/${userCard.slug}`"
                    tag="li"
                  >
                    <span
                      class="
                        font-medium
                        text-gray-800
                        group-hover:text-blue-500
                      "
                      >{{ userCard.title }}</span
                    >
                    <div class="flex space-x-2">
                      <span
                        v-for="tag in userCard.tags"
                        :key="tag"
                        class="text-sm text-gray-500"
                        ><span>#</span>{{ tag }}</span
                      >
                    </div>
                  </router-link>
                  <hr class="w-full" />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import moment from 'moment'
import api from '../store/api'
import BaseButton from '../ui/BaseButton.vue'

export default {
  components: { BaseButton },
  name: 'CardDetails',
  props: ['slug', 'username'],

  data() {
    return {
      card: {},
      userCards: [],
    }
  },

  computed: {
    hasCover() {
      if (/undefined$/.test(this.card.cover)) return false
      return !!this.card.cover
    },
    render() {
      return mavonEditor.getMarkdownIt().render(this.card.md)
    },
    joinedOn() {
      return moment(this.card.user.createdAt).format('ll')
    },
    viewCount() {
      return !this.card.viewedBy ? '0' : this.card.viewedBy.length
    },
  },
  methods: {
    async getUserId() {
      try {
        const { data } = await api.get(`api/v1/users/username/${this.username}`)
        return data.data.user._id
      } catch (err) {
        this.$router.replace({ name: 'NotFound' })
      }
    },

    async getCard() {
      try {
        const userId = await this.getUserId()
        const { data } = await api.get(
          `api/v1/cards?slug=${this.slug}&user=${userId}`
        )
        if (!data.result) {
          this.$router.replace({ name: 'NotFound' })
          return
        }
        this.card = data.data.cards[0]
      } catch (err) {
        this.$router.replace({ name: 'NotFound' })
      }
    },

    async getUserCards(nbCards) {
      const userId = await this.getUserId()
      const { data } = await api.get(
        `api/v1/cards?user=${userId}&limit=${nbCards}`
      )

      this.userCards = data.data.cards
    },

    async addView() {
      if (!this.$store.getters.authenticated) return
      try {
        await api.patch(`/api/v1/cards/${this.slug}/addView`)
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Card Views',
          text: err.response.data.message,
        })
      }
    },
  },

  async mounted() {
    this.getCard()
    this.addView()
    this.getUserCards(4)
  },

  metaInfo() {
    return {
      title: this.card.title,
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style>
.hljs-right {
  text-align: right;
}
.markdown-body {
  font-family: Ubuntu;
}
</style>
