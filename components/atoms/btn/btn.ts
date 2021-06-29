import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PrtButton',
  props: {
    buttonText: {
      type: String,
      required: true,
      default: 'Click me',
    },
  },
})
