<template>
  <div class="h-without-nav mx-auto container">
    <div class="flex space-x-4 mx-40">
      <!-- Sidebar -->
      <div class="my-16 w-3/12">
        <h2 class="text-xl font-medium py-3">Cardino</h2>
        <ul class="flex flex-col">
          <router-link
            class="
              flex
              gap-3
              group
              py-3
              rounded-md
              cursor-pointer
              hover:bg-gray-50
              pl-4
            "
            :to="{ name: 'Home' }"
            tag="li"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="24"
              height="24"
              aria-hidden="true"
              class="crayons-icon crayons-icon--default"
            >
              <g class="nc-icon-wrapper">
                <path
                  fill="#A0041E"
                  d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                ></path>
                <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                <path
                  fill="#66757F"
                  d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                ></path>
                <path
                  fill="#66757F"
                  d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                ></path>
                <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                <path
                  fill="#55ACEE"
                  d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                ></path>
                <path
                  fill="#5C913B"
                  d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                ></path>
              </g>
            </svg>
            <span class="group-hover:text-blue-600">Home</span>
          </router-link>

          <router-link
            class="
              flex
              gap-3
              group
              py-3
              rounded-md
              cursor-pointer
              hover:bg-gray-50
              pl-4
            "
            :to="{ name: 'Tags' }"
            tag="li"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="24"
              height="24"
            >
              <g class="nc-icon-wrapper">
                <path
                  fill="#FFD983"
                  d="M36.017 24.181L21.345 9.746C20.687 9.087 19.823 9 18.96 9H8.883C7.029 9 6 10.029 6 11.883v10.082c0 .861.089 1.723.746 2.38L21.3 39.017a3.287 3.287 0 004.688 0l10.059-10.088c1.31-1.312 1.28-3.438-.03-4.748zm-23.596-8.76a1.497 1.497 0 11-2.118-2.117 1.497 1.497 0 012.118 2.117z"
                ></path>
                <path
                  fill="#D99E82"
                  d="M13.952 11.772a3.66 3.66 0 00-5.179 0 3.663 3.663 0 105.18 5.18 3.664 3.664 0 00-.001-5.18zm-1.53 3.65a1.499 1.499 0 11-2.119-2.12 1.499 1.499 0 012.119 2.12z"
                ></path>
                <path
                  fill="#C1694F"
                  d="M12.507 14.501a1 1 0 11-1.415-1.414l8.485-8.485a1 1 0 111.415 1.414l-8.485 8.485z"
                ></path>
              </g>
            </svg>
            <span class="group-hover:text-blue-600">Tags</span>
          </router-link>

          <router-link
            class="
              flex
              gap-3
              group
              py-3
              rounded-md
              cursor-pointer
              hover:bg-gray-50
              pl-4
            "
            :to="{ name: 'Faq' }"
            tag="li"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="24"
              height="24"
            >
              <g class="nc-icon-wrapper">
                <path
                  fill="#FFD983"
                  d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                ></path>
                <path
                  fill="#CCD6DD"
                  d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                ></path>
                <path
                  fill="#FFCC4D"
                  d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                ></path>
                <path
                  fill="#99AAB5"
                  d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                ></path>
                <path
                  fill="#CCD6DD"
                  d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                ></path>
              </g>
            </svg>
            <span class="group-hover:text-blue-600">FAQ</span>
          </router-link>

          <router-link
            class="
              flex
              gap-3
              group
              py-3
              rounded-md
              cursor-pointer
              hover:bg-gray-50
              pl-4
            "
            :to="{ name: 'About' }"
            tag="li"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="24"
              height="24"
              aria-hidden="true"
              class="crayons-icon crayons-icon--default"
            >
              <g class="nc-icon-wrapper">
                <path
                  fill="#A0041E"
                  d="M13.344 18.702h-2a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v7a.5.5 0 01-.5.5z"
                ></path>
                <path fill="#FFE8B6" d="M9 20L22 7l13 13v17H9z"></path>
                <path fill="#FFCC4D" d="M22 20h1v16h-1z"></path>
                <path
                  fill="#66757F"
                  d="M35 21a.997.997 0 01-.707-.293L22 8.414 9.707 20.707a1 1 0 11-1.414-1.414l13-13a.999.999 0 011.414 0l13 13A.999.999 0 0135 21z"
                ></path>
                <path
                  fill="#66757F"
                  d="M22 21a.999.999 0 01-.707-1.707l6.5-6.5a1 1 0 111.414 1.414l-6.5 6.5A.997.997 0 0122 21z"
                ></path>
                <path fill="#C1694F" d="M14 30h4v6h-4z"></path>
                <path
                  fill="#55ACEE"
                  d="M14 21h4v4h-4zm12.5 0h4v4h-4zm0 9h4v4h-4z"
                ></path>
                <path
                  fill="#5C913B"
                  d="M37.5 37.5A1.5 1.5 0 0136 39H8a1.5 1.5 0 010-3h28a1.5 1.5 0 011.5 1.5z"
                ></path>
              </g>
            </svg>
            <span class="group-hover:text-blue-600">About Us</span>
          </router-link>

          <router-link
            class="
              flex
              gap-3
              group
              py-3
              rounded-md
              cursor-pointer
              hover:bg-gray-50
              pl-4
            "
            :to="{ name: 'Contact' }"
            tag="li"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              width="24"
              height="24"
            >
              <g class="nc-icon-wrapper">
                <path
                  fill="#FFD983"
                  d="M33 15.06c0 6.439-5 7.439-5 13.44 0 3.098-3.123 3.359-5.5 3.359-2.053 0-6.586-.779-6.586-3.361C15.914 22.5 11 21.5 11 15.06c0-6.031 5.285-10.92 11.083-10.92C27.883 4.14 33 9.029 33 15.06z"
                ></path>
                <path
                  fill="#CCD6DD"
                  d="M26.167 36.5c0 .828-2.234 2.5-4.167 2.5-1.933 0-4.167-1.672-4.167-2.5 0-.828 2.233-.5 4.167-.5 1.933 0 4.167-.328 4.167.5z"
                ></path>
                <path
                  fill="#FFCC4D"
                  d="M26.707 14.293a.999.999 0 00-1.414 0L22 17.586l-3.293-3.293a1 1 0 10-1.414 1.414L21 19.414V30a1 1 0 102 0V19.414l3.707-3.707a.999.999 0 000-1.414z"
                ></path>
                <path
                  fill="#99AAB5"
                  d="M28 35a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6h12v6z"
                ></path>
                <path
                  fill="#CCD6DD"
                  d="M15.999 36a1 1 0 01-.163-1.986l12-2a.994.994 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014zm0-4a1 1 0 01-.163-1.986l12-2a.995.995 0 011.15.822.999.999 0 01-.822 1.15l-12 2a.927.927 0 01-.165.014z"
                ></path>
              </g>
            </svg>
            <span class="group-hover:text-blue-600">Contact Us</span>
          </router-link>
        </ul>
        <h2 class="text-xl font-medium py-3">Super Tags</h2>
        <ul class="flex flex-col h-96 overflow-y-auto">
          <router-link
            v-for="tag in tags"
            :key="tag._id"
            class="
              flex
              gap-3
              group
              py-3
              rounded-md
              cursor-pointer
              hover:bg-gray-50
              pl-4
            "
            :to="`/t/${tag.name}`"
            tag="li"
          >
            <span class="group-hover:text-blue-600">#{{ tag.name }}</span>
          </router-link>
        </ul>
      </div>

      <!-- Main Content -->
      <main class="flex-grow">
        <card-filtering></card-filtering>
        <cards-list></cards-list>
      </main>
      <!--  -->
      <div class="mt-16 w-4/12 space-y-4">
        <div
          v-for="(cards, key) in cards"
          :key="key"
          class="flex flex-col bg-white rounded-md shadow-sm"
        >
          <header class="py-3 px-5">
            <h3 class="text-xl font-medium">
              <router-link :to="`/${key}`">
                <span class="text-blue-500">#</span>{{ key }}</router-link
              >
            </h3>
          </header>
          <hr class="w-full" />
          <ul>
            <div v-for="card in cards" :key="card._id">
              <router-link
                class="py-4 px-5 cursor-pointer hover:bg-gray-50 group"
                :to="`/${card.user.username}/${card.slug}`"
                tag="li"
              >
                <span
                  class="font-medium text-gray-800 group-hover:text-blue-500"
                  >{{ card.title }}</span
                >
                <div class="flex space-x-2">
                  <span
                    v-for="(tag, i) in card.tags"
                    :key="i"
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
</template>

<script>
import api from '../store/api.js'
import CardsList from '@/components/CardsList.vue'
import CardFiltering from '@/components/CardFiltering.vue'
export default {
  name: 'Home',
  components: {
    CardsList,
    CardFiltering,
  },

  data() {
    return {
      tags: [],
      cards: {},
    }
  },

  methods: {
    async getTags() {
      const { data } = await api.get('api/v1/tags')
      this.tags = data.data.tags
    },
    async topFiveCardByTag() {
      const tags = ['news', 'help', 'discuss']
      const obj = {}
      for (const tag of tags) {
        const { data } = await api.get(`api/v1/tags/${tag}/top-5-cards`)
        obj[tag] = data.data.cards
      }
      this.cards = obj
    },
  },

  mounted() {
    this.getTags()
    this.topFiveCardByTag()
  },

  metaInfo() {
    return {
      title: 'CARDINO Community 🎴🎴',
      // titleTemplate: '%s - CARRDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>
