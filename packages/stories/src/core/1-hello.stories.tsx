import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import * as React from 'react'
import { Hello } from '@mui-plus/core'

storiesOf('@mui-plus/core/1. Hello', module).add(
  'first',
  withInfo({ inline: false })(() => {
    return <Hello>World</Hello>
  })
)
