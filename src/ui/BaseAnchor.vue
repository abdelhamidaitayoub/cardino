<template>
  <router-link class="text-blue-500" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseAnchor',
  props: ['to'],
}
</script>

<style></style>
