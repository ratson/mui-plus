import React from 'react'
import renderer from 'react-test-renderer'
import SpeechBubble from '../SpeechBubble'

describe('SpeechBubble', () => {
  test('render children', () => {
    const component = renderer.create(<SpeechBubble>Hello World</SpeechBubble>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
