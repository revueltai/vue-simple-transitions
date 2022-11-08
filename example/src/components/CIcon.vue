<template>
  <span
    class="c-icon"
    aria-hidden="true"
    focusable="false"
  >
    <svg
      :class="cssClasses"
      :width="shapeSize"
      :height="shapeSize"
      class="c-icon__shape"
    >
      <use
        :xlink:href="`${iconset}#gg-${name}`"
        :href="`${iconset}#gg-${name}`"
      />
    </svg>
  </span>
</template>

<script lang="ts">
export default {
  name: 'CIcon'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

const sizes = {
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 64,
  '5xl': 80,
  '6xl': 96,
  '7xl': 160
}

const props = defineProps({
  iconset: {
    type: String,
    default: '/css.gg.svg'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md'
  },
  color: {
    type: String,
    default: 'fill-slate-50'
  }
})

const cssClasses = computed(() => {
  return `inline-flex ${props.color}`
})

const shapeSize = computed(() => {
  return sizes[props.size]
})

const wrapperSize = computed(() => {
  return `var(--spacing-${props.size})`
})
</script>

<style>
.c-icon {
  @apply inline-flex items-center justify-center;
  width: v-bind(wrapperSize);
  height: v-bind(wrapperSize);
}
</style>
