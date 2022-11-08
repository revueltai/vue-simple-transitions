import { App } from 'vue'
import { vAnimController } from './helpers/'

import vAnim from './directives/v-anim'
import vAnimDelay from './directives/v-anim-delay'
import vAnimDuration from './directives/v-anim-duration'

export {
  vAnimController,
  vAnim,
  vAnimDelay,
  vAnimDuration
}

export default {
  install(app: App) {
    app.directive('anim', vAnim)
    app.directive('anim-delay', vAnimDelay)
    app.directive('anim-duration', vAnimDuration)
  }
}
