import { shallowMount } from '@vue/test-utils'
import PrtFooter from './footer.vue'

describe('PrtFooter.vue', () => {
  it('renders a component', () => {
    const component = shallowMount(PrtFooter)

    expect(component.classes()).toContain('prt-footer')
  })
})
