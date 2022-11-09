# vue-simple-transitions
A simple set of directives to perform transition animations in components and HTML elements.

## Installation
`npm install vue-simple-transitions`

## Usage

### 1. Import the package
You can import the package in two ways:

#### Add all directives at once.
```js
// main.ts or main.js
import { createApp } from  'vue'
import vueSimpleTransitions from  'vue-simple-transitions'
import  'vue-simple-transitions/styles.css'

const app = createApp(App)
app.use(vueSimpleTransitions)

app.mount('#app')
```

#### Add each directives individually.
```js
// main.ts or main.js
import { createApp } from  'vue'
import { vAnim, vAnimDelay, vAnimDuration } from  'vue-simple-transitions'
import  'vue-simple-transitions/styles.css'

const app = createApp(App)
app.directive('anim', vAnim)
app.directive('anim-delay', vAnimDelay)
app.directive('anim-duration', vAnimDuration)

app.mount('#app')
```

### 2. Enable in App.vue
Add the transitions controller to *App.vue*.

After that *vAnimController* will observe any instance of the directives in any element or component of your project.
```vue
<template>
<h1 v-anim v-anim-delay="200">
    Hello world
</h1>

<your-component
    v-anim="'slide-x-left'"
    v-anim-delay="400"
    v-anim-duration="1200"
/>
</template>

<script setup lang="ts">
import { onMounted } from  'vue'
import { vAnimController } from  'vue-simple-transitions'

onMounted(() => {
   vAnimController()
})
</script>
```

## API
| Directive | Value Type | Default | Details |
|--|--|--|--|
| v-anim | `string` | `fade-in` | Sets the base transition class to the element/component. It also sets the name of the transition that we want to trigger. |
| v-anim-delay | `number` | `500` | Sets the transition-delay to the element/component. |
| v-anim-duration | `number` | `500` | Sets the transition-duration to the element/component. |

## Example
Check out the example project [here](https://github.com/revueltai/vue-simple-transitions/tree/main/example).

