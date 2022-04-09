import SelectFilter from '@/components/SelectFilter.vue'
import { DOMWrapper, mount, shallowMount } from '@vue/test-utils'
import { render } from 'vue'

describe('<SelectFilter />', () => {
  it('should render correctly', () => {
      const wrapper = shallowMount(SelectFilter)

      expect(wrapper.element).toMatchSnapshot()
  })

  it('should receive options prop', () => {
    const mockOptions = ['option1', 'option2']

    const wrapper = shallowMount(SelectFilter, {
      props: {
        options: mockOptions
      }
    })

    expect(wrapper.props().options).toEqual(mockOptions)
  })

  it('should render options prop', () => {
    const mockOptions = ['option1', 'option2']

    const wrapper = shallowMount(SelectFilter, {
      props: {
        options: mockOptions
      }
    })
    
    const options = wrapper.find('select').findAll('option')
    const optionsValue = options
      .filter((domWrapper: DOMWrapper<HTMLOptionElement>) => domWrapper.element.value.trim() !== '')
      .map((domWrapper: DOMWrapper<HTMLOptionElement>) => domWrapper.text())

    expect(optionsValue).toEqual(mockOptions)
  })

  it('should receive onChange prop', () => {
    const mockOnChange = () => 'mock'
    
    const wrapper = shallowMount(SelectFilter, {
      props: {
        onChange: mockOnChange
      }
    })

    expect(wrapper.props().onChange).toEqual(mockOnChange)
  })

  it('should show default filter description when not pass', () => {
    const defaultFilterDescription = 'Select an option';
    const wrapper = shallowMount(SelectFilter)

    const filterDescription = wrapper.get('#filter__description')

    expect(filterDescription.text()).toBe(defaultFilterDescription)
  })

  it('should receive filter description when pass', () => {
    const mockFilterDescription = 'mock filter description'

    const wrapper = shallowMount(SelectFilter, {
      props: {
        filterDescription: mockFilterDescription
      }
    })

    const filterDescription = wrapper.get('#filter__description')

    expect(filterDescription.text()).toBe(mockFilterDescription)
  })

  it('should call onChange function correctly', () => {
    const mockOnChange = jest.fn()

    const wrapper = shallowMount(SelectFilter, {
      props: {
        onChange: mockOnChange
      }
    })

    const select = wrapper.find('select')

    select.trigger('change')

    expect(mockOnChange).toHaveBeenCalled()
  })
})