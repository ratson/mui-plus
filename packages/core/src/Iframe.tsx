import { createStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'

const styles = createStyles({
  root: {
    borderWidth: 0
  },
  fullWidth: {
    width: '100%'
  }
})

type Props = {
  classes: Record<keyof typeof styles, string>
  fullWidth?: boolean
} & React.DetailedHTMLProps<
  React.IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>

const Iframe: React.FC<Props> = ({
  classes,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <iframe
      {...props}
      className={clsx(
        classes.root,
        {
          [classes.fullWidth]: fullWidth
        },
        className
      )}
    />
  )
}

export default withStyles(styles, { name: 'MPIframe' })(Iframe)
