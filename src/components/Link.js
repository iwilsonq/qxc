import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export const Link = props => {
  const style = {
    color: '#fff',
    textDecoration: 'none',
    ...props.style,
  }
  return (
    <GatsbyLink style={style} to={props.to}>
      {props.children}
    </GatsbyLink>
  )
}
