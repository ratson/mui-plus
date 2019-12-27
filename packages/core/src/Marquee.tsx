import { createStyles, makeStyles } from '@material-ui/core'
import React from 'react'

export type MarqueeProps = {
  scrollSeconds?: number
}

const useMarqueeStyles = ({ scrollSeconds = 30 }: MarqueeProps) => {
  const useStyles = makeStyles(() =>
    createStyles({
      '@keyframes marquee': {
        from: {
          transform: 'translateX(100%)'
        },
        to: {
          transform: 'translateX(-100%)'
        }
      },
      '@keyframes marquee2': {
        from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'translateX(-200%)'
        }
      },
      root: {
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      },
      content: {
        minWidth: '100%',
        display: 'inline-block',
        animation: `$marquee ${scrollSeconds}s linear infinite`,
        'animation-delay': `-${scrollSeconds / 2}s`
      },
      content2: {
        minWidth: '100%',
        display: 'inline-block',
        animation: `$marquee2 ${scrollSeconds}s linear infinite`
      }
    })
  )
  return useStyles()
}

const Marquee: React.FC<MarqueeProps> = ({ children, ...props }) => {
  const classes = useMarqueeStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.content}>{children}</div>
      <div className={classes.content2}>{children}</div>
    </div>
  )
}

export default Marquee
