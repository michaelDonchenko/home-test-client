import React from 'react'
import { Typography } from '@material-ui/core'

const Title = ({ text }) => {
  return (
    <Typography align="center" variant="h4" style={{ margin: '2rem 0' }}>
      {text}
    </Typography>
  )
}

export default Title
