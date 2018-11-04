import React, { Component } from 'react'
import {Link} from 'gatsby'
import styled from 'react-emotion'

export class LandingPage extends Component {
  render() {
    return (
      <Wrap>
        <div>Map</div>
        <div>list of galleries</div>
      </Wrap>
    )
  }
}

export default LandingPage

const Wrap = styled('div')`
  width: 100%;
  height: calc(100vh - 98px);
  display: flex;
  align-items: center;
  justify-content: center;
`
