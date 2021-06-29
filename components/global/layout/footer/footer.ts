import { defineComponent } from '@vue/composition-api'
// const cookieBar = () => import('vue-cookie-law')
export default defineComponent({
  name: 'PrtFooter',
  components: {
    // cookieBar,
  },

  setup() {
    // this.app.i18n.t('example.message.key')

    const year = new Date().getFullYear()
    return {
      year,
    }
  },
})
