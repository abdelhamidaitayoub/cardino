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
            <h1 class="text-4xl text-gray-900 font-bold mt-4">
              {{ card.title }}
            </h1>

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
            </div>

            <div v-html="render" class="markdown-body"></div>
            <div class="bg-pink-500">Reactions</div>
            <div class="bg-green-500">desscusions</div>
          </div>
        </div>

        <div class="w-1/3 space-y-4 relative">
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
              <router-link
                class="py-4 px-5 cursor-pointer hover:bg-gray-50 group"
                to="/nilanth/redux-toolkit-the-standard-way-to-write-redux-2g32"
                tag="li"
              >
                <span
                  class="font-medium text-gray-800 group-hover:text-blue-500"
                  >Redux Toolkit - The Standard Way to Write Redux</span
                >
                <div class="flex space-x-2">
                  <span class="text-sm text-gray-500"><span>#</span>react</span>
                  <span class="text-sm text-gray-500"
                    ><span>#</span>javascript</span
                  >
                  <span class="text-sm text-gray-500"
                    ><span>#</span>webdev</span
                  >
                </div>
              </router-link>
              <hr class="w-full" />
              <router-link
                class="py-4 px-5 cursor-pointer hover:bg-gray-50 group"
                to="/nilanth/redux-toolkit-the-standard-way-to-write-redux-2g32"
                tag="li"
              >
                <span
                  class="font-medium text-gray-800 group-hover:text-blue-500"
                  >Redux Toolkit - The Standard Way to Write Redux</span
                >
                <div class="flex space-x-2">
                  <span class="text-sm text-gray-500"><span>#</span>react</span>
                  <span class="text-sm text-gray-500"
                    ><span>#</span>javascript</span
                  >
                  <span class="text-sm text-gray-500"
                    ><span>#</span>webdev</span
                  >
                </div>
              </router-link>
              <hr class="w-full" />
            </ul>
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

export default {
  name: 'CardDetails',
  props: ['slug', 'username'],

  data() {
    return {
      card: {},
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
  },

  mounted() {
    this.getCard()
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
