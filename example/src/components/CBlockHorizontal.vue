<template>
  <component
    :is="tag"
    :class="cssClasses"
    class="c-block-horizontal text-center gap-md"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: 'CBlockHorizontal'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'div'
  },
  direction: {
    type: [String, Array],
    default: 'm:flex-col t:flex-row d:flex-row'
  },
  itemsAlignment: {
    type: [String, Array],
    default: 'm:items-center t:items-center d:items-center'
  },
  justification: {
    type: [String, Array],
    default: 'm:justify-center t:justify-center d:justify-center'
  }
})

const cssClasses = computed(() => {
  return [props.direction, props.justification, props.itemsAlignment]
})
</script>

<style scoped>
.c-block-horizontal {
  display: flex;
}
</style>
