import React, { Component } from 'react'
import styled from 'react-emotion'

export class Impressions extends Component {
  render() {
    return (
      <Wrap>
        <div>Map</div>
        <div>list of galleries</div>
      </Wrap>
    )
  }
}

export default Impressions

const Wrap = styled('div')`
  width: 100%;
  height: calc(100vh - 98px);
  justify-content: center;
`
