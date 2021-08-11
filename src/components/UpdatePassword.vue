<template>
  <base-card class="flex-grow px-8 py-7">
    <ValidationObserver v-slot="{ invalid }">
      <form class="flex flex-col space-y-4" @submit.prevent="updatePassword">
        <h1 class="text-xl font-medium">Update Password</h1>
        <label class="flex flex-col" for="currentPassword">
          Current Password
          <base-input
            type="password"
            name="currentPassword"
            id="currentPassword"
            placeholder="•••••••"
            v-model="currentPassword"
            rules="required|min:8"
          />
        </label>
        <label class="flex flex-col" for="newPassword">
          New Password
          <base-input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="•••••••"
            v-model="newPassword"
            rules="required|min:8"
          />
        </label>
        <label class="flex flex-col" for="newPasswordConfirm">
          Confirm New Password
          <base-input
            type="password"
            name="newPasswordConfirm"
            id="newPasswordConfirm"
            placeholder="•••••••"
            v-model="newPasswordConfirm"
            rules="required|min:8"
          />
        </label>
        <base-button type="submit" :disabled="invalid"
          >Update Password</base-button
        >
      </form>
    </ValidationObserver>
  </base-card>
</template>

<script>
import api from '../store/api'
import { ValidationObserver } from 'vee-validate'
import BaseInput from '../ui/BaseInput.vue'
import BaseButton from '../ui/BaseButton.vue'
import BaseCard from '../ui/BaseCard.vue'
export default {
  components: {
    ValidationObserver,
    BaseInput,
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    }
  },
  methods: {
    async updatePassword() {
      try {
        const { data } = await api.patch('api/v1/users/updateMyPassword', {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword,
          newPasswordConfirm: this.newPasswordConfirm,
        })
        this.$store.commit('SET_USER_DATA', data)
        this.$notify({
          group: 'app',
          type: 'success',
          title: 'Profile Information',
          text: 'Password updated successfuly',
        })
      } catch (err) {
        this.$notify({
          group: 'app',
          type: 'error',
          title: 'Profile Information',
          text: err.response.data.message,
        })
      }
    },
  },
}
</script>

<style></style>
