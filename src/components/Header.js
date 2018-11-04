import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

export class Header extends Component {
  state = {
    user: null,
  }
  componentDidMount() {
    window.netlifyIdentity.on('init', user =>
      this.setState({ user }, this.loginUser())
    )
  }

  handleIdentity = e => {
    e.preventDefault()
    window.netlifyIdentity.open()
  }

  loginUser = () => {
    console.log('loginUser')
  }

  render() {
    const { siteTitle } = this.props
    const { user } = this.state

    return (
      <Wrap>
        <div className="container">
          <LinkContainer>
            <h1 style={{ margin: 0 }}>
              <MainLink to="/">{siteTitle}</MainLink>
            </h1>
            <div>
              {user && <p>{user}</p>}
              <LoginButton onClick={this.handleIdentity} className="button">
                {!user ? 'Login' : 'Logout'}
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
