<template>
  <div
    ref="CBbutton"
    class="c-button"
  >
    <component
      v-if="isComponentLink"
      :is="componentLink"
      :class="cssClasses"
      :to="to"
    >
      <slot />
    </component>

    <a
      v-if="isAnchorLink && !hasLinkToId"
      :class="cssClasses"
      :href="href"
      :target="target"
    >
      <slot />
    </a>

    <button
      role="button"
      :disabled="disabled"
      :class="cssClasses"
      @click="onClick"
      v-else
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CButton'
}
</script>

<script setup lang="ts">
import { ref, computed, useSlots } from 'vue'

const CBbutton = ref(null)
const slots = useSlots()
const firstChild = slots.default!()[0]

const emit = defineEmits<{
  (e: 'click'): void
}>()

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },
  to: {
    type: Object,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: '_blank'
  },
  disabled: {
    type: [Object, Boolean],
    default: false
  },
  backgroundColor: {
    type: String,
    default: 'bg-blue-500'
  },
  borderColor: {
    type: String,
    default: 'border-blue-500'
  },
  textColor: {
    type: String,
    default: 'text-slate-50'
  },
  boxShadow: {
    type: String,
    default: ''
  },
  isRounded: {
    type: Boolean,
    default: false
  },
  isSquared: {
    type: Boolean,
    default: false
  }
})

const haOnlyIconComponent = computed(() => {
  if (!firstChild) {
    return false
  }

  return firstChild.type.name === 'CIcon'
})

const isComponentLink = computed(() => {
  return !!props.to
})

const isAnchorLink = computed(() => {
  return !!props.href
})

const hasLinkToId = computed(() => {
  return props.href.startsWith('#')
})

const componentLink = computed(() => {
  // const app = getCurrentInstance()
  // return app?.$nuxt ? 'nuxt-link' : 'router-link'
  return 'router-link'
})

const cssClasses = computed(() => {
  const payload = [`disabled:opacity-50 focus:outline-none inline-flex gap-xs items-center text-center border`, `${props.backgroundColor} ${props.borderColor} ${props.textColor} ${props.boxShadow}`]

  if (props.isRounded) {
    payload.push('rounded-md')
  } else if (props.isSquared) {
    payload.push('rounded-none')
  } else {
    payload.push('rounded-full')
  }

  switch (props.size) {
    case 'sm':
      payload.push('text-12')

      if (haOnlyIconComponent.value) {
        payload.push('p-xs')
      } else {
        payload.push('py-2xs px-md')
      }

      break

    case 'md':
      payload.push('text-16')

      if (haOnlyIconComponent.value) {
        payload.push('p-md')
      } else {
        payload.push('py-xs px-md')
      }

      break

    case 'lg':
      payload.push('text-18')

      if (haOnlyIconComponent.value) {
        payload.push('p-lg')
      } else {
        payload.push('py-md px-lg')
      }

      break
  }

  return payload
})

const onClick = () => {
  if (hasLinkToId.value) {
    const el = document.getElementById(props.href.replace('#', ''))
    const elOffsetPos = parseInt((el!.getBoundingClientRect().top + window.pageYOffset).toFixed())

    window.scrollTo({
      top: elOffsetPos,
      behavior: 'smooth'
    })
  }

  emit('click')
}
</script>

<style scoped>
.c-button {
  @apply inline-flex;
}
</style>
