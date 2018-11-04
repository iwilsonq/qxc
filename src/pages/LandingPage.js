import React, { Component } from 'react'
import styled, { css } from 'react-emotion'

export class LandingPage extends Component {
  render() {
    const url =
      'https://d5jmjyzrse4ui.cloudfront.net/720p/8yVVFUcKRvToitQ5hoiO4QFlkmthuHF5.mp4'
    return (
      <Wrap>
        <Video id="background-video" loop autoPlay>
          <source src={url} type="video/mp4" />
          <source src={url} type="video/ogg" />
          Your browser does not support the video tag.
        </Video>
        <ButtonWrap>
          <button className="button is-primary is-medium">Continue</button>
        </ButtonWrap>
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
  background: black;
  justify-content: center;
  overflow: hidden;
`

const Video = styled('video')`
  width: 100%;
  height: 100%;
  max-height: auto;
`

const ButtonWrap = styled('div')`
  position: absolute;
  bottom: 20%;
  right: 10%;
`
