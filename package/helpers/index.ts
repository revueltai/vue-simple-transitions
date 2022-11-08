/*
  Helpers of the package.
*/

interface IntersectionObserverProperties {
  root?: Element | null
  rootMargin?: string
  threshold?: number
}

interface AnimationCssClasses {
  base: string
  animated: string
}

/**
 * Animation CSS classes
 * @constant {AnimationCssClasses}
 */
export const ANIMATIONS: AnimationCssClasses = {
  base: '--anim',
  animated: '--animated'
}

/**
 * Checks if a value is a valid type number.
 * @param {Any} input Element to validate.
 * @return {Boolean} Boolean result.
 */
export const isNumber = (input: any): Boolean => {
  return typeof input === 'number' && isFinite(input)
}

/**
 * Helper method to funnel calls to IntersectionObserver.
 * @param {Object} options - IntersectionObserver properties
 * @param {Boolean} observeOnce - Disconnects the observer when true.
 * @return {Void} Void.
 */
export const transitionsObserver = (options: IntersectionObserverProperties = {}): void => {
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    const elements: NodeList = document.querySelectorAll(`.${ANIMATIONS.base}`)

    const opts = {
      root: null,
      threshold: 0,
      rootMargin: '0px',
      ...options
    }

    const observer = new IntersectionObserver((elements) => {
      elements.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add(ANIMATIONS.animated)
        }
      })
    }, opts)

    elements.forEach((el: any) => {
      if (el) {
        observer.observe(el)
      }
    })
  }
}
