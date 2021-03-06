import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import EmailForm from '../components/Form'

import video from '../../static/banksy_40_sec.mp4'

export class LandingPage extends Component {
  render() {
    // const url =
    //   'https://d5jmjyzrse4ui.cloudfront.net/720p/8yVVFUcKRvToitQ5hoiO4QFlkmthuHF5.mp4'
    return (
      <Wrap>
        <div>
          <BlackFrame>
            <WhiteFrame>
              <Video id="background-video" loop autoPlay>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/ogg" />
                Your browser does not support the video tag.
              </Video>
            </WhiteFrame>
            <ButtonWrap>
              <Link to={'/exhibit'}>
                <button className="button is-danger is-large">Continue</button>
              </Link>
            </ButtonWrap>
          </BlackFrame>
          <EmailForm />
        </div>
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
  flex-direction: column;
`

const BlackFrame = styled('div')`
  padding: 35px;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  margin-bottom: 40px;
`

const WhiteFrame = styled('div')`
  padding: 20px 30px;
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Video = styled('video')`
  max-width: 700px;
  width: 100%;
  height: 100%;
  max-height: auto;
`

const ButtonWrap = styled('div')`
  position: absolute;
  bottom: 20%;
  right: 0;
`
