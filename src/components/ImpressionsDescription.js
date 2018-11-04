import React, { Component } from 'react'
import styled from 'react-emotion'
import img from '../../assets/1.jpg'

export class ImpressionsDescription extends Component {
  render() {
    const { image, title, description } = this.props
    return (
      <Wrap className="container">
        <Title>
          <TitleText className="title is-1">{title}</TitleText>
        </Title>
        <ImageContainer>
          <ImageBox>
            <img src={image} alt="impressionism" />
          </ImageBox>
        </ImageContainer>
        <Description>
          <DescriptionText>{description}</DescriptionText>
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
