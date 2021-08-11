<template>
  <div class="flex flex-wrap justify-between gap-5">
    <super-tag v-for="n in 51" :key="n"></super-tag>
  </div>
</template>

<script>
import SuperTag from '@/components/SuperTag.vue'
export default {
  name: 'TagsList',
  components: {
    SuperTag,
  },
}
</script>

<style></style>
