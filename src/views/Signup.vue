<template>
  <div class="h-without-nav pt-36">
    <ValidationObserver v-slot="{ invalid }">
      <form
        class="
          relative
          flex flex-col
          max-w-lg
          gap-3
          px-8
          mx-auto
          border-2 border-gray-700
          rounded
          shadow-lg
          py-7
          bg-gray-50
        "
        @submit.prevent="signup"
      >
        <label class="flex flex-col" for="username">
          Username
          <base-input
            type="text"
            name="username"
            id="username"
            placeholder="johndoe"
            v-model="username"
            rules="required|alpha_num|min:4|max:20"
            @input="usernameAvailable"
          />
          <span class="text-red-500" v-if="error">{{ error }}</span>
        </label>

        <label class="flex flex-col" for="name">
          Name
          <base-input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            v-model="name"
            rules="required"
          />
        </label>

        <label class="flex flex-col" for="email">
          Email
          <base-input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            v-model="email"
            rules="required|email"
          />
        </label>

        <label class="flex flex-col" for="password">
          password
          <base-input
            type="password"
            name="password"
            id="password"
            placeholder="•••••••"
            v-model="password"
            rules="required|min:8"
          />
        </label>

        <label class="flex flex-col" for="passwordConfirm">
          Confirm Password
          <base-input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="•••••••"
            v-model="passwordConfirm"
            rules="required|min:8"
          />
        </label>

        <base-button type="submit" :disabled="invalid">Signup</base-button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import BaseInput from '../ui/BaseInput.vue'
import BaseButton from '../ui/BaseButton.vue'
import api from '../store/api'

export default {
  name: 'Signup',
  components: {
    ValidationObserver,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      username: '',
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      error: '',
    }
  },
  methods: {
    signup() {
      console.log(this.name)
      this.$store
        .dispatch('signup', {
          username: this.username,
          name: this.name,
          email: this.email,
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        })
        .then(() => {
          console.log('sjdjd')
          this.$router.push({ name: 'Home' })
          this.$notify({
            group: 'app',
            type: 'success',
            title: 'Authorization',
            text: 'your account has been successfully created',
          })
        })
        .catch((err) => {
          this.$notify({
            group: 'app',
            type: 'error',
            title: 'Authorization',
            text: err.response.data.message,
          })
        })
    },
    async usernameAvailable() {
      try {
        await api.get(
          `api/v1/users/usernameAvailable?username=${this.username}`
        )
        this.error = ''
      } catch (err) {
        this.error = err.response.data.message
      }
    },
  },
  metaInfo() {
    return {
      title: 'Welcome!',
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>

<style></style>
