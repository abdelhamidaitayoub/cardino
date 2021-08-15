<template>
  <div class="h-without-nav flex items-center">
    <div class="container mx-auto">
      <form class="flex flex-col mx-48">
        <base-card class="space-y-0">
          <div
            class="
              bg-gray-500
              h-80
              cursor-pointer
              bg-cover bg-no-repeat bg-center
            "
            :style="`background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(220, 220, 220, 0.73)), url(${
              this.coverUrl || this.cover
            })`"
            @click.prevent="onPickFile"
          ></div>
          <input
            style="display: none"
            type="file"
            name="cover"
            ref="cover"
            accept="image/*"
            @change="onFilePicked"
          />

          <input
            class="
              py-4
              px-3
              w-full
              focus:outline-none
              focus:border-blue-500
              focus:shadow-md
              text-4xl
              font-medium
              rounded
              placeholder-gray-500 placeholder-opacity-75
              text-gray-900
            "
            name="title"
            v-model="title"
            type="text"
            placeholder="New card title here..."
          />
          <input
            class="
              py-2
              px-3
              w-full
              text-base
              font-normal
              focus:outline-none
              focus:border-blue-500
              focus:shadow-md
              rounded
              placeholder-gray-500 placeholder-opacity-75
              text-gray-900
            "
            name="tags"
            v-model.trim="tags"
            type="text"
            placeholder="Add up to 4 tags"
          />
          <mavon-editor
            style="height: 60vh"
            ref="md"
            language="en"
            :subfield="true"
            placeholder="Write your post content here ..."
            v-model="md"
            fontSize="18px"
            :shortCut="false"
            @imgAdd="addImage"
            @imgDel="deleteImage"
            :boxShadow="false"
          ></mavon-editor>
        </base-card>

        <div class="space-x-2">
          <button
            type="button"
            @click="updateCard(true)"
            class="py-2 bg-blue-500 rounded px-8 text-gray-50 self-start mt-4"
          >
            Save Changes
          </button>
          <!-- <button
            type="button"
            @click="updateCard(false)"
            class="py-2 bg-gray-300 rounded px-8 text-gray-700 self-start mt-4"
          >
            Save draft
          </button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../store/api'
import BaseCard from '../ui/BaseCard.vue'

export default {
  name: 'EditCard',
  components: { BaseCard },
  props: ['slug'],
  data() {
    return {
      id: '',
      title: '',
      tags: '',
      md: '',
      cover: null,
      coverUrl: '',
      images: [],
    }
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
  },

  methods: {
    async updateCard(publish) {
      try {
        const formdata = new FormData()
        formdata.append('cover', this.cover)
        formdata.append('title', this.title)
        for (const tag of this.tags.split(/\s*(?:,|$)\s*/)) {
          formdata.append('tags[]', tag)
        }
        formdata.append('md', this.md)
        formdata.append('published', publish)
        for (const image of this.images) {
          formdata.append('images', image)
        }

        const { data } = await api.patch(`api/v1/cards/${this.id}`, formdata)
        console.log(data)
        this.$router.push(
          `/${this.user.username}/${data.data.updatedCard.slug}`
        )
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Card Update',
          text: err.response.data.message,
        })
      }
    },

    async addImage(pos, file) {
      try {
        // step 1. upload image to server.
        var formdata = new FormData()
        formdata.append('image', file)
        const { data } = await api.post('api/v1/cards/uploadImage', formdata)

        // step 2. replace url
        this.$refs.md.$img2Url(pos, data.data.url)
        this.images[pos - 1] = data.data.filename
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Image Upload',
          text: err.response.data.message,
        })
      }
    },

    deleteImage(pos) {
      this.images.splice(pos - 1, 1)
    },

    onPickFile() {
      this.$refs.cover.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      // let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', (e) => {
        this.coverUrl = e.target.result
      })
      fileReader.readAsDataURL(files[0])
      this.cover = files[0]
    },
  },

  async created() {
    const { data } = await api.get(
      `api/v1/cards?slug=${this.slug}&user=${this.user._id}`
    )
    this.id = data.data.cards[0]._id
    this.title = data.data.cards[0].title
    this.tags = data.data.cards[0].tags.join(', ')
    this.md = data.data.cards[0].md
    this.cover = data.data.cards[0].cover
  },

  metaInfo() {
    return {
      title: 'Edit Card',
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style></style>
