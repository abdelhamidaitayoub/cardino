<template>
  <notifications v-bind="$attrs">
    <template slot="body" slot-scope="props">
      <div :class="`notification ${props.item.type}`">
        <a class="title">
          {{ props.item.title }}
        </a>
        <a class="close" @click="props.close">
          <i class="fa fa-fw fa-close"></i>
        </a>
        <div v-html="props.item.text"></div>
      </div>
    </template>
  </notifications>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss">
.notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
</style>
