// Link.react.test.js
import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../main'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // tree.props.onMouseEnter()
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
  //
  // tree.props.onMouseLeave()
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
})
