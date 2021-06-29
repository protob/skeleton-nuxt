import { shallowMount } from "@vue/test-utils";
import PrtHeader from "./header.vue";

describe("PrtHeader.vue", () => {
  it("renders a component", () => {
    const component = shallowMount(PrtHeader);

        expect(component.classes()).toContain('prt-header')
  });
});
