import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { shallow } from 'enzyme'
import Sample from '../main'

Enzyme.configure({ adapter: new Adapter() })

describe('Sample.tsx', () => {
  const defaultValue = {
    title: 'hoge',
  }

  const makeComponent = (args = {}) => (
    <Sample {...Object.assign({}, defaultValue, args)} />
  )

  test('show h1', () => {
    const component = shallow(makeComponent())
    expect(component.find('h1').text()).toEqual('hoge')
  })
})
