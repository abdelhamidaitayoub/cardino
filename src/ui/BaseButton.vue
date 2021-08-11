<template>
  <button
    v-bind="$attrs"
    class="py-3 bg-blue-500 rounded px-9 text-gray-50 disabled:opacity-50"
    :type="type"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: ['type'],
}
</script>

<style></style>
