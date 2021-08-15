<template>
  <div class="h-without-nav">
    <div v-if="loading">loading ...</div>
    <div v-else>
      <div class="h-40 bg-black"></div>
      <div class="container mx-auto">
        <base-card
          class="
            flex flex-col
            items-center
            space-y-2
            -mt-20
            mx-52
            px-8
            py-7
            relative
          "
        >
          <img
            class="w-32 rounded-full border-8 border-black -mt-20"
            :src="user.photo"
            alt="profil image"
          />
          <h1 class="text-gray-900 font-bold text-2xl">{{ user.name }}</h1>
          <p class="px-60 text-center text-lg text-gray-700">
            {{ user.bio }}
          </p>
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
            >
              <path
                d="M10.371 7.629a3 3 0 00-4.242 0l-3 3a3 3 0 104.242 4.242l.827-.826m-.569-3.674a3 3 0 004.242 0l3-3a3 3 0 00-4.242-4.242l-.825.825"
                stroke="#71717A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <!-- Format: Aug 8, 2017 -->
            <p class="text-gray-500">Joined on {{ joinedOn }}</p>
          </div>
          <div
            class="absolute top-2 right-4"
            v-if="
              this.$store.state.user && user._id === this.$store.state.user._id
            "
          >
            <router-link :to="{ name: 'UserProfile' }">
              <base-button type="button">Edit Profil</base-button>
            </router-link>
          </div>
        </base-card>
        <div class="flex mx-52 space-x-4 mt-4">
          <base-card class="flex flex-col space-y-3 px-3 py-4 w-1/3 self-start">
            <li class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="affnmk94qc43jt1lklcv08d9a2w6wkcs"
                class="crayons-icon mr-3 color-base-50"
              >
                <title id="affnmk94qc43jt1lklcv08d9a2w6wkcs">Card</title>
                <path
                  d="M19 22H5a3 3 0 01-3-3V3a1 1 0 011-1h14a1 1 0 011 1v12h4v4a3 3 0 01-3 3zm-1-5v2a1 1 0 002 0v-2h-2zm-2 3V4H4v15a1 1 0 001 1h11zM6 7h8v2H6V7zm0 4h8v2H6v-2zm0 4h5v2H6v-2z"
                ></path>
              </svg>
              <p>{{ userCards.length }} posts published</p>
            </li>
            <li class="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                role="img"
                aria-labelledby="a92snwiucqh3tbpy1ypxcwi5qxojrwr3"
                class="crayons-icon mr-3 color-base-50"
              >
                <title>Comment</title>
                <path
                  d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"
                ></path>
              </svg>
              0 comments written
            </li>
          </base-card>
          <main class="self-end flex-grow space-y-4">
            <div
              v-if="!userCards.length"
              class="
                flex flex-col
                justify-center
                space-y-3
                bg-white
                text-center
                rounded-md
              "
              style="height: 60vh"
            >
              <p class="text-lg text-gray-500">
                This is where you can see your card, but you haven't written
                anything yet.
              </p>
              <router-link class="self-center" :to="{ name: 'New' }">
                <base-button>Write your first card new</base-button>
              </router-link>
            </div>
            <template v-else>
              <Card
                v-for="card in userCards"
                :key="card._id"
                :card="card"
              ></Card>
            </template>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CardsList from '@/components/CardsList.vue'
import Card from '@/components/Card.vue'
import api from '../store/api'
import BaseButton from '../ui/BaseButton.vue'
import moment from 'moment'
import BaseCard from '../ui/BaseCard.vue'
// import Footer from '../components/Footer.vue'

export default {
  name: 'Profile',
  components: {
    // CardsList,
    Card,
    BaseButton,
    BaseCard,
    // Footer,
  },
  props: ['username'],
  data() {
    return {
      user: {},
      userCards: [],
      loading: false,
    }
  },

  computed: {
    joinedOn() {
      return moment(this.user.createdAt).format('ll')
    },
  },
  methods: {
    async getUser() {
      try {
        this.loading = true
        const { data } = await api.get(`api/v1/users/username/${this.username}`)
        this.user = data.data.user
        this.loading = false
      } catch (err) {
        this.$router.replace({ name: 'NotFound' })
      }
    },

    async getUserCards() {
      try {
        const { data } = await api.get(`api/v1/cards?user=${this.user._id}`)
        this.userCards = data.data.cards
      } catch (arr) {
        console.log('user cards error')
      }
    },
  },
  async mounted() {
    await this.getUser()
    this.getUserCards()
  },

  metaInfo() {
    return {
      title: this.user.name,
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style></style>
