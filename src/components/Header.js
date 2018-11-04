import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import netlifyIdentity from 'netlify-identity-widget'

class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init(user => console.log(user))
  }

  handleIdentity = e => {
    e.preventDefault()
    netlifyIdentity.open()
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
            <LoginButton onClick={this.handleIdentity} className="button">
              Login
            </LoginButton>
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
