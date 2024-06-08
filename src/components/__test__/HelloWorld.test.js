import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('tests inputfield', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    const input = wrapper.find('input')

    // Check if the input field exists before setting a value
    expect(input.exists()).toBe(true)

    // Set the value and test it
    input.setValue('Hello Vitest')
    expect(input.element.value).toBe('Hello Vitest')
  })
})
