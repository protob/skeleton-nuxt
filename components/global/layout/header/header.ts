import { defineComponent, ref, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'LuHeader',
  props: {},
  components: {
    // mobileMenu,
    // desktopMenu,
    // LocalizedLink,
  },
  // created() {
  //   window.addEventListener(this.scrollName, this.handleScroll)
  // },
  // destroyed() {
  //   window.removeEventListener(this.scrollName, this.handleScroll)
  // },
  // mounted() {
  //   this.initMenu()
  // },
  // setup() {
  //   const scrollName = computed(() => {
  //     return 'scroll'
  //     //   this.$store.getters.getBrowser == 'firefox' ? 'scroll' : 'mousewheel'
  //   }) //TODO

  //   const handleScroll = (event) => {
  //     let offset = event.pageY

  //     if (event.wheelDeltaY) {
  //       offset = offset - event.wheelDeltaY - event.clientY
  //     }

  //     let limit = 0
  //     const topMenu = this.$refs.header
  //     const appWrapper = this.$parent.$el

  //     if (offset > 90) {
  //       topMenu.classList.add('sticky-bg')
  //       topMenu.classList.add('sticky')
  //       appWrapper.classList.add('has-sticky')
  //     } else {
  //       removeClass('sticky', topMenu)
  //       removeClass('sticky-bg', topMenu)
  //       removeClass('has-sticky', appWrapper)
  //     }
  //   }

  //   return {
  //     scrollName,
  //     handleScroll,
  //   }
  // },
})
