
import Footer from '@/components/Footer.vue'
import { shallowMount, VueWrapper } from '@vue/test-utils'

describe('<Footer/>', () => {
  let wrapper: VueWrapper;

  function createComponent(footerText: string | undefined = undefined): void {
    wrapper = shallowMount(Footer, {
      props: {
        footerText
      }
    })
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render correctly', () => {
    createComponent()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render footer with correctly text', () => {
    createComponent('Footer text')

    expect(wrapper.props().footerText).toMatch('Footer text')
  })

  it('should render default text if not pass prop footerText', () => {
    createComponent()
    const defaultFooterText = 'Breweries List © 2022'

    expect(wrapper.text()).toEqual(defaultFooterText)
  })
})