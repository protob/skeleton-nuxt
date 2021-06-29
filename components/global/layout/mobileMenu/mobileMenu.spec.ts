import { shallowMount } from '@vue/test-utils'
import PrtMobileMenu from './mobileMenu.vue'

describe('PrtMobileMenu.vue', () => {
  it('renders a component', () => {
    const component = shallowMount(PrtMobileMenu, {
      mocks: {
        $t: jest.fn(() => {
          return ['', '', '']
        }),
      },
    })

    expect(component.classes()).toContain('prt-mobile-menu')
  })
})
