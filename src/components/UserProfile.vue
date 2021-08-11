<template>
  <div
    class="
      flex-grow
      space-y-4
      px-8
      py-7
      rounded
      bg-gray-50
      border-gray-700 border-2
      shadow-lg
    "
  >
    <h1 class="">User Profile</h1>
    <form class="flex flex-col space-y-4" @submit.prevent="saveProfileInfo">
      <label class="flex flex-col" for="name">
        Name
        <base-input
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          v-model="name"
        />
      </label>

      <label class="flex flex-col" for="email">
        Email
        <base-input
          type="email"
          name="email"
          id="email"
          placeholder="John Doe"
          v-model="email"
        />
      </label>

      <label for="username">
        Username
        <base-input
          type="text"
          name="username"
          id="username"
          placeholder="John Doe"
          v-model="username"
        />
      </label>

      <label class="flex flex-col" for="photo">
        Photo
        <input
          type="file"
          ref="userPhoto"
          name="photo"
          id="photo"
          accept="image/*"
        />
      </label>
      <base-button type="submit">Save Profile Information</base-button>
    </form>
  </div>
</template>

<script>
import api from '../store/api'
import BaseButton from '../ui/BaseButton.vue'
import BaseInput from '../ui/BaseInput.vue'

export default {
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      name: '',
      email: '',
      username: '',
      photo: '',
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
  methods: {
    async saveProfileInfo() {
      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('username', this.username)
      formData.append('photo', this.$refs.userPhoto.files[0])

      try {
        await api.patch('api/v1/users/updateMe', formData)
        this.$store.dispatch('reloadUserData')
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'Profile Information',
          text: 'Data updated successfuly',
        })
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Profile Information',
          text: err.response.data.message,
        })
      }
      // try {
      //     const response = await axios.patch(
      //       'http://localhost:8000/api/v1/users/updateMe',
      //       data
      //     );
      //     if (response.data.status === 'success') {
      //       displayAlert('success', 'Data updated successfuly');
      //     }
      //   } catch (err) {
      //     displayAlert('error', err.response.data.message);
      //   }
    },
  },
  created() {
    this.name = this.user.name
    this.email = this.user.email
    this.username = this.user.username
  },
}
</script>

<style></style>
