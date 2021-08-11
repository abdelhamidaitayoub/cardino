<template>
  <ValidationProvider :rules="rules" v-slot="{ errors }">
    <input
      class="
        w-full
        px-3
        py-2
        text-sm text-gray-900
        placeholder-gray-500 placeholder-opacity-75
        border-2 border-gray-300
        rounded
        focus:outline-none
        focus:border-blue-500
        focus:shadow-md
      "
      v-bind="$attrs"
      :value="value"
      v-on="listeners"
    />
    <span v-if="errors.length" class="text-red-500">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'BaseInput',
  components: {
    ValidationProvider,
  },
  inheritAttrs: false,
  props: ['value', 'rules'],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (e) => this.$emit('input', e.target.value),
      }
    },
  },
}
</script>

<style></style>
