import { createStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'

type Props = {
  classes: Record<keyof typeof styles, string>
  ratio: string | number
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const styles = createStyles({
  root: {
    position: 'relative',
    '&::before': {
      height: 0,
      content: '""',
      display: 'block',
      paddingBottom: ({ ratio }: Props) => `calc(100% / (${ratio}))`
    },
    '& > :first-child': {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%'
    },
    '& > img': { height: 'auto' }
  }
})

const AspectRatio: React.FC<Props> = ({ className, classes, ...props }) => {
  return <div {...props} className={clsx(classes.root, className)} />
}

export default withStyles(styles, { name: 'MPAspectRatio' })(AspectRatio)
