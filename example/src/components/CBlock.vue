<template>
  <component
    :is="tag"
    class="c-section"
  >
    <div
      class="c-section__wrapper"
      :class="cssClassesWrapperSanitized"
    >
      <slot />
    </div>
  </component>
</template>

<script lang="ts">
export default {
  name: 'CBlock'
}
</script>

<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps({
  tag: {
    type: String,
    default: 'section'
  },
  paddingTop: {
    type: String,
    default: 'm:pt-2xl t:pt-5xl d:pt-6xl'
  },
  paddingBottom: {
    type: String,
    default: 'm:pb-2xl t:pb-5xl d:pb-6xl'
  },
  paddingLeft: {
    type: String,
    default: 'm:pl-2xl t:pl-5xl d:pl-6xl'
  },
  paddingRight: {
    type: String,
    default: 'm:pr-2xl t:pr-5xl d:pr-6xl'
  },
  cssClassesWrapper: {
    type: String,
    default: ''
  }
})

const cssClassesWrapperSanitized = computed(() => {
  return [
    props.paddingLeft,
    props.paddingRight,
    props.paddingTop,
    props.paddingBottom,
    props.cssClassesWrapper
  ]
})
</script>

<style>
:root {
  --c-section-max-width: 1200px;
}

.c-section {
  @apply relative;
}

.c-section__wrapper {
  @apply flex flex-col justify-center my-0 mx-auto w-full;
  max-width: var(--c-section-max-width);
}
</style>
