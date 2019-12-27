import { SpeechBubble } from '@mui-plus/core'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

storiesOf('@mui-plus/core/SpeechBubble', module)
  .add(
    'default',
    withInfo({ inline: false })(() => {
      return <SpeechBubble>Hello World</SpeechBubble>
    })
  )
  .add(
    'triangleLeft',
    withInfo({ inline: false })(() => {
      return <SpeechBubble triangleLeft="20%">Hello World</SpeechBubble>
    })
  )
  .add(
    'triangleSize',
    withInfo({ inline: false })(() => {
      return <SpeechBubble triangleSize="20px">Hello World</SpeechBubble>
    })
  )
