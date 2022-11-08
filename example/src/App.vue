<template>
  <c-header />

  <main>
    <c-code-example id="code" />
    <c-frameworks />
  </main>

  <c-footer />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { vAnimController } from 'vue-simple-transitions'
import CHeader from './components/CHeader.vue'
import CFooter from './components/CFooter.vue'
import CCodeExample from './components/CCodeExample.vue'
import CFrameworks from './components/CFrameworks.vue'

onMounted(() => {
  vAnimController()
})
</script>
