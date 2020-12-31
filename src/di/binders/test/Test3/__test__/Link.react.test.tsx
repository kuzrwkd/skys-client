import React from 'react'
import TestRenderer from 'react-test-renderer'
const { act, create } = TestRenderer
import Link from '../main'

test('Link changes the class when hovered', async () => {
  let component

  await act(async () => {
    component = await create(
      <Link page="http://www.facebook.com">Facebook</Link>
    )
  })

  let tree = await component.toJSON()
  await expect(tree).toMatchSnapshot()

  await act(async () => {
    await tree.props.onMouseEnter()
    tree = await component.toJSON()
    await expect(tree).toMatchSnapshot()
  })

  await act(async () => {
    await tree.props.onMouseLeave()
    tree = await component.toJSON()
    await expect(tree).toMatchSnapshot()
  })
})
