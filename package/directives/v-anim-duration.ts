/**
 * Directive to add a transition-delay style to the provided element.
 */

import { DirectiveBinding } from 'vue'
import { isNumber } from '../helpers/'

const vAnimDuration = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (isNumber(binding.value)) {
      el.style.transitionDuration = `${binding.value}ms`
    }
  }
}

export default vAnimDuration
