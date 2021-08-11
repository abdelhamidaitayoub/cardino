<template>
  <div class="pt-32 h-without-nav">
    <ValidationObserver v-slot="{ invalid }">
      <form
        class="
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
        @submit.prevent="requestResetToken"
      >
        <h1 class="text-xl font-bold">Forgot Password?</h1>
        <p>
          Don't worry! Just fill in your email and we'll send you a link to
          reset your password
        </p>
        <label class="flex flex-col" for="email">
          Email
          <base-input
            type="text"
            v-model="email"
            id="email"
            placeholder="john@example.com"
            name="email"
            rules="required|email"
          ></base-input>
        </label>

        <base-button type="submit" :disabled="invalid"
          >Request password reset</base-button
        >
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import api from '../store/api'
import BaseInput from '../ui/BaseInput.vue'
import BaseButton from '../ui/BaseButton.vue'
import { ValidationObserver } from 'vee-validate'
export default {
  components: { BaseInput, BaseButton, ValidationObserver },
  name: 'ForgetPassword',
  data() {
    return {
      email: '',
    }
  },

  methods: {
    async requestResetToken() {
      try {
        const { data } = await api.post('api/v1/users/forgetPassword', {
          email: this.email,
        })
        this.$router.push({ name: 'Home' })
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'Password Reset',
          text: data.message,
        })
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Password Reset',
          text: err.response.data.message,
        })
      }
    },
  },
  metaInfo() {
    return {
      title: 'Forget Password',
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>
