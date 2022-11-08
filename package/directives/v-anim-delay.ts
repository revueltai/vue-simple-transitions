/**
 * Directive to add a transition-delay style to the provided element.
 */

import { DirectiveBinding } from 'vue'
import { isNumber } from '../helpers/'

const vAnimDelay = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (isNumber(binding.value)) {
      el.style.transitionDelay = `${binding.value || 500}ms`
    }
  }
}

export default vAnimDelay
