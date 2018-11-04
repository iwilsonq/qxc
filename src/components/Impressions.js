import React, { Component } from 'react'
import styled from 'react-emotion'

import ImpressionsDescription from './ImpressionsDescription'
import ImpressionsGalleries from './ImpressionsGalleries'

const galleries = [
  {
    galleryId: '123',
    title: 'Grand Gallery',
    fullAddress: '1238 Somestreet, San Francisco, CA',
    phone: '415-397-8114',
    score: 3, // liked the most art from that gallery

    lat: 37.7749,
    lng: 122.4194,
  },
  {
    galleryId: '124',
    title: 'Picasso Arts',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 1, // liked only 1 piece
    phone: '415-397-8114',

    lat: 37.2749,
    lng: 122.6194,
  },
  {
    galleryId: '125',
    title: 'Picasso Arts 2',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 0, // just a suggestion
    phone: '415-397-8114',

    lat: 37.2749,
    lng: 122.6194,
  },
  {
    galleryId: '126',
    title: 'Picasso Arts 3',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 0,
    phone: '415-397-8114',

    lat: 37.2749,
    lng: 122.6194,
  },
]

export class Impressions extends Component {
  render() {
    const description = `Impressionism is a 19th-century art movement characterized by
    relatively small, thin, yet visible brush strokes, open composition,
    emphasis on accurate depiction of light in its changing qualities
    (often accentuating the effects of the passage of time), ordinary
    subject matter, inclusion of movement as a crucial element of human
    perception and experience, and unusual visual angles. Impressionism
    originated with a group of Paris-based artists whose independent
    exhibitions brought them to prominence during the 1870s and 1880s.`
    const title = 'Impressionism'
    const image = require('../../assets/1.jpg')

    return (
      <Wrap>
        <ImpressionsDescription
          image={image}
          description={description}
          title={title}
        />
        <ImpressionsGalleries galleries={galleries} />
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
