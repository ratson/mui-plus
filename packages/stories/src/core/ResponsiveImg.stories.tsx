import { ResponsiveImg } from '@mui-plus/core'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

storiesOf('@mui-plus/core/ResponsiveImg', module).add(
  'default',
  withInfo({ inline: false })(() => {
    return (
      <ResponsiveImg
        xs="https://via.placeholder.com/150"
        sm="https://via.placeholder.com/250"
        md="https://via.placeholder.com/350"
        lg="https://via.placeholder.com/450"
        xl="https://via.placeholder.com/550"
        src="https://via.placeholder.com/650"
      />
    )
  })
)
