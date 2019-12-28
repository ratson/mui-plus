import { useTheme } from '@material-ui/core/styles'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React from 'react'

type BreakpointProps = {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
}

type Props = BreakpointProps &
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >

const useResponsiveSrc = (props: BreakpointProps) => {
  const theme = useTheme()
  const matched = (Object.keys(props) as Breakpoint[]).reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: useMediaQuery(theme.breakpoints.up(breakpoint))
    }),
    {} as { [x in Breakpoint]: boolean }
  )
  const allBreakporints: Breakpoint[] = ['xl', 'lg', 'md', 'sm', 'xs']
  const breakpoints = allBreakporints.filter(x => props[x])
  for (const breakpoint of breakpoints) {
    if (matched[breakpoint] && props[breakpoint]) {
      return props[breakpoint]
    }
  }
  return undefined
}

const ResponsiveImg: React.FC<Props> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  src,
  ...props
}) => {
  const matchedSrc = useResponsiveSrc({ xs, sm, md, lg, xl })
  return <img {...props} src={matchedSrc || src} />
}

export default ResponsiveImg
