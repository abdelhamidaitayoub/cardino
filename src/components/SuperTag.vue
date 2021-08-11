<template>
  <base-card
    class="flex-grow-0 px-7 py-6 space-y-2"
    :style="`flex-basis: 32%; border-top: 20px solid ${tag.bgColor}`"
  >
    <h2 class="text-xl font-medium">#{{ tag.name }}</h2>
    <p>
      {{ tag.description }}
    </p>
    <p class="text-gray-600 text-sm">
      {{ Math.floor(Math.random() * (1000 + 100)) }} posts published
    </p>
  </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'

export default {
  components: { BaseCard },
  name: 'SuperTag',
  props: ['tag'],
}
</script>
