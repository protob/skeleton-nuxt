export default function useUtils() {
  // const imageUrlAlt = (event: { target: HTMLImageElement }) => {
  //   event.target.src = DEFAULT_PROFILE_IMG
  // }

  // import { Plugin } from '@nuxt/types'

  const hasClass = (el: HTMLElement, className: string) => {
    return el.classList
      ? el.classList.contains(className)
      : new RegExp('\\b' + className + '\\b').test(el.className)
  }

  const slugify = (str: string) => {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaeeeeiiiioooouuuunc------'
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes

    return str
  }

  const genUID = () => {
    // I generate the UID from two parts here
    // to ensure the random number provide enough bits.
    const firstPart: Number = (Math.random() * 46656) | 0
    const secondPart: Number = (Math.random() * 46656) | 0
    const firstPart1 = ('000' + firstPart.toString(36)).slice(-3)
    const secondPart1 = ('000' + secondPart.toString(36)).slice(-3)
    return firstPart1 + secondPart1
  }

  const dims = () => {
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight
    return {
      x: x,
      y: y,
    }
  }

  // export default genUID

  return { genUID, hasClass, dims, slugify }
}
