export const hasClass = (el: HTMLElement, className: string) => {
  return el.classList
    ? el.classList.contains(className)
    : new RegExp('\\b' + className + '\\b').test(el.className)
}

export const addClass = (el: HTMLElement, className: string) => {
  if (el.classList) el.classList.add(className)
  else if (!hasClass(el, className)) el.className += ' ' + className
}

export const removeClass = (className: string, el: HTMLElement) => {
  if (el.classList) {
    el.classList.remove(className)
  } else {
    el.className = el.className.replace(
      new RegExp('\\b' + className + '\\b', 'g'),
      ''
    )
  }
}
export const genUID = () => {
  // I generate the UID from two parts here
  // to ensure the random number provide enough bits.
  var firstPart = ((Math.random() * 46656) | 0).toString()
  var secondPart = ((Math.random() * 46656) | 0).toString()
  firstPart = ('000' + firstPart.toString()).slice(-3)
  secondPart = ('000' + secondPart.toString()).slice(-3)
  return firstPart + secondPart
}

export const dims = () => {
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
