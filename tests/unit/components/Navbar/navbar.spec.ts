import Navbar from '@/components/Navbar.vue'
import { shallowMount } from '@vue/test-utils'

describe('<Navbar />', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Navbar)
    
    expect(wrapper.html()).toMatchSnapshot()
  })
})