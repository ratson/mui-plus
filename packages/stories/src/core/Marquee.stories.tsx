import { Marquee } from '@mui-plus/core'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

storiesOf('@mui-plus/core/Marquee', module)
  .add(
    'default',
    withInfo({ inline: false })(() => {
      return <Marquee>Hello World!</Marquee>
    })
  )
  .add(
    'contained',
    withInfo({ inline: false })(() => {
      return (
        <div style={{ background: 'yellow', width: '10em' }}>
          <Marquee>Hello World! 1-2-3-4-5-6-7-8-9-0</Marquee>
        </div>
      )
    })
  )
  .add(
    'scrollSeconds',
    withInfo({ inline: false })(() => {
      return (
        <>
          <Marquee scrollSeconds={10}>Scroll 10 seconds</Marquee>
          <Marquee scrollSeconds={60}>Scroll 60 seconds</Marquee>
          <Marquee>Default</Marquee>
        </>
      )
    })
  )
