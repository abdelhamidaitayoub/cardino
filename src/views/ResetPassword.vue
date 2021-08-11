<template>
  <div class="h-without-nav pt-32">
    <ValidationObserver v-slot="{ invalid }">
      <form
        class="
          flex flex-col
          gap-3
          max-w-lg
          mx-auto
          px-8
          py-7
          rounded
          bg-gray-50
          border-2 border-gray-700
          shadow-lg
        "
        @submit.prevent="resetPassword"
      >
        <h1 class="text-xl font-bold">New Password</h1>
        <label class="flex flex-col" for="password">
          New password
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
          Confirm new password
          <base-input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="•••••••"
            v-model="passwordConfirm"
            rules="required|min:8"
          />
        </label>
        <base-button type="submit" :disabled="invalid"
          >Change my password</base-button
        >
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import api from '../store/api'
import BaseButton from '../ui/BaseButton.vue'
import BaseInput from '../ui/BaseInput.vue'

export default {
  components: { BaseInput, BaseButton, ValidationObserver },
  name: 'ForgetPassword',
  data() {
    return {
      password: '',
      passwordConfirm: '',
    }
  },

  methods: {
    async resetPassword() {
      try {
        const { data } = await api.patch(
          `/api/v1/users/resetPassword/${this.$route.params.token}`,
          { password: this.password, passwordConfirm: this.passwordConfirm }
        )
        this.$router.push({ name: 'Login' })
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'Authentication',
          text: data.message,
        })
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Authentication',
          text: err.response.data.message,
        })
      }
    },
  },
  metaInfo() {
    return {
      title: 'Reset Password',
      titleTemplate: '%s - CARDINO Community 🎴🎴',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
}
</script>
