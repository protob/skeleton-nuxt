import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// below is an unofficial ClassNamePlugin for GSAP 3. You can copy/paste it into your project. Then, just add className: to your tweens. Relative values should work fine too (add and remove classes). Typically we recommend just explicitly animating specific properties to get better performance, but some people really appreciate having a plugin like this, especially for legacy projects. Enjoy!

export default function useAnimation() {
  // HERO BG

  const animateBG = () => {
    if (!process.client) return

    const tl = gsap.timeline({
      repeat: -1,
    })

    tl.to('.bg', {
      backgroundPosition: '-2000px -2000px',
      ease: 'linear.easeNone',
      duration: 60,
    })
  }

  return { animateBG }
}
