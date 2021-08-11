<script>
export default {
  name: 'BaseHeading',
  props: {
    level: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  render(createElement) {
    return createElement(`h${this.level}`, this.$slots.default)
  },
}
</script>

<style scoped>
/* h1{
  @apply
} */
</style>
