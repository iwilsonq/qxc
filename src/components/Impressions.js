import React, { Component } from 'react'
import styled from 'react-emotion'
import axios from 'axios'

const galleries = [
  {
    galleryId: '123',
    title: 'Grand Gallery',
    fullAddress: '1238 Somestreet, San Francisco, CA',
    score: 3, // liked the most art from that gallery
    pieces: [],

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
    galleryId: '125',
    title: 'Picasso Arts 2',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 0, // just a suggestion

    lat: 37.2749,
    lng: 122.6194,
  },
  {
    galleryId: '126',
    title: 'Picasso Arts 3',
    fullAddress: '121 Folsom street, San Francisco, CA',
    score: 0,

    lat: 37.2749,
    lng: 122.6194,
  },
]

export class Impressions extends Component {
  state = {
    galleries: [],
  }

  componentDidMount() {
    axios
      .get('/.netlify/functions/impressions')
      .then(response => console.log(response))
      .then((response) => this.setState({ galleries: response }))
  }

  render() {
    console.log(`this.state.galleries`, this.state.galleries)
    return (
      <Wrap>
        <div>Mathced Galleries</div>
        {galleries.map(g => {
          return <div key={g.id}>{g.title}</div>
        })}
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
