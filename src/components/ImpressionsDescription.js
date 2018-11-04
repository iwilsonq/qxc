import React, { Component } from 'react'
import styled from 'react-emotion'
import img from '../../assets/1.jpg'

export class ImpressionsDescription extends Component {
  render() {
    return (
      <Wrap className="container">
        <Title>
          <TitleText className="title is-1">Impressionism</TitleText>
        </Title>
        <ImageContainer>
          <ImageBox>
            <img src={img} alt="impressionism" />
          </ImageBox>
        </ImageContainer>
        <Description>
          <DescriptionText>
            Impressionism is a 19th-century art movement characterized by
            relatively small, thin, yet visible brush strokes, open composition,
            emphasis on accurate depiction of light in its changing qualities
            (often accentuating the effects of the passage of time), ordinary
            subject matter, inclusion of movement as a crucial element of human
            perception and experience, and unusual visual angles. Impressionism
            originated with a group of Paris-based artists whose independent
            exhibitions brought them to prominence during the 1870s and 1880s.
          </DescriptionText>
        </Description>
      </Wrap>
    )
  }
}

export default ImpressionsDescription

const Wrap = styled('div')`
  margin-bottom: 20px;
`

const Title = styled('div')`
  margin-bottom: 40px;
  text-align: center;
`
const TitleText = styled('h2')`
  font-family: 'BayerUniversal';
`
const ImageContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
const ImageBox = styled('div')`
  font-family: 'BayerUniversal';
  padding: 35px;
  background: black;
  font-size: 0;
  img {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
  }
`

const Description = styled('div')`
  margin-bottom: 60px;
`

const DescriptionText = styled('p')``
