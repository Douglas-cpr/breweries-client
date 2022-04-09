
import Footer from '@/components/Footer.vue'
import { shallowMount } from '@vue/test-utils'

describe('<Footer/>', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render footer with correctly text', () => {
    const wrapper = shallowMount(Footer, {
      props: {
        footerText: 'Footer text'
      }
    })

    expect(wrapper.text()).toMatch('Footer text')
  })

  it('should render default text if not pass prop footerText', () => {
    const wrapper = shallowMount(Footer)
    const defaultFooterText = 'Breweries List © 2022';

    expect(wrapper.text()).toEqual(defaultFooterText)
  })
})