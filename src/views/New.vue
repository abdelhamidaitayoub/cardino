<template>
  <div class="h-without-nav flex items-center">
    <div class="container mx-auto">
      <form class="flex flex-col mx-48">
        <base-card class="space-y-0">
          <input type="file" name="cover" ref="cover" accept="image/*" />
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
            @save="save"
          ></mavon-editor>
        </base-card>

        <div class="space-x-2">
          <button
            type="button"
            @click="createCard(true)"
            class="py-2 bg-blue-500 rounded px-8 text-gray-50 self-start mt-4"
          >
            Publish
          </button>
          <button
            type="button"
            @click="createCard(false)"
            class="py-2 bg-gray-300 rounded px-8 text-gray-700 self-start mt-4"
          >
            Save draft
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../store/api'
import BaseCard from '../ui/BaseCard.vue'

export default {
  name: 'New',
  components: { BaseCard },
  data() {
    return {
      title: '',
      tags: '',
      md: '',
      images: [],
    }
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
  },

  methods: {
    async createCard(publish) {
      try {
        const formdata = new FormData()
        formdata.append('cover', this.$refs.cover.files[0])
        formdata.append('title', this.title)
        for (const tag of this.tags.split(/\s*(?:,|$)\s*/)) {
          formdata.append('tags[]', tag)
        }
        formdata.append('md', this.md)
        formdata.append('published', publish)
        for (const image of this.images) {
          formdata.append('images', image)
        }

        const { data } = await api.post('api/v1/cards', formdata)
        this.$router.push(`/${this.user.username}/${data.data.card.slug}`)
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Card Creation',
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
  },

  metaInfo() {
    return {
      title: 'New Card',
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style scoped></style>
