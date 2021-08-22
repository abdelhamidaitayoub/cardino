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
        @submit.prevent="login"
      >
        <label class="flex flex-col" for="email">
          Email
          <base-input
            type="text"
            name="email"
            id="email"
            placeholder="john@example.com"
            v-model="email"
            rules="required|email"
          ></base-input>
        </label>

        <label class="flex flex-col" for="password">
          Password
          <base-input
            type="password"
            name="password"
            id="password"
            placeholder="•••••••"
            v-model="password"
            rules="required|min:8"
          ></base-input>
        </label>

        <label for="rememberMe">
          <base-checkbox id="rememberMe" v-model="rememberme" />
          Remember Me
        </label>

        <base-button type="submit" :disabled="invalid">Login</base-button>

        <base-anchor class="self-center" :to="{ name: 'ForgetPassword' }"
          >I forgot my password</base-anchor
        >
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import { ValidationObserver } from 'vee-validate'
import BaseInput from '../ui/BaseInput.vue'
import BaseButton from '../ui/BaseButton.vue'
import BaseCheckbox from '../ui/BaseCheckbox.vue'
import BaseAnchor from '../ui/BaseAnchor.vue'

export default {
  name: 'Login',
  components: {
    ValidationObserver,
    BaseInput,
    BaseButton,
    BaseCheckbox,
    BaseAnchor,
  },
  data() {
    return {
      email: 'abdelhamidaitayoub@admin.com',
      password: 'pass1234',
      rememberme: false,
    }
  },

  methods: {
    login() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: 'Home' })
          this.$notify({
            group: 'app',
            type: 'success',
            title: 'Authentication',
            text: 'Logged in successfully',
          })
        })
        .catch((err) => {
          this.$notify({
            group: 'app',
            type: 'error',
            title: 'Authentication',
            text: err.response.data.message,
          })
        })
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
