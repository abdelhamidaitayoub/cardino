<template>
  <div class="h-without-nav">
    <div class="container mx-40 mt-7">
      <form class="flex flex-col space-y-4" @submit.prevent="createCard">
        <input type="file" name="cover" ref="cover" accept="image/*" />
        <input
          class="
            py-2
            px-3
            w-full
            text-sm
            focus:outline-none
            focus:border-blue-500
            focus:shadow-md
            border-2 border-gray-300
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
            text-sm
            focus:outline-none
            focus:border-blue-500
            focus:shadow-md
            border-2 border-gray-300
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
          style="height: 70vh"
          ref="md"
          language="en"
          :subfield="false"
          placeholder="Write your post content here ..."
          v-model="md"
          fontSize="18px"
          :shortCut="false"
          @imgAdd="addImage"
          @imgDel="deleteImage"
          @save="save"
        ></mavon-editor>

        <button
          type="submit"
          class="py-3 bg-blue-500 rounded px-9 text-gray-50"
        >
          Publish
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../store/api'
export default {
  name: 'New',

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
    async createCard() {
      try {
        const formdata = new FormData()
        formdata.append('cover', this.$refs.cover.files[0])
        formdata.append('title', this.title)
        for (const tag of this.tags.split(/\s*(?:,|$)\s*/)) {
          formdata.append('tags[]', tag)
        }
        console.log(this.tags.split(/\s*(?:,|$)\s*/))
        formdata.append('md', this.md)
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

    save(value, reder) {
      console.log(this.$refs.md.d_render)
      console.log(value)
      console.log(reder)
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
      titleTemplate: '%s - CARRDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style></style>
