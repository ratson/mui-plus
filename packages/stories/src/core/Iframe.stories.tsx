import { Iframe } from '@mui-plus/core'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

storiesOf('@mui-plus/core/Iframe', module)
  .add(
    'default',
    withInfo({ inline: false })(() => {
      return <Iframe src="https://via.placeholder.com/150" />
    })
  )
  .add(
    'fullWidth',
    withInfo({ inline: false })(() => {
      return <Iframe src="https://via.placeholder.com/150" fullWidth />
    })
  )
