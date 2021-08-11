<template>
  <input
    v-bind="$attrs"
    type="checkbox"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'BaseCheckbox',
  inheritAttrs: false,
  props: ['value'],
}
</script>

<style></style>
