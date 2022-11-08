<template>
  <component
    :is="tag"
    class="c-section"
  >
    <div class="c-section__wrapper">
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
defineProps({
  tag: {
    type: String,
    default: 'section'
  }
})
</script>

<style>
:root {
  --c-section-max-width: 1200px;
}

.c-section,
.c-section__wrapper {
  @apply relative;
}

.c-section__wrapper {
  @apply flex flex-col justify-center my-0 mx-auto;
  padding-left: var(--spacing-xl);
  padding-right: var(--spacing-xl);
  max-width: var(--c-section-max-width);
}

@screen m {
  .c-section__wrapper {
    padding-top: var(--spacing-2xl);
    padding-bottom: var(--spacing-2xl);
  }
}

@screen t {
  .c-section__wrapper {
    padding-top: var(--spacing-5xl);
    padding-bottom: var(--spacing-5xl);
  }
}

@screen d {
  .c-section__wrapper {
    padding-top: var(--spacing-7xl);
    padding-bottom: var(--spacing-7xl);
  }
}
</style>
