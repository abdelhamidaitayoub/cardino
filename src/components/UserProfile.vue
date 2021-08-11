<template>
  <div class="flex-grow">
    <form class="space-y-4" @submit.prevent="saveProfileInfo">
      <base-card class="space-y-4 px-8 py-7">
        <h1 class="text-xl font-medium">Profile</h1>

        <div class="flex flex-col space-y-4">
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
        </div>
      </base-card>
      <base-card class="space-y-4 px-8 py-7">
        <h1 class="text-xl font-medium">Basic</h1>
        <div class="flex flex-col space-y-4">
          <label class="flex flex-col" for="location">
            Location
            <base-input
              type="text"
              name="location"
              id="location"
              placeholder="Agadir, Morocco"
              v-model="location"
            />
          </label>

          <label class="flex flex-col" for="bio">
            Bio
            <base-input
              type="text"
              name="bio"
              id="bio"
              placeholder="Find Your Dream Frontend Developer Job Here!"
              v-model="bio"
            />
          </label>
        </div>
      </base-card>
      <base-card>
        <base-button type="submit">Save Profile Information</base-button>
      </base-card>
    </form>
  </div>
</template>

<script>
import api from '../store/api'
import BaseButton from '../ui/BaseButton.vue'
import BaseCard from '../ui/BaseCard.vue'
import BaseInput from '../ui/BaseInput.vue'

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      name: '',
      email: '',
      username: '',
      photo: '',
      bio: '',
      location: '',
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
      formData.append('bio', this.bio)
      formData.append('location', this.location)
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
    this.bio = this.user.bio
    this.location = this.user.location
  },
}
</script>

<style></style>
