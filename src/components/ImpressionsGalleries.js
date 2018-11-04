import React, { Component } from 'react'
import styled from 'react-emotion'
import galleryImage from '../../assets/group.png'

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

export class ImpressionsGalleries extends Component {
  renderGaleries() {
    return galleries.map(g => {
      return (
        <Gallery key={g.galleryId}>
          <Title>
            <TitleText className="subtitle is-4">{g.title}</TitleText>
          </Title>

          <Info className="columns">
            <div className="column is-7">
              <Text>{g.fullAddress}</Text>
            </div>
            <Phone className="column is-5">
              <Text>{g.phone}</Text>
            </Phone>
          </Info>
          <Image>
            <img src={galleryImage} alt="gallery overview" />
          </Image>
        </Gallery>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <Wrap className="columns">
          <div className="column is-6">{this.renderGaleries()}</div>
          <div className="column is-6">text</div>
        </Wrap>
      </div>
    )
  }
}

export default ImpressionsGalleries

const Wrap = styled('div')`
  margin-bottom: 20px;
  width: 100%;
`

const Title = styled('div')`
  margin-bottom: 10px;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 10px;
`

const TitleText = styled('h3')`
  font-family: 'BodoniStd';
`

const Gallery = styled('div')`
  margin-bottom: 40px;
`

const Info = styled('div')`
  margin-bottom: 0 !important;
`

const Phone = styled('div')`
  text-align: right;
`

const Text = styled('p')`
  color: #979797;
  font-family: 'BodoniStd';
`

const Image = styled('div')`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`
