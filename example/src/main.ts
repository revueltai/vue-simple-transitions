import { createApp } from 'vue'
import {
  vAnim,
  vAnimDelay,
  vAnimDuration
} from 'vue-simple-transitions'
import 'vue-simple-transitions/styles.css'

import App from './App.vue'
import CIcon from './components/CIcon.vue'
import CButton from './components/CButton.vue'
import CBlock from './components/CBlock.vue'
import CBlockHorizontal from './components/CBlockHorizontal.vue'

import '@/assets/styles.css'

const app = createApp(App)

app.directive(vAnim)
app.directive(vAnimDelay)
app.directive(vAnimDuration)
// app.use(vueSimpleTransitions)

app.component('c-icon', CIcon)
app.component('c-button', CButton)
app.component('c-block', CBlock)
app.component('c-block-horizontal', CBlockHorizontal)

app.mount('#app')
