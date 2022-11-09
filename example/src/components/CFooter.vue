<template>
  <c-block
    v-anim
    css-classes-wrapper="flex items-center"
    padding-top="m:pt-6xl t:pt-5xl d:pt-6xl"
    padding-bottom="m:pb-6xl t:pb-5xl d:pb-4xl"
  >
    <c-button
      v-anim="'slide-y-top'"
      v-anim-delay="200"
      href="https://github.com/revueltai/vue-simple-transitions"
      size="lg"
      background-color="bg-white"
      text-color="text-black"
      border-color="border-black"
    >
      <img
        src="/logo-github.svg"
        width="24"
        height="24"
        alt="Github"
        class="mr-2xs"
      > Get it on Github
    </c-button>

    <c-frameworks />

    <c-button
      :background-color="null"
      :border-color="null"
      href="https://www.iamnacho.com/"
      title="Made by iamnacho"
      class="absolute right-sm bottom-sm opacity-10 hover:opacity-100 transition-opacity"
    >
      <img
        v-anim="'slide-y-bottom'"
        v-anim-delay="1000"
        src="/logo-iamnacho.svg"
        alt="Made by iamnacho"
        width="48"
        height="48"
      />
    </c-button>
  </c-block>
</template>

<script setup lang="ts">
import CFrameworks from './CFrameworks.vue'
</script>
