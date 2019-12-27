import { Box, makeStyles } from '@material-ui/core'
import { BoxProps } from '@material-ui/core/Box'
import React from 'react'

export type SpeechBubbleProps = BoxProps & {
  triangleLeft?: string
  triangleSize?: string
}

export const useStyles = makeStyles(() => ({
  root: (props: SpeechBubbleProps) => {
    const backgroundColor = props.bgcolor || '#ccc'
    const borderRadius = props.borderRadius || '.4em'
    const triangleSize = props.triangleSize || '33px'

    return {
      backgroundColor,
      borderRadius,
      position: 'relative',
      textAlign: 'center',
      padding: '20px 0',
      margin: '20px 30px',
      zIndex: 1,
      '&:after': {
        content: '""',
        position: 'absolute',
        display: 'block',
        width: 0,
        height: 0,
        bottom: 0,
        left: props.triangleLeft || '50%',
        marginLeft: `-${triangleSize}`,
        marginBottom: `-${triangleSize}`,
        border: `${triangleSize} solid transparent`,
        borderBottom: 0,
        borderTopColor: backgroundColor
      }
    }
  }
}))

const SpeechBubble: React.FC<SpeechBubbleProps> = props => {
  const { triangleLeft, triangleSize, ...boxProps } = props
  const classes = useStyles(props)

  return <Box className={classes.root} {...boxProps} />
}

export default SpeechBubble
