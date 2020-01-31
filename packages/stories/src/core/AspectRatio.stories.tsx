import { AspectRatio } from '@mui-plus/core'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

storiesOf('@mui-plus/core/AspectRatio', module)
  .add(
    'default',
    withInfo({ inline: false })(() => {
      return (
        <AspectRatio ratio={0.75}>
          <img src="https://via.placeholder.com/150" />
        </AspectRatio>
      )
    })
  )
  .add(
    '500x400',
    withInfo({ inline: false })(() => {
      return (
        <div
          style={{
            width: '500px',
            height: '400px',
            overflow: 'hidden',
            background: 'red'
          }}
        >
          <AspectRatio ratio={1}>
            <img src="https://via.placeholder.com/150" />
          </AspectRatio>
        </div>
      )
    })
  )
  .add(
    '200x400',
    withInfo({ inline: false })(() => {
      return (
        <React.Fragment>
          <div
            style={{
              width: '200px',
              height: '400px',
              overflow: 'hidden',
              background: 'red'
            }}
          >
            <AspectRatio ratio={1}>
              <img src="https://via.placeholder.com/150" />
            </AspectRatio>
          </div>
          <br />
          <div
            style={{
              width: '200px',
              height: '400px',
              overflow: 'hidden',
              background: 'red'
            }}
          >
            <AspectRatio ratio={1} style={{ height: '100%' }}>
              <img src="https://via.placeholder.com/150" />
            </AspectRatio>
          </div>
        </React.Fragment>
      )
    })
  )
