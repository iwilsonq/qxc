import React, { Component } from 'react'
import styled from 'react-emotion'
import MapView from './MapView'
import galleryImage from '../../assets/group.png'

export class ImpressionsGalleries extends Component {
  renderGaleries() {
    const { galleries } = this.props
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
      <div style={{ marginLeft: 75, marginBottom: 64}}>
        <Wrap className="columns">
          <div className="column is-6" style={{maxHeight: '100vh', overflow: 'scroll'}}>{this.renderGaleries()}</div>
          <div className="column is-6">
            <div
              style={{ backgroundColor: '#000', width: '100%', height: '100%', padding: 50 }}
            >
              <MapView galleries={this.props.galleries} />
            </div>
          </div>
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
  margin-bottom: 32px;
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
