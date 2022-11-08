<template>
  <c-block
    tag="header"
    class="text-center b"
    v-anim
    v-anim-duration="startDuration"
  >
    <div>
      <h1
        v-anim="'slide-y-top'"
        v-anim-delay="startDuration + 300"
        class="bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200 mb-md"
      >
        Vue Simple Transitions
      </h1>

      <p
        v-anim="'slide-y-bottom'"
        v-anim-delay="startDuration + 400"
        class="m:text-lg t:text-2xl d:text-2xl"
      >
        Transitions easy as

        <strong
          v-for="count in 3"
          :key="count"
          v-anim="'slide-x-right'"
          v-anim-delay="startDuration + 400 + 100 * count"
          class="ml-xs bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          {{ count }}
        </strong>
      </p>
    </div>

    <c-block-horizontal class="m:mt-md t:mt-xl d:mt-2xl">
      <c-button
        v-anim="'slide-y-top'"
        v-anim-delay="1200"
        :background-color="null"
        :href="'#code'"
      >
        <c-icon name="chevron-down" />
      </c-button>
    </c-block-horizontal>
  </c-block>
</template>

<script lang="ts">
export default {
  name: 'CHeader'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
const startDuration = ref(1000)
</script>

<style scoped>
header {
  @apply flex items-center justify-center;
  height: 100vh;
  background-image: url('/logo-hero.svg');
  background-repeat: no-repeat, repeat;
  background-position: center, center;
  background-size: 800px, auto;
}

header:before {
  @apply absolute top-0 left-0 w-full h-full;
  content: '';
  opacity: 0.1;
  background-image: radial-gradient(circle at top, #0e7490 0%, transparent 45%);
}
</style>
