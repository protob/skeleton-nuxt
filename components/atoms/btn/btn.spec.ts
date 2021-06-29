import { shallowMount } from '@vue/test-utils'
import PrtButton from './btn.vue'

describe('PrtButton.vue', () => {
  it('renders a component', () => {
    const component = shallowMount(PrtButton)
    expect(component.classes()).toContain('prt-button')
  })
})
