/**
 * Directive to add the base transition class to the provided element.
 */

import { DirectiveBinding } from 'vue'
import { ANIMATIONS } from '../helpers/'

const vAnim = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.classList.add(ANIMATIONS.base)
    el.classList.add(binding.value || 'fade-in')
  }
}

export default vAnim
