import { SpeechBubble } from '@mui-plus/core'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

storiesOf('@mui-plus/core/SpeechBubble', module).add(
  'default',
  withInfo({ inline: false })(() => {
    return <SpeechBubble>Hello World</SpeechBubble>
  })
)
