import React, { Component } from 'react'
import styled from 'react-emotion'

const galleries = [
  {
    galleryId: '123',
    title: 'Grand Gallery',
    fullAddress: '1238 Somestreet, San Francisco, CA',
    score: 3, // liked the most art from that gallery

    lat: 37.7749,
    lng: 122.4194,
  },
  {
    galleryId: '124',
    title: 'Picasso Arts',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 1, // liked only 1 piece

    lat: 37.2749,
    lng: 122.6194,
  },
  {
    galleryId: '124',
    title: 'Picasso Arts',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 0, // just a suggestion

    lat: 37.2749,
    lng: 122.6194,
  },
  {
    galleryId: '124',
    title: 'Picasso Arts',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 0,

    lat: 37.2749,
    lng: 122.6194,
  },
]

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
