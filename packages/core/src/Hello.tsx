import React from 'react'
import { Box } from '@material-ui/core'

export type HelloProps = {}

const Hello: React.FC<HelloProps> = ({ children }) => {
  return <Box>Hello: {children}</Box>
}

export default Hello
