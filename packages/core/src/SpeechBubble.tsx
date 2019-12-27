import { Box, styled } from '@material-ui/core'
import { BoxProps } from '@material-ui/core/Box'

export type SpeechBubbleProps = BoxProps & {
  triangleLeft: string
}

const SpeechBubble = styled(Box)(({ theme, ...x }) => {
  const props = x as SpeechBubbleProps
  const backgroundColor = props.bgcolor || '#ccc'
  const borderRadius = props.borderRadius || '.4em'
  const triangleSize = '33px'
  const triangleLeft = props.triangleLeft || '50%'
  return {
    backgroundColor,
    position: 'relative',
    textAlign: 'center',
    padding: '20px 0',
    margin: '20px 30px',
    borderRadius,
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      display: 'block',
      bottom: 0,
      left: triangleLeft,
      marginLeft: `-${triangleSize}`,
      marginBottom: `-${triangleSize}`,
      width: 0,
      height: 0,
      border: `${triangleSize} solid transparent`,
      borderBottom: 0,
      borderTopColor: backgroundColor
    }
  }
}) as React.FC<SpeechBubbleProps>

export default SpeechBubble
