import React from 'react'
import styled, { css } from 'react-emotion'

const Button = props => {
  const { text, style } = props
  return (
    <ButtonEl
      className={`button ${
        style && style === 'secondary' ? 'button--secondary' : 'button--primary'
      }`}
    >
      {text}
    </ButtonEl>
  )
}

const ButtonEl = styled('button')``
