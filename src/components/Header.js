import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

import netlifyIdentity from 'netlify-identity-widget'

export class Header extends Component {
  componentDidMount() {
    netlifyIdentity.init()
    netlifyIdentity.on('init', user => console.log('init', user))
    // netlifyIdentity.on('login', user => this.setState({ user }, loginUser()))
  }

  toggleLogin = e => {
    e.preventDefault()

    netlifyIdentity.open()
  }
  loginUser = () => {
    debugger
  }
  render() {
    const { siteTitle } = this.props
    return (
      <Wrap>
        <div className="container">
          <LinkContainer>
            <h1 style={{ margin: 0 }}>
              <MainLink to="/">{siteTitle}</MainLink>
            </h1>
            <div>
              <LoginButton onClick={this.toggleLogin} className="button">
                Login
              </LoginButton>
            </div>
          </LinkContainer>
        </div>
      </Wrap>
    )
  }
}

export default Header

const Wrap = styled('div')`
  background-color: #ff9393;
`

const LinkContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
`

const MainLink = styled(Link)`
  padding: 16px 0;
  display: block;
  color: #fff;
  font-family: 'BayerUniversal';
  font-size: 35px;
`

const LoginButton = styled('button')`
  padding: 16px 0;
  border: none;
  background: none;
  color: #fff;
  font-family: 'BayerUniversal';
  font-size: 35px;
`
