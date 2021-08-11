<template>
  <div class="flex flex-wrap justify-between gap-5">
    <super-tag v-for="tag in tags" :key="tag._id" :tag="tag"></super-tag>
  </div>
</template>

<script>
import SuperTag from '@/components/SuperTag.vue'
export default {
  name: 'TagsList',
  props: ['tags'],
  components: {
    SuperTag,
  },
}
</script>

<style></style>
