<template>
  <div class="flex flex-col space-y-4 px-3">
    <Card v-for="n in 50" :key="n" :data="n"></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  name: 'CardsList',
  components: {
    Card,
  },
}
</script>

<style></style>
