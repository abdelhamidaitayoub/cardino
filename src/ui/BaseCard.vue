<template>
  <article>
    <slot></slot>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
article {
  @apply flex flex-col space-y-3 group border  rounded-md shadow-sm px-5 py-4 bg-white z-50;
}
</style>
