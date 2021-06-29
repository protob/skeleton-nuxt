import { shallowMount } from "@vue/test-utils";
import PrtDesktopMenu from "./desktopMenu.vue";

describe("PrtDesktopMenu.vue", () => {
  it("renders a component", () => {
  
    const component = shallowMount(PrtDesktopMenu, {
      mocks: {
        $t: jest.fn(()=>{return["","",""]}),
      },
    })
    
        expect(component.classes()).toContain('prt-desktop-menu')
  });
});
