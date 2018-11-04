import React, { Component } from 'react'
import styled from 'react-emotion'
import MapView from '../components/MapView'

import ImpressionsDescription from './ImpressionsDescription'
import ImpressionsGalleries from './ImpressionsGalleries'

export class Impressions extends Component {
  render() {
    return (
      <Wrap>
        <ImpressionsDescription />
        <ImpressionsGalleries />
      </Wrap>
    )
  }
}

export default Impressions

const Wrap = styled('div')`
  width: 100%;

  justify-content: center;
  padding-top: 40px;
`
