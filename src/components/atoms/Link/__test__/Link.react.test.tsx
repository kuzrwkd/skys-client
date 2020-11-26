import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../main'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
